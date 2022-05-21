import React from 'react'
import { Link } from 'react-router-dom'
import "./SideBar.scss"

const SideBar = () => {
    return (
        <div className='sidebar'>
        <div className="sidebar-top">
            <a href="/"><i class='bx bxl-twitter'></i></a>
        </div>
        <div className="sidebar-menu">
            <ul className='sidebar-menu-nav'>
                <li><Link to="/"><i class='bx bx-home' ></i>Home</Link></li>
                <li><Link to="explore"><i class='bx bx-hash' ></i>Explore</Link></li>
                <li><Link to="notifications"><i class='bx bx-bell' ></i>Notifications</Link></li>
                <li><Link to="messages"><i class='bx bx-envelope'></i>Messages</Link></li>
                <li><Link to="bookmarks"><i class='bx bx-bookmark' ></i>Bookmarks</Link></li>
                <li><Link to="list"><i class='bx bx-list-ul'></i>List</Link></li>
                <li><Link to="profile"><i class='bx bx-user'></i>Profile</Link></li>
                <li><Link to="/"><i class='bx bx-dots-horizontal-rounded'></i>More</Link></li>
            </ul>
            <div className="sidebar-menu-cta">
                <button>Tweet</button>
            </div>
        </div>
    </div>
    )
}

export default SideBar