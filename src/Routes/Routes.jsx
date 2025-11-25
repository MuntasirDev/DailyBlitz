import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayouts from "../Layouts/AuthLayouts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,

    children: [
      { path: "/", 
        element: <Home></Home>  
      },
{
  path:"/category/:id",
  element:<CategoryNews></CategoryNews>,
  loader: ()=>{
    return fetch('/news.json')
}
}
       
    ],
  },
    {
        path: "/auth",
        element: <AuthLayouts></AuthLayouts>,
        children: [
            {
              path: "/auth/login",
              element: <Login></Login>
            },
            {
              path: "/auth/register",
              element: <Register></Register>
            },
        ]
    },
{
    path: "/news",
    element: <div> News Layout</div>
},

{
    path: "/*",   
    element: <Error></Error>
}


]);

 export default  router

