import { Quote, Star } from "lucide-react";

const ReviewsCard = ({ review }) => {
  const { userName, review: reviewText, user_photoURL, ratings, date } =
    review;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card bg-base-100 shadow-sm rounded-2xl p-6 max-w-sm">
      <div className="flex items-start justify-between">
        <Quote size={40} strokeWidth={0} fill="#a9c9d1" className="mb-2" />

        {ratings && (
          <div className="flex items-center gap-1 text-sm font-semibold text-[#0f3a44]">
            <Star size={16} fill="#facc15" strokeWidth={0} />
            {ratings}
          </div>
        )}
      </div>

      <p className="text-[15px] text-[#3b4a4f] leading-relaxed mb-6">
        {reviewText}
      </p>

      <div className="border-t-2 border-dashed border-[#c7d0d2] mb-5" />

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full bg-[#0f3a44]">
              {user_photoURL && (
                <img src={user_photoURL} alt={userName} />
              )}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[#0f3a44] text-sm">{userName}</h4>
            {date && (
              <p className="text-xs text-[#7a8a8f]">{formattedDate}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;