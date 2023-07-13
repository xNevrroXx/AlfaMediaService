import {TValueOf} from "./IUtils.ts";

interface IUserDTO {
    "id": number,
    username: string,
    "email": string,
    "firstName": string,
    "lastName": string,
    "gender": string,
    "image": string,
    token: string
}

interface IAuth {
    user: IUserDTO | null,
    isAuthenticated: boolean
}

interface IAuthLogin {
    username: TValueOf<Pick<IUserDTO, "username">>,
    password: string
}

type TActionType =
    | {type: "login", payload: {username: TValueOf<Pick<IUserDTO, "username">>, password: string}}
    | {type: "logout"}
    // | {type: "refreshToken"}

export {type IAuth, type IUserDTO, type TActionType, type IAuthLogin}