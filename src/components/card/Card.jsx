import React from 'react';
import {Link} from 'react-router-dom';
import './card.css';

function Card({user}) {
    const path = `/carddetail/${user.id}`;

    return (
        <Link to={path} className="card-link">
            <div className="card-show-box">
                <h2 className='header-text'>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Address: {user.address.street}</p>

            </div>
        </Link>
    );
}

export default Card;
