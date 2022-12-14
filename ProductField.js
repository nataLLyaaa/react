import React from "react";
function ProductField({ id, text, type, isEdit, editProd }) {
  return isEdit ? (
    <input value={text} onChange={(event) => editProd(id, type, event)} />
  ) : (
    <span> {text} </span>
  );
}
export default ProductField;
