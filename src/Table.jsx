import React from "react";

export default function Table({ data }) {
  return (
    <table>
      <tbody className="list">
        <tr className="static_row">
          <td>First Name</td>
          <td>Last Name</td>
          <td>Email</td>
          <td>Gender</td>
        </tr>
        {data.map((user) => {
          return (
            <tr key={user.id}>
              <td className="list_item">{user.first_name}</td>
              <td className="list_item">{user.last_name}</td>
              <td className="list_item">{user.email}</td>
              <td className="list_item">{user.gender}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
