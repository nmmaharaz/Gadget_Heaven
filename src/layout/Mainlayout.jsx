import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {
    return (
    <div className="bg-[#f7f7f7]">
        <ToastContainer />
        <Header></Header>
        <div className="min-h-screen">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>  
    );
};

export default MainLayout;