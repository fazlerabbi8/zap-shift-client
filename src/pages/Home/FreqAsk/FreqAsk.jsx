import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const INITIAL_VISIBLE_COUNT = 5;

const faqs = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes, Posture Pro is designed to be adjustable and fits a wide range of body types. However, we recommend checking the size guide before purchase, and it's best suited for teens and adults rather than young children.",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "Many users report noticeable improvement in posture and reduced back discomfort within a few weeks of consistent daily use. Results vary by individual, and it works best when paired with regular movement and stretching.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Yes, the Smart edition includes gentle vibration alerts that remind you to correct your posture whenever you start slouching, along with a companion app to track your daily progress.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer:
      "Simply enter your email on the product page and click 'Notify Me.' We'll send you an email as soon as the item is available again, along with any restock discounts.",
  },
  {
    question: "What's included in the box?",
    answer:
      "Each order includes one posture corrector, an adjustable strap system, a quick-start guide, and a carry pouch. Smart edition orders also include a USB charging cable.",
  },
  {
    question: "Can I wear it under my clothes?",
    answer:
      "Yes, Posture Pro is designed to be slim and discreet, so it fits comfortably under most shirts and jackets without showing through your clothing.",
  },
];

const Faq = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-[#0f3a44] mb-4">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-sm text-[#5b6b70] mb-10 leading-relaxed">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your
          body with ease!
        </p>

        <div className="flex flex-col gap-3 text-left">
          {visibleFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="collapse collapse-arrow bg-base-100 border border-base-300"
            >
              <input
                type="radio"
                name="faq-accordion"
                defaultChecked={idx === 0}
              />
              <div className="collapse-title font-semibold text-[#0f3a44]">
                {faq.question}
              </div>
              <div className="collapse-content text-sm text-[#5b6b70]">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {faqs.length > INITIAL_VISIBLE_COUNT && (
          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="btn bg-lime-400 hover:bg-lime-500 border-none text-[#0f3a44] font-semibold rounded-full px-6"
            >
              {showAll ? "Show Less FAQ's" : "See More FAQ's"}
            </button>
            <button
              onClick={() => setShowAll((prev) => !prev)}
              aria-label={showAll ? "Show fewer FAQs" : "See more FAQs"}
              className="btn btn-circle bg-[#0f3a44] hover:bg-[#0a2b33] border-none text-white"
            >
              <ArrowUpRight
                size={18}
                className={`transition-transform duration-300 ${
                  showAll ? "rotate-90" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;