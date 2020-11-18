import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Friends.css';
import './Reset.css';
import axios from 'axios';
import FriendItem from '../components/FriendItem';
import profile from '../images/profile.jpg';
import user_profile from '../images/user_profile.jpg';
import img1 from '../images/empty.jpg';
import ImgJSON from '../data/ImgJSON.json';

function Friends() {

    const [names, setNames] = useState([]);
    const [comments, setComments] = useState([]);

    const getData = async () => {
        const {data : newNames} = await axios.get('https://jsonplaceholder.typicode.com/users');
        const {data : newComments} = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setNames(newNames);
        setComments(newComments);
    }
    useEffect(()=>{ getData() },[]);

    if(comments.length === 0) return null;
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
                                    <img src={profile} alt="my profile photo" />
                                    <span>My Name</span>
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
                    <div className="list">
                        <ul>
                            {names.map((name, idx) => (
                                <FriendItem
                                id= {name.id}
                                name = {name.name}
                                comment = {comments[idx].name}
                                img = {ImgJSON[idx].img}
                                />
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Friends;
