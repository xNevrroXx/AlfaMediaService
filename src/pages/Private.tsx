import {Helmet} from "react-helmet-async";
import {createTitle} from "../utils/createTitle.ts";
import OnlyAuthorizedHOC from "../HOC/OnlyAuthorizedHOC.tsx";
import {useAppDispatch, useAppSelector} from "../models/IStore.ts";
import {Button} from "antd";
import {logout} from "../store/authThunks.ts";

const Private = () => {
    const dispatch = useAppDispatch();
    const authData = useAppSelector(state => state.authentication);

    const onExit = () => {
        dispatch(logout());
    }

    return (
        <OnlyAuthorizedHOC>
            <Helmet>
                <title>{createTitle("private")}</title>
            </Helmet>

            id: {authData.user?.id},<br/>
            username: {authData.user?.username},<br/>
            email: {authData.user?.email},<br/>
            firstName: {authData.user?.firstName},<br/>
            lastName: {authData.user?.firstName}<br/>

            <Button onClick={onExit}>Выход</Button>
        </OnlyAuthorizedHOC>
    );
};

export default Private;