import React from 'react'
// Components
import AsideNews from '../../Components/AsideNews/AsideNews'
import CTATweet from './CTATweet'
import TweetsContainer from './TweetsContainer'
// Styles
import './HomeContainer.scss'
import Footer from '../../Components/Footer/Footer'

const HomeContainer = () => {
    return (
        <main>
            <section>
                <CTATweet />
                <TweetsContainer />
            </section>
            <aside>
                <AsideNews />
                <Footer />
            </aside>
        </main>
    )
}

export default HomeContainer