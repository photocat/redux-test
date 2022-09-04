import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import { createLogger } from "redux-logger";

const logger = createLogger({
    collapsed: true,
});

const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: [logger],
});

export default store;