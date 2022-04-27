import React from 'react';
import { useSelector } from 'react-redux';
import style from './CartNav.module.css'
const TotalNav = () => {
    const total = useSelector((state)=>state.cartReduser.totalCost)
    
    return (
        <span className={style.totalNav}>
            {total }$
        </span>
    );
};

export default TotalNav;