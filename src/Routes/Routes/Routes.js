import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import Booking from "../../Pages/Booking/Booking/Booking";
import SignUp from "../../Pages/SignUp/SignUp";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/booking',
                element: <Booking></Booking>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoard></DashBoard>
    }
])

export default router;