import React from "react";

export default function UserCard(props: any) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.role}</p>
      {props.isAdmin && <span>Admin</span>}
    </div>
  );
}
