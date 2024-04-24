import React, {useState} from "react";

function Counter() 
{
  const [count, setCount] = useState(0);

  const increment = () => {
     setCount(count + 1);
  };
  const decrement = () => {
     setCount(count - 1);
  };

  const reset = () => {
      setCount(0);
  };

 

  return (
    <div className="container">
     <div className="counter">
      <h1>Counter</h1>
      <h2 className="count">{count}</h2>
      <div className="buttons">

     <button onClick={increment} id="btn1" >Increment</button>
        <button onClick={decrement} id="btn2">Decrement</button>
        <button onClick={reset} id="btn3">Reset</button>

      </div>
    </div>
    </div>
  );
}

export default Counter;
