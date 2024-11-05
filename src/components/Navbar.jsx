import { Link, NavLink} from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
    // const location = useLocation()
    // // console.log(location)
    return (
      <div className="m-3">
        <div className="navbar bg-[#9538e2] pt-2 pb-[650px] rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#a446f1] rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <NavLink to='/' className="text-white font-semibold">Home</NavLink>
            <NavLink to='/statistic' className="text-white font-semibold">Statistic</NavLink>
           <NavLink to='/deshboard' className="text-white font-semibold">Deshboard</NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl text-white"><Link to='/'>Gadget Heaven</Link></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
        <NavLink to='/' className="text-white font-semibold">Home</NavLink>
            <NavLink to='/statistic' className="px-10 text-white font-semibold">Statistic</NavLink>
           <NavLink to='/deshboard' className="text-white font-semibold">Deshboard</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
      <MdOutlineShoppingCart />
        <div>
        </div>
      </div>
    </div>
      </div>
    );
};

export default Navbar;