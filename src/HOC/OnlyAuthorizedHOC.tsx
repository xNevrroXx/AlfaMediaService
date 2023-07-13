import {type FC, type ReactNode, useEffect, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import {createRoute} from "../router/createRoute.ts";
import {ROUTES} from "../router/routes.ts";
import {useAppSelector} from "../models/IStore.ts";
import {AuthError} from "../exceptions/AuthError.ts";

interface IOnlyAuthorizedHOC {
    children: ReactNode
}
const OnlyAuthorizedHOC: FC<IOnlyAuthorizedHOC> = ({children}) => {
    const navigate = useNavigate();
    const authData = useAppSelector(state => state.authentication);
    const effectRef = useRef<boolean>(false);

    useEffect(() => {
        if (effectRef.current) return;
        effectRef.current = true;

        if (!authData.isAuthenticated) {
            alert(AuthError.AccessDenied());
            navigate(createRoute({
                path: ROUTES.AUTH
            }))
        }
    }, [authData])

    return children;
};

export default OnlyAuthorizedHOC;