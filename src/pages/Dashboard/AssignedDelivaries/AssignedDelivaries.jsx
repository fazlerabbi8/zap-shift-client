import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
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

  const handleStatusUpdate = (parcel, status) => {
    const statusInfo = { penddingStatus: status };
    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire(`Now ${status}`);
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
              <th>Confirmation</th>
              <th>parcelType</th>
              <th>Others Action</th>
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
                        onClick={() =>
                          handleStatusUpdate(parcel, "rider-arriving")
                        }
                        className="btn btn-primary text-black"
                      >
                        Accept
                      </button>

                      <button className="btn btn-error text-black">
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className="badge badge-success">
                      Delivary Accepted
                    </span>
                  )}
                </td>
                <td>{parcel.parcelType}</td>
                <td className="space-x-2">
                  {parcel.penddingStatus === "parcel-picked-up" ? (
                    <>
                      <span className="badge badge-success">
                        Parcel picked up
                      </span>
                    </>
                  ) : (
                    <button
                      onClick={() =>
                        handleStatusUpdate(parcel, "parcel-picked-up")
                      }
                      className="btn btn-primary text-black"
                    >
                      Mark as picked up
                    </button>
                  )}
                  <button
                    onClick={() =>
                      handleStatusUpdate(parcel, "parcel-delivered")
                    }
                    className="btn btn-primary text-black"
                  >
                    Mark as Delivered
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignedDelivaries;
