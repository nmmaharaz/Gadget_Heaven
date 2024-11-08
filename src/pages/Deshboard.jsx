import { Outlet } from "react-router-dom";
import DeshboardHero from "../components/DeshboardHero";
import { useEffect } from "react";
const Deshboard = () => {
    useEffect(()=>{
        document.title = "Gadget Heaven"
        document.title = "Deshboard || " + document.title
    })

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