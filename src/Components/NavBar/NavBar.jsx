import React from 'react'
import { Link } from 'react-router-dom'
import imgUser from '../../assets/default-no-user-pic.jpg'
import './NavBar.scss'

const NavBar = () => {
    return (
        <header>
            <nav className="navbar">
                <Link to="/"className='navbar-home'>Home<i class='bx bx-star'></i></Link>
                <form action="" className='navbar-search'>
                    <input type="text" name="" id="" placeholder='Search Twitter' />
                    <button type='submit'><i class='bx bx-search' ></i></button>
                </form>
                <div className="navbar-account">
                    <img src={imgUser} alt="" />
                    <h2>My account</h2>
                    <i class='bx bx-dots-horizontal-rounded'></i>
                </div>
            </nav>
        </header>
    )
}

export default NavBar