import React from 'react';
import style from './card.module.css'
import MyButton from '../Ui/Mybutton/MyButton';
const CardFront = (props) => {
    
    const {
        card:{
            cost,
            description,
            img,
            title,
        },
        card,
        addToBascet
    }=props

    return (
        <div className={style.card}>
            <img className = {style.cardImg}src={img}/>
            <h2 className={style.title}>{title}
            <div className={style.cost}>{cost} $</div>
            </h2>
            <span className={style.description}>{description}</span>
            <MyButton 
                style={{display:'block'}}
                onClick={()=>addToBascet(card)}
            >
                Add to Basket
            </MyButton>
        </div>
    );
};

export default CardFront;