import './rightbar.css'

import { Users } from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar({ user }) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg"/>
                    <span className="birthdayText">
                        <b>Polo Foster</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarAd"/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(user => (
                        <Online key={user.id} user={user} />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => (
        <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">{user.city}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">{user.from}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">Joe Smith</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">Joe Smith</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">Joe Smith</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">Joe Smith</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">Joe Smith</span>
                </div>
            </div>
        </>
    )
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
               {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}