import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaCheck, FaTrash } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import Swal from "sweetalert2";

const ApproveRider = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "pendding"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const handleUpdateStatus = (rider, status) => {
    const updateInfo = { status: status, email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire(`Your application has been ${status}.`);
      }
    });
  };

  const handleApproved = (rider) => {
    const updateInfo = { status: "approved", email: rider.email }; 
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire("Your application is approved.");
      }
    });
  };

  
  const handleRejected = (rider) => {
    handleUpdateStatus(rider, "Rejected");
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This rider will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/riders/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire("Deleted!", "The rider has been removed.", "success");
          }
        });
      }
    });
  };
  return (
    <div className="p-5">
      <h3 className="text-4xl font-semibold">
        Approve Pendding Riders: {riders.length}{" "}
      </h3>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Status</th>
              <th>District</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {riders.map((rider, idx) => (
              <tr>
                <th>{idx + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>
                  <span
                    className={`badge ${
                      rider.status === "approved"
                        ? "badge-success text-white"
                        : "badge-error text-white"
                    }`}
                  >
                    {rider.status}
                  </span>
                </td>
                <td>{rider.district}</td>
                <td className="space-x-2">
                  <button onClick={() => handleApproved(rider)} className="btn">
                    <FaCheck />
                  </button>
                  <button onClick={() => handleRejected(rider)} className="btn">
                    <RxCross1 />
                  </button>
                  <button
                    onClick={() => handleDelete(rider._id)}
                    className="btn"
                  >
                    <FaTrash />
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

export default ApproveRider;
