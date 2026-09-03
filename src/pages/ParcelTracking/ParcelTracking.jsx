import { useParams } from "react-router";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const ParcelTracking = () => {
  const { trackingId } = useParams();
  const axiosInstance = useAxios();

  const { data: trackings = [] } = useQuery({
    queryKey: ["tracking", trackingId],
    queryFn: async () => {
      const res = await axiosInstance.get(`/trackings/${trackingId}/logs`);
      return res.data;
    },
  });
  return (
    <div className="p-5">
      <h3 className="text-3xl text-center">
        TrackingId: <span className="text-green-500">{trackingId}</span>
      </h3>

      <p className="mt-5 text-2xl text-center">
        Number of Tracks: {trackings.length}
      </p>

      {/* timeline */}
      <div className="flex justify-center items-center mt-20">
        <div>
          <ul className="timeline">
            {trackings.map((tracking) => (
              <li key={tracking._id}>
                <div className="timeline-start text-orange-400 font-bold">
                  {new Date(tracking.createdAt).toLocaleString()}
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box text-green-600 font-bold">
                  {tracking.details}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ParcelTracking;
