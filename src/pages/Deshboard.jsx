import { Outlet } from "react-router-dom";
import DeshboardHero from "../components/DeshboardHero";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Deshboard = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Deshboard || Gadget Heaven</title>
            </Helmet>
            <div>
            <DeshboardHero></DeshboardHero>           
            <div className="w-10/12 mx-auto">
            <Outlet>
            </Outlet>
            </div>
        </div>
        </HelmetProvider>
    );
};

export default Deshboard;