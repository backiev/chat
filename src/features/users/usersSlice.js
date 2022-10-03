import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: 0,
            name: 'Maria',
            lastMessage: 'Yoyo',
            img: '../assets/goodWoman.jpg',
            tagged: true
        },
        {
            id: 1,
            name: 'Ulya',
            lastMessage: 'Miss you...',
            img: '../assets/podik.jpg',
            tagged: false
        },
        {
            id: 2,
            name: 'Ksusha',
            lastMessage: 'Hello',
            img: '../assets/woman.jpg',
            tagged: false
        },
        {
            id: 3,
            name: 'Nastya',
            lastMessage: 'How u doing???',
            img: '../assets/blessed.jpg',
            tagged: false
        },
    ]
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        toggleTag: (state, action) => {
            state.users.map(user => user.tagged = false)
            const findedUser = state.users.find(user => user.id === action.payload)
            findedUser.tagged = !findedUser.tagged
        },
    }
})

export const {searchUsers, toggleTag} = usersSlice.actions
export default usersSlice.reducer