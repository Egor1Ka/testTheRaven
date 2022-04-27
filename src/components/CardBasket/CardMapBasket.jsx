import React from 'react';
import { useSelector } from 'react-redux';
import CardContainerBasket from './CardContainerBasket';
import style from './Card.module.css'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

const CardMapBasket = () => {
    const items = useSelector((state) => state.cartReduser.items)
    return (
            <TransitionGroup className={style.cardGroop}>
                {items.map((item) => (
                    <CSSTransition
                        key={item.description}
                        timeout={500}
                        classNames="item"
                    >
                        <CardContainerBasket
                            item={item}
                        />

                    </CSSTransition>
                ))}
            </TransitionGroup>
    );
};

export default CardMapBasket;