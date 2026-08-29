import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`payments?email=${user.email}`);
      console.log("payments response:", res.data);
      return res.data;
    },
  });
  return (
    <div className="p-4">
      <h3 className="text-blue-500 text-2xl font-semibold">Payment History</h3>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Amount</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payments.map((payment, idx) => (
              <tr key={payment._id}>
                <th>{idx + 1}</th>
                <td>{payment.parcelName}</td>
                <td>${payment.amount}</td>
                <td className="text-green-500">{payment.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
