import React from 'react';

export const Proyects = () => {
    return (
        <div className="preset-container">
            <h1 className="a-title">Previous Proyects</h1>
            <p className="a-description">This section is looking kinda empty... to solve it click <a href="/contact">THIS</a> </p>
            <div>
                <div>
                    <h3><a href="https://sucoin.com.ar/">SUCOIN</a></h3>
                    <span>Private Repo</span>
                </div>
                <p>The SUCOIN proyect is a currently available web service for a cryptocurrency that goes by the same name.</p>
                <p>This was my first real proyect! I worked as a front-end developer with another newbie, with all the page markup, structure, design, and javascript. <br />
                Primarily using ReactJS, and typescript for functionality, html for structure, and sass for styling.</p>
            </div>
            <div>
                <div>
                    <h3>MATIMOVEMENT</h3>
                    <span><a href="https://github.com/MachiHat/MatiMovement">GitHub Repo</a></span>
                </div>
                <p>My first ever proyect, made for a final asignment for the CoderHouse academy HTML5 and CSS3 course. </p>
            </div>
            <div>
                <h3><a href="https://matimovement-shop.netlify.app/">MATIMOVEMENT - ECOMMERCE</a></h3>
                <span><a href="https://github.com/MachiHat/E-Commerce-App">Updated Github Repo</a></span>
                <p>Second proyect, this is an E-Commerce, as it was requested in the ReactJS course. Using the same idea as my previous proyect, I remade it entirely to fit the asignment.</p>
            </div>
        </div>
    )
}
