import React from 'react';
import {Link} from 'react-router-dom';
import './Friends.css';
import './Reset.css';
import profile from '../images/profile.jpg';
import user_profile from '../images/user_profile.jpg';
import img1 from '../images/empty.jpg';

function Friends() {
    return (
        <div>
            <header className="top_header_1">
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
                    <span>Manage</span>
                    <span>Friends<strong>1</strong></span>
                    <i className="fas fa-cog"></i>
                </div>
            </header>
            <main className="friends">
                <div className="search-bar">
                    <i className="fas fa-search"></i>
                    <input type="search" placeholder="Find friends, chats, Plus Friends"/>
                </div>
                <section>
                    <header>
                        <h6>My Profile</h6>
                    </header>
                    <div className="my_list">
                        <ul>
                            <li>
                                <Link to="/Profile">
                                    <img src={profile} alt="my profile photo" /><span>My Name</span>
                                </Link>
                            </li>
                            <li>
                                <img src={user_profile} alt="friends profile photo" />
                                <span>Friends' Names Display</span>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <header>
                        <h6>Friends</h6>
                    </header>
                    <div className="my_list">
                        <ul>
                            <li>
                                <img src={img1} alt="friends profile photo" />
                                <span>Friend Name</span>
                                <p>Have a good day. See you soon.</p>
                            </li>
                            <li>
                                <img src={img1}alt="friends profile photo" />
                                <span>Friend Name</span>
                                <p>Have a good day. See you soon.</p>
                            </li>
                            <li>
                                <img src={img1} alt="friends profile photo" />
                                <span>Friend Name</span>
                                <p>Have a good day. See you soon.</p>
                            </li>
                            <li>
                                <img src={img1} alt="friends profile photo" />
                                <span>Friend Name</span>
                                <p>Have a good day. See you soon.</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Friends;
