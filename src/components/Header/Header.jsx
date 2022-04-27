import React from 'react';
import { Link } from 'react-router-dom';
import CartNav from '../CartNav/CartNav';
import TotalNav from '../CartNav/TotalNav';
import style from './Header.module.css'

const Header = () => {
    return (
            <nav className={style.nav}>
                <div className= {`wraper ${style.wraperNav}`}>
                    <div></div>
                    <TotalNav/> 
                    <Link to='/cart'>
                        <CartNav/>
                    </Link>
                </div>
            </nav>
    );
};

export default Header;