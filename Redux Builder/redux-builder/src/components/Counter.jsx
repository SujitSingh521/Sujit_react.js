import React from 'react';
import CounterValue from './CounterValue';
import CounterButtons from './CounterButtons';
import {useSelector} from 'react-redux';
import './Style.css';

const Counter =()=>{
    const theme =useSelector((state)=>state.theme);
    const themeClass =theme ==='dark' ? 'dark_theme':'light_theme';

    return (
        <div className={themeClass}>
            <CounterValue />
            <CounterButtons />
        </div>
    );
};

export default Counter;
