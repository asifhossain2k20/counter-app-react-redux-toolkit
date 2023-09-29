import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import Login from "../page/Login";
import Notfound from "../page/Notfound";
const routes=createBrowserRouter([
    {
        path:"/",
        element:<App></App>
    },
    {
        path:"/home",
        element:<Home></Home>
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"*",
        element:<Notfound></Notfound>
    }
])

export default routes;