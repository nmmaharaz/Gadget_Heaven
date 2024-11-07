import { Outlet } from "react-router-dom";
import DeshboardHero from "../components/DeshboardHero";
const Deshboard = () => {
    return (
        <div>
            <DeshboardHero></DeshboardHero>           
            <div className="w-10/12 mx-auto">
            <Outlet>
            </Outlet>
            </div>
        </div>
    );
};

export default Deshboard;