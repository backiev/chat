import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [
        [{
          id: 0,
          idUserOnChat: 0,
          yourMessage: false,
          message: 'Hi!!!',
        },
        {
          id: 1,
          idUserOnChat: 123,
          yourMessage: true,
          message: 'yo',
        },
        {
          id: 2,
          idUserOnChat: 0,
          yourMessage: false,
          message: 'How u doing?',
        },
        {
          id: 3,
          idUserOnChat: 123,
          yourMessage: true,
          message: 'ALL gucci',
        },
      ],
      [
        {
          id: 0,
          idUserOnChat: 1,
          yourMessage: false,
          message: 'Hi!!!',
        },
        {
          id: 1,
          idUserOnChat: 123,
          yourMessage: true,
          message: 'yo',
        },
        {
          id: 2,
          idUserOnChat: 1,
          yourMessage: false,
          message: 'How u doing?',
        },
        {
          id: 3,
          idUserOnChat: 123,
          yourMessage: true,
          message: 'ALL gucci',
        },
      ],
      [
        {
          id: 0,
          idUserOnChat: 2,
          yourMessage: false,
          message: 'Hi!!!',
        },
        {
          id: 1,
          idUserOnChat: 123,
          yourMessage: true,
          message: 'yo',
        },
        {
          id: 2,
          idUserOnChat: 2,
          yourMessage: false,
          message: 'How u doing?',
        },
        {
          id: 3,
          idUserOnChat: 123,
          yourMessage: true,
          message: 'ALL gucci',
        },
      ],
      [
        {
          id: 0,
          idUserOnChat: 3,
          yourMessage: false,
          message: 'Hi!!!',
        },
        {
          id: 1,
          idUserOnChat: 123,
          yourMessage: true,
          message: 'yo',
        },
        {
          id: 2,
          idUserOnChat: 3,
          yourMessage: false,
          message: 'How u doing?',
        },
        {
          id: 3,
          idUserOnChat: 123,
          yourMessage: true,
          message: 'ALL gucci',
        },
      ],
    ],
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.messages[action.payload.idToUser].push(action.payload);
        }
    }
})

export const {addMessage} = messagesSlice.actions;
export default messagesSlice.reducer;