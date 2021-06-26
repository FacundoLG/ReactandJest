import React from 'react'
import '../styles/components/CartCard.css'
const CartCard = (props) => {
    const {data} = props
    return (
        <div className="CartData">
            <div className="img" style={{backgroundImage: `url(${data.images})`}}>

            </div>
            <div className="cartInfo">
                <h4>{data.name}</h4>
                <h4>X1</h4>
            </div>
        </div>
    )
}
export default CartCard