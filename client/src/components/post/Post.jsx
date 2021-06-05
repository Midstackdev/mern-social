import { useContext, useEffect, useState } from 'react'
import { MoreVert } from '@material-ui/icons'
import './post.css'

import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export default function Post({ post }) {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const {user:currentUser} = useContext(AuthContext)

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    }, [post.likes,currentUser._id])

    const likeHandler = () => {
        try {
            axios.put(`/posts/${post._id}/like`, {userId: currentUser._id})
        } catch (error) {
            
        }
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    
    useEffect(() => {
        const fetchUser = async () => {
    
            const {data} = await axios.get(`/users?userId=${post.userId}`)
            setUser(data)
        }
        fetchUser()
        
    }, [post.userId])
    
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img src={user.profilePicture || `${PF}person/avatar.png`} alt="" className="postProfileImg"/>
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.img ? `${PF}${post.img}` : ``} alt="" className="postImg"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" onClick={likeHandler}/>
                        <img src="/assets/heart.png" alt="" className="likeIcon" onClick={likeHandler}/>
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
