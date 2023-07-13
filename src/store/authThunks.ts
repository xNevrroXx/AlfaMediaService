import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthService} from "../services/AuthService.ts";
import {IAuthLogin} from "../models/IAuth.ts";
import {router} from "../router";
import {ROUTES} from "../router/routes.ts";
import {createRoute} from "../router/createRoute.ts";

export const login = createAsyncThunk(
    "authentication/login",
    async ({username, password}: IAuthLogin, thunkApi) => {
        try {
            const response = await AuthService.login({username, password});
            localStorage.setItem("token", response.data["token"]);
            void router.navigate(createRoute({path: ROUTES.PRIVATE}));
            return response.data;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

export const logout = createAsyncThunk(
    "authentication/logout",
    async (_arg, thunkApi) => {
        try {
            await AuthService.logout();
            localStorage.removeItem("token");
            void router.navigate(createRoute({path: ROUTES.AUTH}));
            return;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

// Делал для instantwebtools.net
// export const checkAuthentication = createAsyncThunk(
//     "authentication/checkAuthentication",
//     async (_arg, thunkApi) => {
//         try {
//             const refreshToken = localStorage.getItem("refresh_token");
//             if (!refreshToken) throw new Error("There is no 'refresh_token' value");
//
//             const response = await AuthService.refreshToken(refreshToken);
//             localStorage.setItem("access_token", response.data["access_token"]);
//             localStorage.setItem("refresh_token", response.data["refresh_token"]);
//             return {
//                 name: localStorage.getItem("name") || ""
//             };
//         }
//         catch (error) {
//             localStorage.removeItem("access_token");
//             localStorage.removeItem("refresh_token");
//             return thunkApi.rejectWithValue(error);
//         }
//     }
// )