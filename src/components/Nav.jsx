import React from 'react'
import '../styles/components/Nav.css'
import {GrCart} from 'react-icons/gr'
const Nav = () => {
    return (
        <div className="Nav">
                <h2>TestStore</h2>
            <div>
                <GrCart className="icon"/>
            </div>
        </div>
    )
}

export default Nav
