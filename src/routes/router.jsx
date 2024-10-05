import { createBrowserRouter,} from "react-router-dom";
import Home from "../ui/Home";
import Main from "../layouts/main/Main";


import LoginPages from "../auth/LoginPages";
import SignUp from "../auth/Signup";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
              path: "/login",
              element: <LoginPages />
            },
            {
              path: "/signup",
              element: <SignUp />
            },
            
        ]
    },


]);


export default router;