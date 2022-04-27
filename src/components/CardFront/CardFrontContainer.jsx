import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, calculateTotalCost } from '../../Redux/cartReduser';
import Card from './CardFront';
import style from './card.module.css'

const CardFrontContainer = ({card}) => {
   

    const dispatch = useDispatch()

    const addToBascet = (cart)=>{
        dispatch(addItem(cart))
        dispatch(calculateTotalCost())
    }

    return <Card
        card={card}
        addToBascet={addToBascet}
    />
};

export default CardFrontContainer;