// UsersTable.jsx
import React from "react";
import UserRow from "./UserRow";

export default function UsersTable({ users }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className="w-[20%]">User</th>
            <th className="w-[30%]">Email</th>
            <th className="w-[20%]">Role</th>
            <th className="w-[15%]">Status</th>
            <th className="w-[15%] text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
