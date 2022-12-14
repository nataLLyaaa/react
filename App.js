import React, { useState } from "react";
import uuid from "react-uuid";
import Product from "./Product";
import ProductField from "./ProductField";
const initProds = [
  { id: uuid(), name: "product1", cost: 100, isEdit: false },
  { id: uuid(), name: "product2", cost: 200, isEdit: false },
  { id: uuid(), name: "product3", cost: 300, isEdit: false },
];
function App() {
  const [prods, setProds] = useState(initProds);
  function editProd(id, field, event) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod[field] = event.target.value;
        }

        return prod;
      })
    );
  }
  function setInEdit(id) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod.isEdit = !prod.isEdit;
        }
        return prod;
      })
    );
  }
  const result = prods.map((prod) => {
    return (
      <tr key={prod.id}>
        <Product
          key={prod.id}
          id={prod.id}
          name={prod.name}
          cost={prod.cost}
          isEdit={prod.isEdit}
          setIsEdit={setInEdit}
          editProd={editProd}
        />
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>cost</th>
        </tr>
      </thead>
      <tbody>{result}</tbody>
    </table>
  );
}
export default App;
