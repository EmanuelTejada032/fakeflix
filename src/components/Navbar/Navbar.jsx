import React from 'react'
import {Link } from 'react-router-dom'



const Navbar = () => {

    return (
        <>   
            <nav className='container navbar'>
                <Link to='/' className='logo'><h1>Fakeflix</h1></Link> 
                <ul className='nav-links'>
                    <li ><Link to='/movies' className='nav-link'>Movies</Link></li>
                    <li ><Link to='/tvshows'className='nav-link'>Tv Shows</Link></li>
                </ul>  
                <input type="search" placeholder='Search...' className='search-box'/>
            </nav>

        </>
    )
}

export default Navbar
