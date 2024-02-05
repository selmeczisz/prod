import React from 'react'
import pic1 from '../assets/about1.jpg'
import pic2 from '../assets/about2.jpg'
import './about.scss'


export const About = () => {
    return (
        <div className='container mt-5 p-5 shadow about '>
            <div className="row">
                <div className="col-6">
                    <h2>Welcome to Our Store!
                    </h2>
                    <p>We believe in bringing you the finest products with a touch of unique property. <br></br>Our mission is to providing you with main benefits or special features.
                    </p>

                    <h2>Our Story
                    </h2>
                    <p>Founded in 2010, Our Store has been a labor of love. We started with a passion for products and a vision to general objective or value.
                        Over the years, we've expanded in the world.</p>
                </div>
                <div className="col-4">
                    <img src={pic2} alt="store picture" className="img-fluid img-thumbnail" />
                </div>
            </div>

            <div className="row">

                <div className="col-4">
                    <img src={pic1} alt="" className="img-fluid img-thumbnail" />
                </div>

                <div className="col-6">
                    <h2>What Sets Us Apart?

                    </h2>
                    <ul>
                        <li><b>Quality Craftsmanship</b>: Every product is crafted with precision and care to ensure quality and durability.</li>
                        <li><b>Unique Designs</b>: Discover categoties that stand out with our exclusive designs</li>
                        <li><b>Customer Satisfaction</b>: Your happiness is our priority. We strive to provide an exceptional shopping experience and top-notch customer service.</li>
                    </ul>

                    <h2>Connect With Us

                    </h2>
                    <p>Join our community on social media to stay updated on the latest news and promotions.
                        Thank you for choosing Us.
                    </p>
                </div>
            </div>

        </div>
    )
}
