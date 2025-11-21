// UserRow.jsx
import { FaTrash } from "react-icons/fa";

export default function UserRow({ user }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>

      <td>
        <span className={`status-pill ${user.status.toLowerCase()}`}>
          {user.status}
        </span>
      </td>

      <td className="text-center">
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
            }}
          >
            <FaTrash />
          </button>
        </div>
      </td>
    </tr>
  );
}
