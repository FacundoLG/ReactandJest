import React, { useState } from 'react'
import '../styles/components/Nav.css'
import {BiCartAlt} from 'react-icons/bi'
import { connect } from 'react-redux'
import CartCard from './CartCard'
const Nav = (props) => {
    const {data} = props
    const [cart,setCart] = useState(false)

    const handleCart = () => {
        setCart(!cart)
    }
    return (
        <>
        <div className="Nav">
                <h2>TestStore</h2>
            <div>
                <BiCartAlt className="icon" onClick={handleCart} />
            </div>
        </div>
        {cart ?
        <div children="cart">
            <div className="cartList">
                {
                   data.length > 0?
                   data.map((product) =>
                   <CartCard data={product}/>
                   )
                   :
                   <p>Nothing in the cart</p>
                }
            </div>
        </div>:""
        }
        </>
    )
}

const MapStateToProps = (state) => ({
    data: state.Cart
})
export default connect(MapStateToProps,null)(Nav)
