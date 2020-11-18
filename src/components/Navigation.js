import React from 'react';
import {NavLink} from 'react-router-dom'; /* NavLink 적어야 사용가능 */
import './Navigation.css';
import '../routes/Reset.css';

function Navigation() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" exact activeClassName="active"><i className="fas fa-user-alt"></i><span>Friends</span></NavLink></li>
                <li><NavLink to="/Chats" activeClassName="active"><i className="fas fa-comment"></i><span>Chats</span></NavLink></li>
                <li><NavLink to="/Find" activeClassName="active"><i className="fas fa-search"></i><span>Find</span></NavLink></li>
                <li><NavLink to="/More" activeClassName="active"><i className="fas fa-ellipsis-h"></i><span>More</span></NavLink></li>
            </ul>
        </nav>
    )
    /* "NavLink"태그의 "activeClassName"속성 - 활성화됐을때 클래스 이름을 적용 */
}

export default Navigation;
