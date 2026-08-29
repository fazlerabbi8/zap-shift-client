import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const axiosSecure = useAxiosSecure();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-sucess?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div>
      <h3 className="text-green-600 text-2xl font-semibold text-center mt-20">
        Your Payment Successfull
      </h3>
      <div className="mt-5 text-center">
        <p><span className="text-orange-400">Transaxtion Id:</span> {paymentInfo.transactionId}</p>
        <p><span className="text-orange-400">Tracking Id:</span> {paymentInfo.trackingId}</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
