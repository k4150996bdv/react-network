import React from 'react';
import { NavLink } from 'react-router-dom';
import h from './Header.module.css';
import Login from './login';
 


const Header = (props) => {
    return (
        <header className={h.header}>
            <img src="https://previews.123rf.com/images/ppbig/ppbig1805/ppbig180501422/106633535-social-network-global-communication-network-connecting-people.jpg" alt={"logo"}/>

            <div className={h.loginBlock}>
                {props.isAuth
                    ? <div>  {props.login} <button onClick={props.logout}> Log out</button> </div>
                    : <NavLink to="/login"> <Login /> </NavLink>}
            </div>
        </header>
    );
}

export default Header;