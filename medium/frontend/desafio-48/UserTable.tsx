import React from "react";

interface User { id: number; name: string; email: string; role: string; createdAt: string }

const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "admin", createdAt: "2024-01-15" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "user", createdAt: "2024-03-22" },
];

// Tabela completamente hardcoded para User — não pode ser reutilizada para Product, Order, etc.
export default function UserTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
