import React from "react";
import usericon from "../../assets/icons/usericon.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }

    return <div className='users-container'>
        <div className="users-pagination__buttons">
            {pages.map(p => {
                return <div className={props.currentPage === p && 'pag-but__selected'}
                            onClick={(e) => props.onPageChanged(p)}
                >{p}</div>
            })}
        </div>
        {
           props.users.map(u => <div className='users-container__user' key={u.id}>
                <div className="user-bio">
                    <NavLink to={'/profile/'+u.id}><img className='user-bio__photo' src={u.photos.small != null ? u.photos.small : usericon}
                         alt="user-photo"/></NavLink>

                    {u.followed ? <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {

                            props.unfollow(u.id);


                        }} className='user-bio__btn'>unfollow</button>
                        : <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {

                            props.follow(u.id);


                        }} className='user-bio__btn'>follow</button>}
                </div>
                <div className="user-about">
                    <p className="user-about__name">{u.name}</p>
                    <p className="user-about__status">{u.status}</p>
                    <p className="user-about__city">{'u.location.city'}, {'u.location.country'}</p>
                </div>
            </div>)
        }
    </div>
}

export default Users;