export const getProgressSteps = (history: any[], courier: string) => {
  const steps = [
    { key: "created", label: "Pesanan Dibuat", icon: "/created.png", completed: false },
    { key: "transit", label: "Dalam Pengiriman", icon: "/transit.png", completed: false },
    { key: "delivery", label: "Diantar oleh Kurir", icon: "/delivery.png", completed: false },
    { key: "completed", label: "Sampai", icon: "/completed.png", completed: false },
  ];

  if (courier === "Lion Parcel") {
    const flags = {
      completed: history.some((h) => h.statusCode === "POD"),
      delivery: history.some((h) => ["DEL", "HND"].includes(h.statusCode)),
      transit: history.some((h) =>
        ["STI", "TRANSIT", "INHUB", "OUTHUB"].includes(h.statusCode)
      ),
      created: history.length > 0,
    };

    steps[0].completed = flags.created;
    steps[1].completed = flags.transit;
    steps[2].completed = flags.delivery;
    steps[3].completed = flags.completed;
  }

  if (courier === "SiCepat") {
    const flags = {
      completed: history.some((h) => h.statusCode === "DELIVERED"),
      delivery: history.some((h) => h.statusCode === "ANT"),
      transit: history.some((h) => ["OUT", "IN"].includes(h.statusCode)),
      created: history.some((h) => ["PICKREQ", "IN"].includes(h.statusCode)),
    };

    steps[0].completed = flags.created;
    steps[1].completed = flags.transit;
    steps[2].completed = flags.delivery;
    steps[3].completed = flags.completed;
  }

  return steps;
};
