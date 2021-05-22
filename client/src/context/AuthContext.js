import React, { createContext, useReducer } from 'react'
import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
    user: {
        "profilePicture": "",
        "coverPicture": "",
        "followers": [
          "60944bf56cf05131caea1b56"
        ],
        "followings": [],
        "isAdmin": false,
        "_id": "60944bb06cf05131caea1b55",
        "username": "sama",
        "email": "als@gm.com",
        "createdAt": "2021-05-06T20:04:00.565Z",
        "__v": 0,
        "city": "Accra",
        "desc": "i am mme",
        "from": "Ghana",
        "relationship": 1
      },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
    return (
        <AuthContext.Provider 
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
