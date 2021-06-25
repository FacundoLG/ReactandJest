import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions'
import '../styles/components/Card.css'
const Card = (props) => {
    const {data} = props
    const handleAddToCart = () =>{
        props.addToCart({
            id: data.id
        })
    }
    return (
        <article className="Card">
            <div className="imgContainer" style={{backgroundImage: `url(${data.images[0]})`}}>
            </div>
            <div className="dataContainer">
                <div className="data">
                    <h5>{data.name}</h5>
                    <p>{data.description}</p>
                </div>
            </div>
            <button type="button" className="addButton" onClick={handleAddToCart} >Add to cart</button>

        </article>
    )
}
const MapDispathToProps = ({
    addToCart,
})
export default connect(null,MapDispathToProps)(Card)
