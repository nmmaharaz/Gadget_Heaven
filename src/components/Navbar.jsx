import { Link, NavLink, useLocation} from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
    const {pathname} = useLocation()
    console.log(pathname)

    return (
      <div className="m-3">
        <div className={`${pathname == "/" || pathname == "/product/Computers" || pathname == "/product/Phones" || pathname == "/product/Smart%20Watches" || pathname == "/product/Chargers"||pathname == "/product/Power%20Banks" ?"bg-[#9538e2] navbar pt-2 pb-[650px] rounded-xl":"bg-white navbar py-3"}`}>
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
            <NavLink to='/' className={`${pathname == "/" ?"text-white font-semibold":"text-black font-semibold"}`}>Home</NavLink>
            <NavLink to='/statistic' className={`${pathname == "/" ?"text-white font-semibold":"text-black font-semibold"}`}>Statistic</NavLink>
           <NavLink to='/deshboard' className={`${pathname == "/" ?"text-white font-semibold":"text-black font-semibold"}`}>Deshboard</NavLink>
          </ul>
        </div>
        <a className={`${pathname == "/" ?"text-2xl text-white":"text-2xl text-black"}`}> <Link to='/'>Gadget Heaven</Link></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
        <NavLink to='/' className={`${pathname == "/" ?"text-white font-semibold":"text-black font-semibold"}`}>Home</NavLink>
            <NavLink to='/statistic' className={`${pathname == "/" ?"text-white font-semibold px-10":"text-black px-10 font-semibold"}`}>Statistic</NavLink>
           <NavLink to={'/deshboard','/deshboard/cart' } className={`${pathname == "/" ?"text-white font-semibold":"text-black font-semibold"}`}>Deshboard</NavLink>
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