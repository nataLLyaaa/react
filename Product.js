import React from "react";
import ProductField from "./ProductField";
function Product({ id, name, cost, isEdit, setIsEdit, editProd }) {
  return (
    <>
      <td>
        <ProductField
          id={id}
          text={name}
          type="name"
          isEdit={isEdit}
          editProd={editProd}
        />
      </td>
      <td>
        <ProductField
          id={id}
          text={cost}
          type="cost"
          isEdit={isEdit}
          editProd={editProd}
        />
      </td>

      <td>
        <button
          onClick={() => {
            setIsEdit(id);
          }}
        >
          {isEdit ? "save" : "edit"}
        </button>
      </td>
    </>
  );
}
export default Product;
