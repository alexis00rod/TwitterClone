import React from 'react'
import './AsideContainer.scss'

export const AsideContainer = () => {
    return (
        <aside>
            <h2>What's happening</h2>
            <ul className="aside-container">
                <li>
                    <article>
                        <h5><i class='bx bx-sun'></i>Weather</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, odio.</p>
                    </article>
                </li>
                <li>
                    <article>
                        <h5><i class='bx bxs-landmark'></i>Politics</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, odio.</p>
                    </article>
                </li>
                <li>
                    <article>
                        <h5><i class='bx bxs-virus'></i>COVID-19</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, odio.</p>
                    </article>
                </li>
                <li>
                    <article>
                        <h5><i class='bx bx-world'></i>World news</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, odio.</p>
                    </article>
                </li>
            </ul>
        </aside>
    )
}
