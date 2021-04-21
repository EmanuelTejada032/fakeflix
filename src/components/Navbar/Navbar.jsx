import React from 'react'
import {Link } from 'react-router-dom'



const Navbar = () => {

    return (
        <>   
            <nav> 
                <Link to='/'><h1>Fakeflix</h1></Link> 
                <ul>
                    <li><Link to='/movies'></Link></li>
                    <li><Link to='/tvshows'></Link></li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar
