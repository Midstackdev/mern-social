import { useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'

import axios from 'axios'
import './feed.css'

export default function Feed({ username }) {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        const fetchPosts = async () => {
            
            const {data} = username ? await axios.get(`/posts/profile/${username}`) : await axios.get(`posts/timeline/60944bf56cf05131caea1b56`)
            setPosts(data)
        }
        fetchPosts()
        
    }, [username])
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                { posts.map(post => (
                    <Post key={post._id} post={post}/>
                ))}
            </div>
        </div>
    )
}