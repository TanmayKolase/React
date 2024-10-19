import React from "react";

const UserItem = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.hobbies.join(", ")}</td>
    </tr>
  );
};

export default UserItem;
