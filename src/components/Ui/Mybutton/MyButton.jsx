import React from 'react';
import style from './myButton.module.css'
const MyButton = (props) => {
    
    return (
       <button className={style.myButton} {...props}>
           {props.children}
       </button>
    );
};

export default MyButton;