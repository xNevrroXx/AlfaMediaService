import {IAuth} from "../models/IAuth.ts";
import {createSlice} from "@reduxjs/toolkit";
import {login, logout} from "./authThunks";

const initialState: IAuth = {
    user: null,
    isAuthenticated: false
};

const authentication = createSlice({
    name: "authentication",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.user = null;
            })
            // .addCase(checkAuthentication.fulfilled, (state, action) => {
            //     state.isAuthenticated = true;
            //     state.user = {
            //         name: action.payload.name
            //     };
            // })
    }
})


const {reducer} = authentication;

export default reducer;