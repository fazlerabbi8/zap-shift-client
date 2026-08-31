import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FiShieldOff } from "react-icons/fi";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
  const {refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });


  const handleMakeAdmin = user =>{
    const roleInfo = {role: 'admin'};
    axiosSecure.patch(`/users/${user._id}`, roleInfo)
    .then(res => {
      if(res.data.modifiedCount){
        refetch();
        Swal.fire(`${user.name} marked as an admin.`)
      }
    })
  }
  const handleRemoveAdmin = user =>{
    const roleInfo = {role: 'user'};
    axiosSecure.patch(`/users/${user._id}`, roleInfo)
    .then(res => {
      if(res.data.modifiedCount){
        refetch();
        Swal.fire(`${user.name} marked as an admin.`)
      }
    })
  }

  return (
    <div className="p-5">
      <h3 className="text-4xl font-semibold">All Users: {users.length}</h3>

      {/* users table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Actions</th>
              <th>Others Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, idx) => (
              <tr>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td className="font-semibold">{user.role}</td>
                <th>
                  {user.role === "admin" ? (
                    <button onClick={() => handleRemoveAdmin(user)} className="btn btn-error">
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button onClick={() => handleMakeAdmin(user)}
                    className="btn btn-success">
                      <FaUserShield />
                    </button>
                  )}
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">Actions</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
