import React from 'react'
import imgUser from "../../assets/default-no-user-pic.jpg"
import imgBanner from "../../assets/banner.jpg"
import "./ProfileContainer.scss"

const Profile = () => {
    return (
        <div className='profile'>
            <div className="profile-container">
                <div className="profile-container-header">
                    <img src={imgBanner} alt="" />
                    <ul>
                        <li>
                            <span>0</span>
                            <span>Tweets</span>
                        </li>
                        <li>
                            <span>0</span>
                            <span>Following</span>
                        </li>
                        <li>
                            <span>0</span>
                            <span>Followers</span>
                        </li>
                    </ul>
                </div>
                <div className="profile-container-main">
                    <div className="profile-container-main-user">
                        <div className="profile-container-main-user-img">
                            <img src={imgUser} alt="" />
                        </div>
                        <h2>My account</h2>
                        <button>Edit profile</button>
                    </div>
                    <div className="profile-container-main-info">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid incidunt sequi ipsa earum doloremque quis tempora dolore officia nobis provident eius esse enim fugit natus delectus saepe, ab pariatur!</p>
                        <ul>
                            <li><i class='bx bx-map'></i>Location</li>
                            <li><i class='bx bx-link'></i>Web page</li>
                            <li><i class='bx bx-calendar' ></i>Joined May 2022</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile