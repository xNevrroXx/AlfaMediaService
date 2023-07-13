import {FC, Suspense} from 'react';
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {Layout, Menu} from "antd";
import {createRoute} from "../router/createRoute.ts";
import {ROUTES} from "../router/routes.ts";
const {Header, Content} = Layout;

const Index: FC = () => {
    const location = useLocation();

    if(location.pathname === "/") {
        return <Navigate to={createRoute({ path: ROUTES.AUTH} )} />
    }

    return (
        <Layout style={{minHeight: "100vh"}}>
            <Header style={{marginBottom: "20px"}}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(3).fill(null).map((_, index) => ({
                        key: String(index + 1),
                        label: `fake ${index + 1}`,
                    }))}
                />
            </Header>
            <Layout style={{width: "60%", margin: "0 auto", display: "flex", justifyContent: "center"}}>
                <Content style={{ padding: '0 50px' }}>
                    <Suspense fallback={"loading..."}>
                        <Outlet/>
                    </Suspense>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Index;