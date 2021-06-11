import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ChatOnline.css'

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
    const [friends, setFriends] = useState([])
    const [onlineFriends, setOnlineFriends] = useState([])

    useEffect(() => {
        const getFriends = async () => {
            try {
                const res = await axios.get(`/users/friends/${currentId}`)
                setFriends(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getFriends()
    }, [currentId])

    useEffect(() => {
        setOnlineFriends(friends.filter(friend => onlineUsers.includes(friend._id)))
    }, [friends, onlineUsers])

    const handleClick = async (user) => {
        try {
            const res = await axios.get(`/conversation/${currentId}/${user._id}`)
            setCurrentChat(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className="chatOnlie">
            {onlineFriends.map(onlineFriend => (
                <div className="chatOnlineFriend" key={onlineFriend._id} onClick={() => handleClick(onlineFriend)}>
                    <div className="chatOnlineImgContainer">
                        <img src="http://localhost:5000/images/person/avatar.png" alt="" className="chatOnlineImg" />
                        <div className="chatOnlineBadge"></div>
                    </div>
                    <span className="chatOnlineName">{onlineFriend.username}</span>
                </div>
            ))}
        </div>
    )
}
