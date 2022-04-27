import React from 'react';
import { useSelector } from 'react-redux';
import CartContainer from './CardFrontContainer';
import style from './card.module.css'

const CardFrontMap = () => {
    const cards = useSelector(state=>state.productReduser.items)
    
    return (
        <div className={`wraper ${style.wraper}`}>
            {cards.map(card=><CartContainer
                key={card.description}
                card = {card}
            />)}
        </div>
    );
};

export default CardFrontMap;