import React, { useContext, useEffect, useRef, useState } from 'react'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/message/Message'
import Topbar from '../../components/topbar/Topbar'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

import './Messenger.css'

export default function Messenger() {

    const { user } = useContext(AuthContext)
    const [conversations, setConversations] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const scrollRef = useRef()

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get(`/conversation/${user._id}`)
                setConversations(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getConversations()
    }, [])

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get(`/message/${currentChat?._id}`)
                setMessages(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getMessages()
    }, [currentChat])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const message ={
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id
        }

        try {
            const res = await axios.post(`/message`, message)
            setMessages([...messages, res.data])
            setNewMessage('')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    return (
        <>
        <Topbar />
        <div className="mesenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input type="text" placeholder="Search for friends" className="chatMenuInput" />
                    {conversations.map(conversation => (
                        <div onClick={() => setCurrentChat(conversation)} key={conversation._id}>
                            <Conversation conversation={conversation} currentUser={user} />
                        </div>
                    ))}
                    
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    {
                        currentChat ? (
                            <>
                            <div className="chatBoxTop">
                                {messages.map(message => (
                                    <div ref={scrollRef} key={message._id}>
                                        <Message message={message} own={message.sender === user._id} />
                                    </div>
                                ))}
                            </div>
                            <div className="chatBoxBottom">
                                <textarea 
                                    className="chatMessageInput" 
                                    placeholder="write something..." 
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    value={newMessage}
                                ></textarea>
                                <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>
                            </div>
                            </>
                        ) : (
                            <span className="noConversationText">Open a conversation to start a chat.</span>
                        )}
                </div>

            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline />
                </div>

            </div>
        </div>
        </>
    )
}
