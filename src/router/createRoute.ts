import {type TRouteArgs, TRouteWithParams} from "../models/TRouteArgs.ts";

/**
 * Allows you to create the path using a convenient approach
 * @example
 * //returns "user/10"
 * createRoute({path: "user/:userId", params?: {userId: 10}};
 * @param {TRouteArgs} args - an object of the {path: "user/:userId", params?: {userId: 10}} type;
 */
function createRoute(args: TRouteArgs) {
    if (!Object.prototype.hasOwnProperty.call(args, "params")) return args.path;

    return Object.entries((args as TRouteWithParams))
        .reduce<string>((accum, [param, value]) =>
            accum.replace(`:${param}`, String(value)),
        args.path
    )
}

export {createRoute}