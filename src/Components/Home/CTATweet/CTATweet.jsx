import React from 'react'
import './CTATweet.scss'
import imgUser from '../../../assets/default-no-user-pic.jpg'

export const CTATweet = () => {
    return (
        <div className='tweet-container'>
            <img src={imgUser} alt="" />
            <div className="tweet-content">
                <input type="text" name="tweet" id="tweet" placeholder="What's happening?"/>
                <div className="tweet-content-cta">
                    <ul>
                        <li><i class='bx bxs-image'></i></li>
                        <li><i class='bx bxs-file-gif'></i></li>
                        <li><i class='bx bx-poll'></i></li>
                        <li><i class='bx bx-smile'></i></li>
                        <li><i class='bx bx-calendar-plus' ></i></li>
                    </ul>
                    <button>Tweet</button>
                </div>
            </div>
        </div>
    )
}
