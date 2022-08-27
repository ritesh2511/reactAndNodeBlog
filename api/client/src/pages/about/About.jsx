import React from 'react'
import { Context } from "../../context/Context";
import { useContext } from "react";
import "./about.css"
export default function
    () {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"
    return (
        <div className="about">
            <div className="aboutItem">
                <span className="aboutTitle">ABOUT ME</span>
                <img
                    src={PF + user.profilePic}
                    alt=""
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
                    necessitatibus nostrum illum reprehenderit.
                </p>
            </div>
            <div className="aboutItem">
                <span className="aboutTitle">FOLLOW US</span>
                <div className="aboutSocial">
                    <i className="aboutIcon fab fa-facebook-square"></i>
                    <i className="aboutIcon fab fa-twitter-square"></i>
                    <i className="aboutIcon fab fa-pinterest-square"></i>
                    <i className="aboutIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
