import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FiShieldOff } from "react-icons/fi";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
  const [searchText, setSearchText] = useState('');
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users", searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?searchText=${searchText}`);
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    const roleInfo = { role: "admin" };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire(`${user.name} marked as an admin.`);
          }
        });
    });
  };

  const handleRemoveAdmin = (user) => {
    const roleInfo = { role: "user" };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire(`${user.name} remove an admin.`);
          }
        });
    });
  };

  return (
    <div className="p-5">
      <h3 className="text-4xl font-semibold">All Users: {users.length}</h3>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Search User</legend>
        <input onChange={(e) => setSearchText(e.target.value)} value={searchText} type="text" className="input" placeholder="Search User" />
      </fieldset>

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
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      className="btn btn-error"
                    >
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-success"
                    >
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
