import { Cancel, EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons'
import axios from 'axios'
import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './share.css'

export default function Share() {
    const { user } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [file, setFile] = useState(null)
    const desc = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }

        if(file) {
            const data = new FormData()
            const fileName = Date.now() + file.name
            data.append('file', file)
            data.append('name', fileName)
            newPost.img = file.name

            try {
                await axios.post(`/upload`, data)
            } catch (error) {
                console.log(error)
            }
        }

        try {
            await axios.post(`/posts`, newPost)
            window.location.reload()
        } catch (error) {
            
        }

    }

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.profilePicture || `${PF}person/avatar.png`} alt="" className="shareProfileImg"/>
                    <input 
                        placeholder={`What's on your mind ${user.username}`}
                        className="shareInput"
                        ref={desc}
                    />
                </div>
                {file && (
                    <div className="shareImgContainer">
                        <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
                        <Cancel className="shareImgCancel" onClick={() => setFile(null)} />
                    </div>
                )}
                <hr className="shareHr" />
                <form className="shareBottom" onSubmit={handleSubmit}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                            <input 
                                style={{display:'none'}}
                                type="file" 
                                id="file"
                                accept=".png,.jpg,.jpeg"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button type="submit" className="shareButton">Share</button>
                </form>
            </div>
        </div>
    )
}
