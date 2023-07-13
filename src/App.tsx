import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {HelmetProvider} from "react-helmet-async";
// import {checkAuthentication} from "./store/authThunks.ts";

function App() {
    // const dispatch = useAppDispatch();
    // const isCheckedRef = useRef<boolean>(false);

    // Делал для instantwebtools.net
    // useEffect(() => {
    //     if (isCheckedRef.current) return;
    //
    //     isCheckedRef.current = true;
    //
    //     if (localStorage.getItem("")) {
    //         void dispatch(checkAuthentication)
    //     }
    // }, [dispatch])

    return (
        <HelmetProvider>
            <RouterProvider router={router}/>
        </HelmetProvider>
    )
}

export default App
