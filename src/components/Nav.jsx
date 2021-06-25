import React from 'react'
import '../styles/components/Nav.css'
import {BiCartAlt} from 'react-icons/bi'
const Nav = () => {
    return (
        <>
        <div className="Nav">
                <h2>TestStore</h2>
            <div>
                <BiCartAlt className="icon"/>
            </div>
        </div>
        <div children="cart">
            <div className="cartList">
            </div>
        </div>
        </>
    )
}

export default Nav
