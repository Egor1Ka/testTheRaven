import React from 'react';
import { useSelector } from 'react-redux';
import style from './CartNav.module.css'

const CartNav = () => {
    
    const valueInCart = useSelector((state)=>state.cartReduser.items.length)

    return (
        <>
            <div className={style.cartContainer}>
            <img 
                className={style.cartImg}
                src="https://cdn-icons-png.flaticon.com/512/3081/3081822.png"/>
            <div className={style.circle}>{valueInCart}</div> 
            </div>
        </>
    );
};

export default CartNav;