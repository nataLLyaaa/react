import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import Users from "./Users";
const initUser = [
  { id: uuid(), name: "Иван", surname: "Иванов", age: "20", inban: false },
  { id: uuid(), name: "Петр", surname: "Петров", age: "30", inban: false },
  { id: uuid(), name: "Семен", surname: "Сидоров", age: "60", inban: false },
];
function App() {
  const [users, setUsers] = useState(initUser);
  function addToBan(id) {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          return { ...user, inban: !user.inban };
        }
        return user;
      })
    );
  }

  const result = users.map((user) => {
    return <Users {...user} key={user.id} addToBan={addToBan} />;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>surname</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>{result}</tbody>
    </table>
  );
}
export default App;
