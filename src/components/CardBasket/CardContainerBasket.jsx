import React, { useState } from 'react';
import CardBasket from './CardBasket';
import { useDispatch } from 'react-redux';
import { calculateTotalCost, chengeTotal, deleteByTotal } from '../../Redux/cartReduser';

const CardContainerBasket = ({item}) => {
    const dispatch = useDispatch()

    const chengeTotalValue = (item,newTotal)=>{
        dispatch(chengeTotal(item,newTotal))
        dispatch(calculateTotalCost())
    }

    item.total<1 && dispatch(deleteByTotal(item))

    return <CardBasket
    chengeTotalValue = {chengeTotalValue}
    card = {item}/>
};

export default CardContainerBasket;