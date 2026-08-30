import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaCheck, FaTrash } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const ApproveRider = () => {
  const axiosSecure = useAxiosSecure();
  const { data: riders = [] } = useQuery({
    queryKey: ["riders", "pendding"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });
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
                <td>{rider.status}</td>
                <td>{rider.district}</td>
                <td className="space-x-2">
                  <button className="btn">
                    <FaCheck />
                  </button>
                  <button className="btn">
                    <RxCross1 />
                  </button>
                  <button className="btn">
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
