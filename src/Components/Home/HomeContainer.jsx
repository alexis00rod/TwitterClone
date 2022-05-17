import React from 'react'
import './HomeContainer.scss'
import { CTATweet } from './CTATweet/CTATweet'
import imgUser from '../../assets/default-no-user-pic.jpg'
import { AsideContainer } from './CTATweet/AsideContainer/AsideContainer'

const HomeContainer = () => {
    return (
        <main>
            <header>
                <nav className='navbar'>
                    <a href="/" className='navbar-home'><h1>Home</h1><i class='bx bx-star' ></i></a>
                    <form action="" className='navbar-search'>
                        <input type="text" name="" id="" placeholder='Search Twitter'/>
                        <button type='submit'><i class='bx bx-search' ></i></button>
                    </form>
                    <a href="/" className='navbar-account'>
                        <img src={imgUser} alt="" />
                        <h2>My account</h2>
                        <i class='bx bx-dots-horizontal-rounded'></i>
                    </a>
                </nav>
            </header>
            <section>
                <CTATweet />
            </section>
            <AsideContainer />
        </main>
    )
}

export default HomeContainer