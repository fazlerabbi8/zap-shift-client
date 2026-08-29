import { useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();

  const {
    isLoading,
    isError,
    data: parcel,
  } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      console.log(res.data);
      return res.data;
    },
  });

  if (isLoading) {
    return <span className="loading loading-spinner text-neutral"></span>;
  }
  if (isError || !parcel) return <p className="text-center mt-10 text-red-600">Failed to load parcel.</p>;

  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };

    const res = await axiosSecure.post(`/checkout-payment-session`, paymentInfo);
    if (res.data?.url) {
      window.location.href = res.data.url;
    }
  };

  return (
    <div className="text-center mt-10 space-y-3">
      <h3 className="text-gray-600">
        Please Pay {parcel.cost} for: <span className="text-green-600">{parcel.parcelName}</span>
      </h3>
      <button onClick={handlePayment} className="btn btn-warning">
        Pay
      </button>
    </div>
  );
};

export default Payment;
