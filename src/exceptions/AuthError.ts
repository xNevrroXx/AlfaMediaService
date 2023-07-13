import {TValueOf} from "../models/IUtils.ts";

type TError = Error | null;

class AuthError extends Error {
    status: number;
    error: TError;

    constructor(status: number, message: TValueOf<Pick<Error, "message">>, error: TError = null) {
        super(message);
        this.status = status;
        this.error = error;
    }

    static Conflict(message: string) {
        return new AuthError(409, message);
    }

    static AccessDenied() {
        return new AuthError(403, "Нет доступа к этому ресурсу");
    }
}

export {AuthError}