import React from 'react';
import {useDispatch} from 'react-redux';
import {handleAdd, handleReduce} from '../Store/action';

const CounterButtons =()=>{
    const dispatch =useDispatch();
    return (
        <div style={{paddingTop:"52px"}}>

            <button onClick={()=>dispatch(handleAdd(1))} style={{}}>ADD</button>
            <button onClick={()=>dispatch(handleReduce(1))}>REDUCE</button>
            
        </div>
    );
};

export default CounterButtons;
