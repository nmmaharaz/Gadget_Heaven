import { Outlet } from "react-router-dom";
import DeshboardHero from "../components/DeshboardHero";

const Deshboard = () => {
    return (
        <div>
            <DeshboardHero></DeshboardHero>
            <div>
            <Outlet>
            </Outlet>
            </div>
        </div>
    );
};

export default Deshboard;