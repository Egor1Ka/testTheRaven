import React from 'react';
import { useSelector } from 'react-redux';
import CardMapBasket from '../components/CardBasket/CardMapBasket';
import FormBasketContainet from '../components/Form/FormBasketContainet';

const CartPages = () => {
    console.log(useSelector((state)=>state.cartReduser))
    return (
        <div className='wraper' style={{display:'flex'}}>
            <CardMapBasket/>
            <FormBasketContainet/>
        </div>
    );
};

export default CartPages;