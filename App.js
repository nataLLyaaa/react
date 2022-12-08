import React, { useState } from "react";
function App() {
  const [visible, setVisible] = useState(false);

  let elem1, elem2, elem3;
  if (visible) {
    elem1 = <p>text1 </p>;
    elem2 = <p>text2 </p>;
    elem3 = <p>text3 </p>;
  }

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "hide1" : "show1"}
      </button>

      <button onClick={() => setVisible(!visible)}>
        {visible ? "hide2" : "show2"}
      </button>

      <button onClick={() => setVisible(!visible)}>
        {visible ? "hide3" : "show3"}
      </button>
      {elem1}
      {elem2}
      {elem3}
    </div>
  );
}
export default App;
