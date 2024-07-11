import React from 'react';
import {useSelector} from 'react-redux';

const CounterValue =()=>{
    const counter =useSelector((state)=>state.counter);

    return (
       
      <div style={{paddingTop:"15%"}}>
       <h1 style={{color:"teal"}}>Counter</h1>
       <br/>
          <h1>{counter}</h1>

      </div>
    );
};

export default CounterValue;
