import React from 'react'

import './Conversation.css'

export default function Conversation() {
    return (
        <div className="conversation">
            <img src="http://localhost:5000/images/person/avatar.png" alt="" className="conversationImg" />
            <span className="conversationName">Mr Smith</span>
        </div>
    )
}
