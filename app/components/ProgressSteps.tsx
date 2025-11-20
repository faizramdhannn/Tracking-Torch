export default function ProgressSteps({ steps }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="relative flex justify-between items-start">
        {steps.map((step: any, index: number) => {
          const isLast = index === steps.length - 1;
          const isFirst = index === 0;

          return (
            <div
              key={step.key}
              className="flex flex-col items-center relative w-1/4"
            >
              {/* Line to left */}
              {!isFirst && (
                <div
                  className={`absolute top-6 right-1/2 h-1 transition-all duration-500 ${
                    steps[index - 1].completed ? "bg-[#aeca1f]" : "bg-gray-300"
                  }`}
                  style={{ width: "100%" }}
                />
              )}

              {/* Line to right */}
              {!isLast && (
                <div
                  className={`absolute top-6 left-1/2 h-1 transition-all duration-500 ${
                    step.completed ? "bg-[#06334d]" : "bg-gray-300"
                  }`}
                  style={{ width: "100%" }}
                />
              )}

              {/* Icon */}
              <div className="relative mb-3 z-10">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    step.completed ? "bg-[#aeca1f]" : "bg-gray-300"
                  }`}
                >
                  <img
                    src={step.icon}
                    alt={step.key}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>

              <p
                className={`text-xs md:text-sm text-center font-semibold ${
                  step.completed ? "text-gray-800" : "text-gray-400"
                }`}
              >
                {step.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
