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
        </div>
    )
}
const MapStateToProps = (state) => ({
    Mstore: state.Store
})

export default connect(MapStateToProps,null)(Store)
