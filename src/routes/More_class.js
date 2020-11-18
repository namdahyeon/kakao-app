import React from 'react';
import './More.css';
import './Reset.css';
import profile from '../images/profile.jpg';
import img2 from "../images/kakaostory.png";
import img3 from "../images/path.png";
import img4 from "../images/kakaofriends.png";




function More() {
    return (
        <div>
            <header className="top_header_4">
                <div className="header_T">
                    <ul>
                        <li><i className="fas fa-fighter-jet"></i></li>
                        <li><i className="fas fa-wifi"></i></li>
                    </ul>
                    <span>17:33</span>
                    <ul>
                        <li><i className="far fa-moon"></i></li>
                        <li><i className="fab fa-bluetooth-b"></i></li>
                        <li><span>100%</span><i className="fas fa-battery-full"></i></li>
                    </ul>
                </div>
                <div className="header_B">
                    <span></span>
                    <span>More</span>
                    <i className="fas fa-cog"></i>
                </div>
            </header>
            <main className="more">
                <header>
                    <div className="profile">
                        <img src={profile} alt="profile"/>
                        <dl>
                            <dt>My Name</dt>
                            <dd>UserId@gmail.com</dd>
                        </dl>
                    </div>
                    <i className="far fa-comment"></i>
                </header>
                <section>
                    <ul>
                        <li><a href="#"><i className="fas fa-smile"></i><span>Emoticons</span></a></li>
                        <li><a href="#"><i className="fas fa-paint-brush"></i><span>Themes</span></a></li>
                        <li><a href="#"><i className="fas fa-user-plus"></i><span>Plus Friend</span></a></li>
                        <li><a href="#"><i className="fas fa-user-circle"></i><span>Account</span></a></li>
                    </ul>
                </section>
                <section>
                    <header>
                        <h2>Plus Friends</h2>
                        <span><i class="fas fa-info-circle"></i>Learn More</span>
                    </header>
                    <ul>
                        <li><a href="#"><i className="fas fa-utensils"></i><span>Order</span></a></li>
                        <li><a href="#"><i className="fas fa-home"></i><span>Store</span></a></li>
                        <li><a href="#"><i className="fas fa-tv"></i><span>TV Channel/Radio</span></a></li>
                        <li><a href="#"><i className="fas fa-pencil-alt"></i><span>Creation</span></a></li>
                        <li><a href="#"><i className="fas fa-graduation-cap"></i><span>Education</span></a></li>
                        <li><a href="#"><i className="fas fa-landmark"></i><span>Politics/Society</span></a></li>
                        <li><a href="#"><i className="fas fa-won-sign"></i><span>Finance</span></a></li>
                        <li><a href="#"><i className="fas fa-video"></i><span>Movies/Music</span></a></li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li><img src={img2} alt="kakaostory" /><span>Kakao Story
                        </span></li>
                        <li><img src={img3} alt="path" /><span>Path</span></li>
                        <li><img src={img4}alt="kakaofriends" /><span>kakao friends
                        </span></li>
                    </ul>
                </section>
            </main>
        </div>
    )
}

export default More;
