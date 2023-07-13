import {ROUTES} from "../router/routes.ts";

type TRouteArgs =
    | { path: ROUTES.AUTH }
    | { path: ROUTES.PRIVATE }
    ;
type TRouteWithParams = {path: string, params: any};

export {type TRouteArgs, type TRouteWithParams}