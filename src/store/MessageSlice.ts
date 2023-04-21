import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type messageState = {
  Text: string;
  id: number;
  client: boolean;
};

type InitialState = {
  message: messageState[];
};

const initialState: InitialState = {
  message: [],
};

export const MessageSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    clientTextMessage: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.message.push({
        Text: action.payload,
        id: Date.now(),
        client: true,
      });
    },
    supportTextMessage: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.message.push({
        Text: action.payload,
        id: Date.now(),
        client: false,
      });
    },
  },
});

export const { clientTextMessage, supportTextMessage } = MessageSlice.actions;

export default MessageSlice.reducer;
