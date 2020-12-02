import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../Redux/users-reducer';
import Users from './Users';

let mapStateToProps = (state) => {     // mapStateToProps - функция, которая принимает весь стейт целиком и возвращает обьект только с теми данными, которые нам из стейта нужны

   return{
    users: state.usersPage.users
}
}  
let mapDispatchToProps = (dispatch) => {      // Передает дочерней компоненте через пропсы колбеки (функции, которая презентационная компонента может вызывать)
    return {
        follow: (userId) => {
            dispatch(followAC(userId));    //диспачим экшнкриейтор и указываем пользователя, которого нужно зафоловить
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));   
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));   
        },
        
    }

} 

export default connect (mapStateToProps, mapDispatchToProps)(Users);