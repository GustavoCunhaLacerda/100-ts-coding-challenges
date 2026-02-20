import React, { useState } from "react";

// Modal completamente acoplado ao componente pai
export default function UserTable() {
  const [users] = useState([
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<{ id: number; name: string; email: string } | null>(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  return (
    <div>
      <table>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button onClick={() => { setSelectedUser(u); setEditName(u.name); setEditEmail(u.email); setShowEditModal(true); }}>Edit</button>
                <button onClick={() => { setSelectedUser(u); setShowDeleteModal(true); }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de delete hardcoded aqui */}
      {showDeleteModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", padding: 24, borderRadius: 8 }}>
            <p>Delete {selectedUser?.name}?</p>
            <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
            <button onClick={() => { console.log("deleted", selectedUser?.id); setShowDeleteModal(false); }}>Confirm</button>
          </div>
        </div>
      )}

      {/* Modal de edit hardcoded aqui */}
      {showEditModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", padding: 24, borderRadius: 8 }}>
            <input value={editName} onChange={(e) => setEditName(e.target.value)} />
            <input value={editEmail} onChange={(e) => setEditEmail(e.target.value)} />
            <button onClick={() => setShowEditModal(false)}>Cancel</button>
            <button onClick={() => { console.log("saved", { ...selectedUser, name: editName, email: editEmail }); setShowEditModal(false); }}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}
