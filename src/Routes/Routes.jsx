import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
  element:<CategoryNews></CategoryNews>
}
       
    ],
  },
    {
        path: "/auth",
        element: <div>Authenticate Layout</div>
    },
{
    path: "/news",
    element: <div> News Layout</div>
},

{
    path: "/*",   
    element: <div> Error </div>
}


]);

 export default  router

