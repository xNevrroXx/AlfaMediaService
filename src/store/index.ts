import {Action, configureStore, Middleware} from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import authentication from "./authSlice"

const loggerMiddleware: Middleware = (api) => (next: AppDispatch) => <A extends Action>(action: A) => {
    console.log("will dispatch: ", action);
    next(action);
    console.log("state after dispatch: ", api.getState());
}

const store = configureStore({
    reducer: {
        authentication,
    },
    preloadedState: undefined,
    devTools: import.meta.env.DEV,
    middleware: [reduxThunk, loggerMiddleware]
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;