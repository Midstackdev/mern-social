import React from 'react'
import './Message.css'
import { format } from 'timeago.js'

export default function Message({ message, own }) {
    return (
        <div className={own ? `message own` : `message`}>
            <div className="messageTop">
                <img src="http://localhost:5000/images/person/avatar.png" alt="" className="messageImg" />
                <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    )
}
