import React from "react";
import UserItem from "./UserItem";

const UsersList = (props) => {
  return (
    <>
      <h1>Users List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Hobbies</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((item) => (
            <UserItem key={item.id} user={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersList;
