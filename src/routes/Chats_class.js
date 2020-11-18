import React, {Component} from 'react';
import './Chats.css';
import './Reset.css';
import axios from 'axios';
import ChatItem from '../components/ChatItem';
import ImgJSON from '../data/ImgJSON.json';


export class Chats extends Component {
    
    state = {
        names: [],
        comments : [],
    }
    
    getData = async () => {
        const {data : names} = await axios.get('https://jsonplaceholder.typicode.com/users');
        const {data : comments} = await axios.get('https://jsonplaceholder.typicode.com/comments');
        this.setState({names,comments});
    }
    componentDidMount(){
        this.getData();
    }
    render(){
        const {names, comments} = this.state;
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
   -                   <i className="fas fa-search"></i>
                        <input type="search" placeholder="Find friends, chats, Plus Friends"/>
                    </div>
                    <section>
                        <ul>
                            {names.map((name, idx) => (
                                <ChatItem
                                id= {name.id}
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
}

export default Chats;