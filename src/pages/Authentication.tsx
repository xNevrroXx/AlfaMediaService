import {Helmet} from "react-helmet-async";
import {createTitle} from "../utils/createTitle.ts";
import OnlyNotAuthorizedHOC from "../HOC/OnlyNotAuthorizedHOC.tsx";
import {AuthForm} from "../components/AuthForm.tsx";
import {useAppDispatch} from "../models/IStore.ts";
import {login} from "../store/authThunks.ts";

const Authentication = () => {
    const dispatch = useAppDispatch();

    const onFinish = (values: { username: string, password: string }) => {
        dispatch(login({
            username: values.username,
            password: values.password
        }))
    }

    return (
        <OnlyNotAuthorizedHOC>
            <Helmet>
                <title>{createTitle("auth")}</title>
            </Helmet>

            <AuthForm onFinish={onFinish}/>
        </OnlyNotAuthorizedHOC>
    );
};

export default Authentication;