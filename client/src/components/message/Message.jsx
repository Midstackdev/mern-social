import React from 'react'
import './Message.css'

export default function Message({ own }) {
    return (
        <div className={own ? `message own` : `message`}>
            <div className="messageTop">
                <img src="http://localhost:5000/images/person/avatar.png" alt="" className="messageImg" />
                <p className="messageText">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className="messageBottom">1 hour ago</div>
        </div>
    )
}
