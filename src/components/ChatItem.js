import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ChatItem({id,name,comment,img}) {
    return (
        <li>
            <Link to="/Chat">
                <span><img src={img} alt={id} /></span>
                <div>
                    <div className="friend_chat">
                        <h3>{name}</h3>
                        <p>{comment}</p>
                    </div>
                    <em><span>17</span>:<span>33</span></em>
                </div>
            </Link>  
        </li>
    )
}

ChatItem.propTypes = {
    id : PropTypes.number.isRequired,
    img : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    comment : PropTypes.string.isRequired,
};