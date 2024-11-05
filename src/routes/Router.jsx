import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Deshboard from "../pages/Deshboard";
import Allcard from "../components/Allcard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=>fetch('../../public/category.json'),
            children:[
              {
                path:"/product/:category",
                element:<Allcard></Allcard>,
                loader: ()=>fetch('../../public/gadget.json')
              }
            ]     
        }, 
        {
          path:"/statistic",
          element: <Statistics></Statistics>
        },
        {
          path:"/deshboard",
          element: <Deshboard></Deshboard>
        }

      ]
    },

  ]);

export default router