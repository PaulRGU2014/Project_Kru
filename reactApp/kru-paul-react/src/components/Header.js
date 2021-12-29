import React from "react";
import './Header.scss'
import PaulImage from './pics/img_1.JPG'

export default function Header() {

    return (
        <div>
            <div class="languages">
                <a href="">EN</a>
                <a href="">TH</a>
            </div>
            <div className="nameTop">
                <img src={PaulImage} alt="Paul's image" class="paul" />
                <div class="nameTitle">
                    <h1 class="fullName">PAUL THANATAWEENONT</h1>
                    <ul class="careerTitle">
                        <li>junior software engineer</li>
                        <li>freelance web developer</li>
                    </ul>
                </div>

            </div>
        </div>
    )

}
