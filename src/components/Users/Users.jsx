import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {  //берем юзеров и мапимся по ним и для каждого пользователя возвращаем див, цепляем к диву ключ с пользователем айди(ключем, всегда делаем пользовательский айди)

    if (props.users.lenght === 0) {
    props.setUsers(
        [
            { id: 1, photoUrl: "https://karavan.ua/wp-content/uploads/2019/05/zast-1.jpg", fillowed: true, fullName: "Dima", status: "Everything okey", location: { city: "Kyiv", country: "Ukraine" } },
            { id: 2, photoUrl: "https://karavan.ua/wp-content/uploads/2019/05/zast-1.jpg", fillowed: false, fullName: "Kostya", status: "Everything okey", location: { city: "Minsk", country: "Belarus" } },
            { id: 3, photoUrl: "https://karavan.ua/wp-content/uploads/2019/05/zast-1.jpg", fillowed: true, fullName: "Sergey", status: "Everything okey", location: { city: "Vashington", country: "USA" } },
            { id: 4, photoUrl: "https://karavan.ua/wp-content/uploads/2019/05/zast-1.jpg", fillowed: false, fullName: "Dima", status: "Everything okey", location: { city: "Kyiv", country: "Ukraine" } },
            { id: 5, photoUrl: "https://karavan.ua/wp-content/uploads/2019/05/zast-1.jpg", fillowed: true, fullName: "Dima", status: "Everything okey", location: { city: "Kyiv", country: "Ukraine" } },
        ]
     )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span
                ><div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;