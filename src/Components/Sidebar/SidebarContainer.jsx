import React from 'react'
import './Sidebar.scss'
import imgUser from '../../assets/default-no-user-pic.jpg'

const SidebarContainer = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-top">
                <a href="/"><i class='bx bxl-twitter'></i></a>
            </div>
            <div className="sidebar-menu">
                <ul className='sidebar-menu-nav'>
                    <li><a href="/"><i class='bx bx-home' ></i>Home</a></li>
                    <li><a href="/"><i class='bx bx-hash' ></i>Explore</a></li>
                    <li><a href="/"><i class='bx bx-bell' ></i>Notifications</a></li>
                    <li><a href="/"><i class='bx bx-envelope'></i>Messages</a></li>
                    <li><a href="/"><i class='bx bx-bookmark' ></i>Bookmarks</a></li>
                    <li><a href="/"><i class='bx bx-list-ul'></i>List</a></li>
                    <li><a href="/"><i class='bx bx-user'></i>Profile</a></li>
                    <li><a href="/"><i class='bx bx-dots-horizontal-rounded'></i>More</a></li>
                </ul>
                <div className="sidebar-menu-cta">
                    <button>Tweet</button>
                </div>
            </div>
        </div>
    )
}

export default SidebarContainer