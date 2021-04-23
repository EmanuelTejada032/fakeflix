import React from 'react'
import {Link } from 'react-router-dom'

const Navbar = ({searchTerm, setSearchTerm, handleSubmit}) => {
 

    return (
        <>   
            <nav className='container navbar'>
                <div className="wrapper">
                <Link to='/' className='logo'><h1>Fakeflix</h1></Link> 
                <ul className='nav-links'>
                    <li ><Link to='/movies' className='nav-link'>Movies</Link></li>
                    <li ><Link to='/tvshows' className='nav-link'>Tv Shows</Link></li>
                </ul>
                </div>
                <form onSubmit={handleSubmit}>
                   <input type="search" placeholder='Search...' className='search-box' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                </form>
            </nav>

        </>
    )
}

export default Navbar
