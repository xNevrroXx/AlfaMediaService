import {IAuthLogin, IUserDTO} from "../models/IAuth.ts";
import {$api} from "../http";
import {AxiosResponse} from "axios";

// const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
// if (!CLIENT_ID) {
//     throw new Error("Не найден 'CLIENT_ID'");
// }

class AuthService {
    private static base = "/login";
    static async login(userData: IAuthLogin): Promise<AxiosResponse<IUserDTO>> {
        return $api.post<IUserDTO>(this.base, JSON.stringify(userData))
    }

    // Делал для instantwebtools.net
    // static async refreshToken(token: TValueOf<Pick<IAuthResponse, "refresh_token">>) {
    //     return $api.post<IAuthResponse>(this.base, {
    //         "refresh_token": token,
    //         "client_id": CLIENT_ID,
    //         "grant_type": "refresh_token"
    //     })
    // }

    static async logout() {
        // fake logout
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                resolve(true);
            }, 500)
        })
    }
}

export {AuthService}