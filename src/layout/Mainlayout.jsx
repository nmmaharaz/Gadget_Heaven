import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
    <div className="bg-[#f7f7f7]">
        <ToastContainer />
        <Navbar></Navbar>
        <div className='min-h-[calc(100vh-20px)]'>
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>  
    );
};

export default MainLayout;