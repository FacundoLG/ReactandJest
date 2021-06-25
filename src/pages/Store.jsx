import React from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card'
import '../styles/pages/Store.css'
const Store = ({Mstore}) => {
    console.log(Mstore)
    return (
        <div className="Store">
            {
                Mstore.map((prod) => 
                        <Card key={prod.id} data={prod}/>
                )
            }
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magnam assumenda obcaecati atque vel, voluptatum consequatur! Odio facere, laboriosam nesciunt magnam quod placeat eum accusantium ut! Modi hic repudiandae quam?
        </div>
    )
}
const MapStateToProps = (state) => ({
    Mstore: state.Store
})

export default connect(MapStateToProps,null)(Store)
