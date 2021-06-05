import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import axios from 'axios'

import './profile.css'
import { useParams } from 'react-router'

export default function Profile() {
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const { username } = useParams()


    useEffect(() => {
        const fetchUser = async () => {
    
            const {data} = await axios.get(`/users?username=${username}`)
            setUser(data)
        }
        fetchUser()
        
    }, [username])

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={user.coverPicture ? `${PF}${user.coverPicture}` : `${PF}person/cover.jpg`} alt="" className="profileCoverImg" />
                            <img src={user.profilePicture ? `${PF}${user.profilePicture}` : `${PF}person/avatar.png`} alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <p className="profileInfoDesc">{user.desc}</p>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}
