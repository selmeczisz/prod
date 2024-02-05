import React from 'react'
import { FeaturedProducts } from './FeaturedProducts'
import './home.scss'

export const Home = () => {
    return (
        <div className='home'>
            <header >
                <h1 >Welcome to Our Online Store</h1>
                <p>Discover our featured products and find the perfect items for you.</p>
            </header>

            <main>
                <div className='featured'>
                    <h2 className='col'>Featured Products</h2>
                    < FeaturedProducts />
                </div>

            </main>

            <footer>
                <p>® 2023 Our Online Store. All rights reserved</p>
            </footer>
        </div>
    )
}
