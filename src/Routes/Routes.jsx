import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/menu",
        element: <PrivateRoute><Menu></Menu></PrivateRoute>
      },
      {
        path: '/order/:category',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      }
    ]
  }
]);

export default router;