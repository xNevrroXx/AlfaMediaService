import {createBrowserRouter} from "react-router-dom";
import {lazy} from "react";
import {ROUTES} from "./routes.ts";
import {createRoute} from "./createRoute.ts";

const IndexPage = lazy(() => import("../pages/Index"));
const AuthenticationPage = lazy(() => import("../pages/Authentication"));
const PrivatePage = lazy(() => import("../pages/Private"));

const router = createBrowserRouter([
    {
        element: <IndexPage/>,
        path: "/",
        children: [
            {
                element: <AuthenticationPage/>,
                path: createRoute({path: ROUTES.AUTH})
            },
            {
                element: <PrivatePage/>,
                path: createRoute({path: ROUTES.PRIVATE})
            }
        ]
    }
]);

export {router}