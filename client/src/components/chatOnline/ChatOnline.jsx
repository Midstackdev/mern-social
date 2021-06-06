import React from 'react'
import './ChatOnline.css'

export default function ChatOnline() {
    return (
        <div className="chatOnlie">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img src="http://localhost:5000/images/person/avatar.png" alt="" className="chatOnlineImg" />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Ali Bomaye</span>
            </div>
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img src="http://localhost:5000/images/person/avatar.png" alt="" className="chatOnlineImg" />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Ali Bomaye</span>
            </div>
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img src="http://localhost:5000/images/person/avatar.png" alt="" className="chatOnlineImg" />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Ali Bomaye</span>
            </div>
        </div>
    )
}
