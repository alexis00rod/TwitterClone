import React from 'react'
import AsideNews from '../../Components/AsideNews/AsideNews'
import Footer from '../../Components/Footer/Footer'
import Profile from './Profile'

export const ProfileContainer = () => {
    return (
        <main>
            <section>
                <Profile />
            </section>
            <aside>
                <AsideNews />
                <Footer />
            </aside>
        </main>
    )
}
