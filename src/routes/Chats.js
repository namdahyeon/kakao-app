import React, {useEffect, useState} from 'react';
import './Chats.css';
import './Reset.css';
import axios from 'axios';
import ChatItem from '../components/ChatItem';
import ImgJSON from '../data/ImgJSON.json';

function Chats() {

    const [names, setNames] = useState([]);
    const [comments, setComments]=useState([]);

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
            <header className="top_header_2">
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
                        <span>Edit</span>
                        <span>Chats<i className="fas fa-sort-down"></i></span>
                        <i></i>
                    </div>
                </header>
                <main className="chats">
                    <div className="search-bar">
                        <i className="fas fa-search"></i>
                        <input type="search" placeholder="Find friends, chats, Plus Friends"/>
                    </div>
                    <section>
                        <ul>
                            {names.map((name, idx) => (
                                <ChatItem
                                key = {idx}
                                id = {name.id}
                                name = {name.name}
                                comment = {comments[idx].name}
                                img = {ImgJSON[idx].img}
                                />
                            ))}
                        </ul>
                    </section>
                </main>
        </div>
    )
}

export default Chats;
