import { useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQueries, useQuery } from "@tanstack/react-query";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      console.log(res.data)
      return res.data;
    },
  });

  if (isLoading) {
    return <span className="loading loading-spinner text-neutral"></span>;
  }

  return (
    <div>
        <h3>Please Pay: {parcel.parcelName}</h3>
    </div>
  );
};

export default Payment;
