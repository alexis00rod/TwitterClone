import React from 'react'
import imgUser from '../../assets/default-no-user-pic.jpg'

const CTATweet = () => {
    return (
        <div className='ctatweet'>
            <img src={imgUser} alt="" />
            <div className="ctatweet-container">
                <input type="text" name="" id="" placeholder="What's happenning?"/>
                <div className="ctatweet-container-control">
                    <ul>
                        <li><i class='bx bx-image-alt'></i></li>
                        <li><i class='bx bxs-file-gif' ></i></li>
                        <li><i class='bx bx-poll' ></i></li>
                        <li><i class='bx bx-smile' ></i></li>
                    </ul>
                    <button>Tweet</button>
                </div>
            </div>
        </div>
    )
}

export default CTATweet