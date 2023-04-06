import React from "react";
import "./styles.scss";

export default function App() {
  const [count, setCount] = React.useState(0);
  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h2>Count numbers</h2>
      <h1>{count}</h1>
      <button onClick={onClickMinus} className="minus">
        -Minus
      </button>
      <button onClick={onClickPlus} className="plus">
        Plus+
      </button>
    </div>
  );
}
