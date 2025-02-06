import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Reads from "../pages/Dashboard/Reads/Reads";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import ManageBooks from "../pages/Dashboard/ManageBooks/ManageBooks";
import AdminRoute from "./AdminRoute";
import AddBooks from "../pages/Dashboard/AddBooks/addBooks";
import UpdateBooks from "../pages/Dashboard/UpdateBooks/UpdateBooks";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // normal userroutes
            {
                path: 'reads',
                element: <Reads></Reads>
            },
            // admin only routes
            {
                path: 'manageBooks',
                element: <AdminRoute><ManageBooks></ManageBooks></AdminRoute>
            },
            {
                path: 'updateBooks/:id',
                element: <AdminRoute><UpdateBooks></UpdateBooks></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
            },
            {
                path: 'addBooks',
                element: <AdminRoute><AddBooks></AddBooks></AdminRoute>
            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
]);    