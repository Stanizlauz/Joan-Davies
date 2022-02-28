import React from 'react'

export default function Hero() {
    return (
        <>
            <div>
                {/* ======= Hero Section ======= */}
                <section id="hero" className="d-flex flex-column justify-content-center">
                    <div className="container" data-aos="zoom-in" data-aos-delay={100}>
                        <h1>Miss, Joan Davies</h1>
                        <p> Crypto and Forex Trader</p>
                        <div className="social-links">
                            {/* <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a> */}
                            <a href="https://t.me/Tradewithjoan" className="telegram"><i className="bx bxl-telegram" /></a>
                        </div>
                    </div>
                </section>{/* End Hero */}
                <main id="main" />
            </div>

        </>
    )
}
