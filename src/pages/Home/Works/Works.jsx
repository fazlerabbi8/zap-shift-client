import { MapPin, Truck } from "lucide-react";

const worksData = [
  {
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const Works = () => {
  return (
    <section className="py-12">
      <div className="mx-auto w-11/12 max-w-7xl">
        {/* Heading */}
        <h2 className="mb-6 text-2xl font-bold text-[#003b43] md:text-3xl">
          How it Works
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {worksData.map((work, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center text-[#004c55]">
                <div className="relative">
                  <MapPin
                    size={30}
                    strokeWidth={1.5}
                    className="absolute -top-3 -left-2"
                  />

                  <Truck size={30} strokeWidth={1.5} className="mt-3" />
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-base font-bold text-[#003b43]">
                {work.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-6 text-gray-500">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
