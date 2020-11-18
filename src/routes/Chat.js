import React from 'react';
import './Chat.css';
import './Reset.css';
import user_profile from '../images/user_profile.jpg';

function Chat() {
    return (
        <div>
            <header className="top_header_6">
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
                    <span><a href="chats.html"><i className="fas fa-chevron-left"></i></a></span>
                    <span>Friend Name</span>
                    <span><i className="fas fa-search"></i><i className="fas fa-bars"></i></span>
                </div>
            </header>
            <main className="chat">
                <p>Wednesday, April 12, 2018</p>
                <div className="my_chat">
                    <em>17:33</em>
                    <div className="m_chat">
                        <p>Hello!</p>
                        <p>Hello! This is a test message.<br/>Hello!</p>
                        <p>This is a test message.</p>
                    </div>
                </div>
                <div className="user_chat">
                    <img src={user_profile} alt="user_profile" />
                    <div className="u_chat">
                        <h3>Friend Name</h3>
                        <p>And this is an answer</p>
                        <p>And this is an answer And this is an answer</p>
                        <p>And this is an answer</p>
                    </div>
                    <em>20:37</em>
                </div>        
            </main>
            <section className="chat_s">
                <i className="fas fa-plus"></i>
                <div className="keybord">
                    <input type="text" placeholder="" />
                    <i className="far fa-smile"></i>
                    <i className="fas fa-microphone"></i>
                </div>
            </section>
        </div>
    );
}

export default Chat;