import React, {useState} from "react";

function Counter() 
{
  const [count, setCount] = useState(0);

 
  const decrement = () => {
     setCount(count - 1);
  };   

  const reset = () => {
      setCount(0);
  };

  const increment = () => {
    setCount(count + 1);
 };
 

  return (
    <div className="container">
      
     <div className="counter">
      <h1>Counter</h1>
      <h2 className="count">{count}</h2>
      <div className="buttons">

        <button onClick={decrement} style={{background:"orange",border:" 2px solid black"}}>Decrement</button>
        <button onClick={reset} style={{background:"rgb(218, 66, 20)",border:" 2px solid black"}}>Reset</button>
        <button onClick={increment} style={{background:"rgb(93, 142, 9)",border:" 2px solid black"}}>Increment</button>

      </div>
    </div>
    </div>
  );
}

export default Counter;
