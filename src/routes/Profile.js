import React from 'react';
import {Link} from 'react-router-dom';
import './Profile.css';
import './Reset.css';
import profile from '../images/profile.jpg';

function Profile() {
    return (
        <div>
            <header className="top_header_5">
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
                    <span><Link to="/Friends"><i className="fas fa-times"></i></Link></span>
                    <span></span>
                    <i className="fas fa-user"></i>
                </div>
            </header>
            <main className="profile">
                <header>
                    <p><img src={profile} alt="profile" /></p>
                    <h3>My Name</h3>
                </header>
                <section>
                    <input type="text" placeholder="Userld@gmail.com"/>
                    <dl>
                        <dt className="blind">menu</dt>
                        <dd><i className="fas fa-comment"></i><span>My Chatroom</span></dd>
                        <dd><i className="fas fa-pencil-alt"></i><span>Edit Profile</span></dd>
                    </dl>
                </section>
            </main>
        </div>
    );
}

export default Profile;