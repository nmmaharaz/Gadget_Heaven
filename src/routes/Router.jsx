import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Deshboard from "../pages/Deshboard";
import Allcard from "../components/Allcard";
import Viewproduct from "../pages/Viewproduct";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import Contact from "../pages/Contact";






const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=>fetch('/public/category.json'),
            children:[
              {
                path:"/",
                element:<Allcard></Allcard>,
                loader: ()=>fetch('/public/gadget.json')
              }, 
              {
                path:"/product/:category",
                element:<Allcard></Allcard>,
                loader: ()=>fetch('/public/gadget.json')
              }
            ]     
          },
          {
          path:"/statistic",
          element: <Statistics></Statistics>
        },
        {
          path:"/deshboard",
          element: <Deshboard></Deshboard>,
          children:[
             {
              path:"/deshboard",
              element:<Cart></Cart>
             },
             {
              path:"/deshboard/wishlist",
              element:<Wishlist></Wishlist>
             }
          ] 
        },
        {
          path:"/products/:id",
          element: <Viewproduct></Viewproduct>,
          loader: ()=>fetch('/public/gadget.json')
        },
        {
          path:"/contact",
          element:<Contact></Contact>,
          loader:()=>fetch('/public/contact.json')
        }

      ]
    },

  ]);

export default router