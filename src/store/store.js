import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users/usersSlice";
import messagesSlice from "../features/messages/messagesSlice";

export const store = configureStore({
    reducer: {
        users: usersSlice,
        messages: messagesSlice
    }
})