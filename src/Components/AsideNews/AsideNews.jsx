import React from 'react'
import "./AsideNews.scss"

// News
import weatherNews from "../../assets/weather.jpg"
import covid19News from "../../assets/covid19.jpg"
import newNews from "../../assets/new.jpg"


const AsideNews = () => {
    return (
        <div className='asidenews-container'>
            <h2>What's happenning</h2>
            <ul className="asidenews-container-list">
                <li className='asidenews-container-list-item'>
                    <div className="asidenews-container-list-item-body">
                        <div className="asidenews-container-list-item-body-header">
                            <h4><i class='bx bx-cloud'></i>Weather </h4>
                            <span><i class='bx bxs-circle'></i>Live</span>
                        </div>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <img src={weatherNews} alt="" />
                </li>
                <li className='asidenews-container-list-item'>
                    <div className="asidenews-container-list-item-body">
                        <div className="asidenews-container-list-item-body-header">
                            <h4><i class='bx bxs-landmark'></i>Politics </h4>
                            <span><i class='bx bxs-circle'></i>Trending</span>
                        </div>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </li>
                <li className='asidenews-container-list-item'>
                    <div className="asidenews-container-list-item-body">
                        <div className="asidenews-container-list-item-body-header">
                            <h4><i class='bx bxs-virus'></i>COVID-19 </h4>
                            <span><i class='bx bxs-circle'></i>Live</span>
                        </div>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <img src={covid19News} alt="" />
                </li>
                <li className='asidenews-container-list-item'>
                    <div className="asidenews-container-list-item-body">
                        <div className="asidenews-container-list-item-body-header">
                            <h4><i class='bx bx-news' ></i>World News </h4>
                            <span><i class='bx bxs-circle'></i>Live</span>
                        </div>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <img src={newNews} alt="" />
                </li>
            </ul>
        </div>
    )
}

export default AsideNews