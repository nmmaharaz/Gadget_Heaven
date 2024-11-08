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
import Error from "../components/Error";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=>fetch('/category.json'),
            children:[
              {
                path:"/",
                element:<Allcard></Allcard>,
                loader: ()=>fetch('/gadget.json')
              }, 
              {
                path:"/product/:category",
                element:<Allcard></Allcard>,
                loader: ()=>fetch('/gadget.json')
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
          path:"/products/:product_name",
          element: <Viewproduct></Viewproduct>,
          loader: ()=>fetch('/gadget.json')
        },
        {
          path:"/contact",
          element:<Contact></Contact>,
          loader:()=>fetch('/contact.json')
        }

      ]
    },

  ]);

export default router