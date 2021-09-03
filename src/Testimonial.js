import React from 'react'
import './Testimonial.css'
import 'remixicon/fonts/remixicon.css'

export const Testimonial = ({ audio, avatar, designation, location, lorem, message, name, rating }) => {
    return (
        <div className="testimonial">
            <div className="testimonial__image">
                <img src={avatar} alt="" />
            </div>
            <div className="testimonial__content">
                <p className="testimonial__message"><i className="ri-double-quotes-l" />{message}</p>
                <div className="testimonial__footer">
                    <div className="testimonial__footer__left">
                        <h4 className="testimonial__heading">{name}</h4>
                        <div className="testimonial__subHeading">
                            <p className="testimonial__para">{designation}</p>
                            <p className="testimonial__para">, {location}</p>
                        </div> 
                    </div>
                    <div className="testimonial__footer__right">
                        <p className="testimonial__para">{`Rating: ${rating}`}<i className="ri-star-fill"/></p>
                    </div>   
                </div>
            </div>
        </div>  
    )
}
