import { configureStore } from "@reduxjs/toolkit";

import MessageSlice from "./MessageSlice";

export const store = configureStore({
  reducer: {
    messageContent: MessageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
