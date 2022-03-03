import React from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6u1ppsf', 'template_kh9sg39', e.target, 'user_3Qmrr6MR0vYHh7GiRvOW9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            {/* ======= Contact Section ======= */}
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Contact</h2>
                    </div>
                    <div className="row mt-1">
                        <div className="col-lg-4">
                            <div className="info">
                                {/* <div className="address">
                                    <i className="bi bi-geo-alt" />
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div> */}
                                {/* <div className="email">
                                    <i className="bi bi-envelope" />
                                    <h4>Email:</h4>
                                    <p>hello@joandavies.com</p>
                                </div> */}
                                <div className="phone">
                                    <i className="bi bi-telegram" />
                                    <h4>Telegram:</h4>
                                    <li><a href="https://t.me/Tradewithjoan"><i className="bx bxl-telegram" /> <span>Please click here.</span></a></li>
                                    {/* <p>+1 5589 55488 55s</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0">
                            <form  className="php-email-form"
                                action="https://formsubmit.co/joandavies136@gmail.com"
                                 method="POST">
                                
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" htmlFor="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" htmlFor="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                {/* <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div> */}
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" htmlFor="message" rows={5} placeholder="Message" required defaultValue={""} />
                                </div>
                                {/* <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div> */}
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>{/* End Contact Section */}

        </>
    )
}
