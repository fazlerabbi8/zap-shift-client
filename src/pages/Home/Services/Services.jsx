import serviceLogo from "../../../assets/service.png"

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    featured: true,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const Services = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto w-11/12 rounded-[20px] bg-[#003f43] px-6 py-12 md:px-12 md:py-14">
        
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Our Services
          </h2>

          <p className="mt-3 text-xs leading-5 text-white/80 md:text-sm">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex min-h-[185px] flex-col items-center rounded-2xl px-5 py-5 text-center transition duration-300 hover:-translate-y-1 ${
                service.featured ? "bg-[#c8f05a]" : "bg-white"
              }`}
            >
              {/* Image */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f1f1ff]">
                <img
                  src={serviceLogo}
                  alt=""
                  className="h-8 w-8 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold leading-5 text-[#003f43] md:text-base">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[11px] leading-[17px] text-gray-600 md:text-xs">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;