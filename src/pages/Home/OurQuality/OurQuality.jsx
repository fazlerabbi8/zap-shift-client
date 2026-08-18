import img1 from "../../../assets/live-tracking.png";
import img2 from "../../../assets/safe-delivery.png";
import img3 from "../../../assets/safe-delivery.png";
const features = [
  {
    img: img1,
    alt: "Live Parcel Tracking illustration",
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    img:img2,
    alt: "100% Safe Delivery illustration",
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    img: img3,
    alt: "24/7 Call Center Support illustration",
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const OurQuality = () => {
  return (
    <div className="px-6 py-10">
      <div className="mx-auto max-w-5xl">
        {/* top dashed divider */}
        <div className="border-t-2 border-dashed border-[#1c5461]/40 mb-10" />

        <div className="flex flex-col gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-8 rounded-2xl bg-[#f7f8f8] p-8"
            >
              {/* Image */}
              <div className="flex-shrink-0 w-40 h-32 flex items-center justify-center">
                <img
                  src={feature.img}
                  alt={feature.alt}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Dashed vertical divider */}
              <div className="self-stretch border-l-2 border-dashed border-[#1c5461]/40" />

              {/* Text content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#0f3a44] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#5b6b70] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* bottom dashed divider */}
        <div className="border-t-2 border-dashed border-[#1c5461]/40 mt-10" />
      </div>
    </div>
  );
};

export default OurQuality;
