import React from 'react';
import PropTypes from 'prop-types';

export default function FriendItem({id,name,comment,img}) {
    return (
        <li>
            <span><img src={img} alt={id} /></span>
            <h3>{name}</h3>
            <p>{comment}</p>
        </li>
    )
}

FriendItem.propTypes = {
    id : PropTypes.number.isRequired,
    img : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    comment : PropTypes.string.isRequired,
};
