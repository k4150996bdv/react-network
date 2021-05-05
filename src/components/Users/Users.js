import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';
// import Pagination from '../common/Pagination/Pagination';
import Pagination from "react-js-pagination";


let Users = (props) => {
    return <div className={styles.userContainer}>

        <Pagination itemClass="page-item"
            linkClass="page-link"
            activePage={props.currentPage}
            itemsCountPerPage={props.pageSize}
            totalItemsCount={props.totalItemsCount}
            pageRangeDisplayed={10}
            onChange={props.onPageChanged}
        />

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small || "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"} className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => { props.unfollow(u.id) }}>
                                Unfollow </button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => { props.follow(u.id) }}>
                                Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users;