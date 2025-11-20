import AddressItem from "./AddressItem"

export default function AddressBlock({ trackingData }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sender */}
        <AddressItem
          label="Alamat pengirim"
          value={trackingData.origin}
          icon="user"
        />

        {/* Receiver */}
        <AddressItem
          label="Alamat penerima"
          value={trackingData.destination}
          icon="location"
        />
      </div>
    </div>
  );
}
