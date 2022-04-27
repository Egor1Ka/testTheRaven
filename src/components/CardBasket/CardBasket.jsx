import React from 'react';
import MyButton from '../Ui/Mybutton/MyButton';
import style from './Card.module.css'
const CardBasket = ({ card, chengeTotalValue }) => {
    const {
        img,
        title,
        total,
        description,
        cost
    } = card
    
    return (
        <div className={style.myCard}>
            <img
                className={style.cardImg}
                src={img}
            />
            <div className={style.information}>
                <h2 className={style.title}>
                    {title}
                    <div>{cost}$</div>
                </h2>
                <div className={style.description}>{description}</div>
                <MyButton 
                onClick={()=>chengeTotalValue(card,total + 1)}
                style={{borderRadius:'40%'}}>
                    +
                </MyButton>
                <strong>{total}</strong>
                <MyButton 
                onClick={()=>chengeTotalValue(card,total - 1)}
                style={{borderRadius:'40%'}}>
                    ‐
                </MyButton>
            </div>

        </div>
    );
};

export default CardBasket;