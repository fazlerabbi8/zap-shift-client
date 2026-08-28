import { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if(sessionId){
        axiosSecure.patch(`/payment-sucess?session_id=${sessionId}`)
        .then(res => {
            console.log(res.data)
        })
    }
  }, [sessionId, axiosSecure]);
  return (
    <div>
      <h3 className="text-green-600 text-2xl font-semibold text-center mt-20">
        Your Payment Successfull
      </h3>
    </div>
  );
};

export default PaymentSuccess;
