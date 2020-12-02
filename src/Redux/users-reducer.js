const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        { id: 1, photoUrl: "https://karavan.ua/wp-content/uploads/2019/05/zast-1.jpg", fillowed: true, fullName: "Dima", status: "Everything okey", location: { city: "Kyiv", country: "Ukraine" } },
        { id: 2, photoUrl: "https://karavan.ua/wp-content/uploads/2019/05/zast-1.jpg", fillowed: false, fullName: "Kostya", status: "Everything okey", location: { city: "Minsk", country: "Belarus" } },
        { id: 3, photoUrl: "https://karavan.ua/wp-content/uploads/2019/05/zast-1.jpg", fillowed: true, fullName: "Sergey", status: "Everything okey", location: { city: "Vashington", country: "USA" } },
        { id: 4, photoUrl: "https://karavan.ua/wp-content/uploads/2019/05/zast-1.jpg", fillowed: false, fullName: "Dima", status: "Everything okey", location: { city: "Kyiv", country: "Ukraine" } },
        { id: 5, photoUrl: "https://karavan.ua/wp-content/uploads/2019/05/zast-1.jpg", fillowed: true, fullName: "Dima", status: "Everything okey", location: { city: "Kyiv", country: "Ukraine" } },
    ],

};

const usersReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map ( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
  
        

        case UNFOLLOW: 
        return {
            ...state,
            users: state.users.map ( u => {
                if (u.id === action.userId) {
                    return { ...u, followed: false }
                }
                return u;
            })
        }

        case SET_USERS: {
            return { ...state, users: [ ...state.users, ...action.users ] }
        }

           default:
return state;
    }
}


export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })


export default usersReducer;