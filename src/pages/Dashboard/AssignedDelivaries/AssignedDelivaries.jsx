import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Space } from "lucide-react";
const AssignedDelivaries = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user?.email, "driver-assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&penddingStatus=driver-assigned`,
      );
      return res.data;
    },
  });

  const handleAcceptDelivary = (parcel) => {
    const statusInfo = { penddingStatus: "rider-arriving" };
    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire("Thank you for accepting");
        }
      });
  };
  return (
    <div className="p-5">
      <h3 className="text-4xl font-semibold">
        All Assigned Delivaries:{parcels.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Actions</th>
              <th>parcelType</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels.map((parcel, idx) => (
              <tr key={parcel._id}>
                <th>{idx + 1}</th>
                <td>{parcel.parcelName}</td>
                <td className="space-x-1">
                  {parcel.penddingStatus === "driver-assigned" ? (
                    <>
                      <button
                        onClick={() => handleAcceptDelivary(parcel)}
                        className="btn btn-primary text-black"
                      >
                        Accept
                      </button>

                      <button className="btn btn-error text-black">
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className="badge badge-success">Delivary Accepted</span>
                  )}
                </td>
                <td>{parcel.parcelType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignedDelivaries;
