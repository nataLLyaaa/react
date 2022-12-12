import React, { useState } from "react";
function Users({ id, name, surname, age, inban, addToBan }) {
  console.log("id", id);
  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
      <td>{inban ? "в бане" : "активно"}</td>
      <td>
        <button
          onClick={() => {
            addToBan(id);
          }}
        >
          {!inban ? "в бан" : "из бана"}
        </button>
      </td>
    </tr>
  );
}

export default Users;
