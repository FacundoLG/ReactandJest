import React from 'react'
import '../styles/components/Card.css'
const Card = ({data}) => {
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
            <button type="button" className="addButton">Add to cart</button>

        </article>
    )
}

export default Card
