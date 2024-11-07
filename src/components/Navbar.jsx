import { Link, NavLink, useLocation} from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";


const Navbar = () => {
    const {pathname} = useLocation()
   
    return (
      <div className="">
        <div className={`${pathname == "/" || pathname == "/product/Computers" || pathname == "/product/Phones" || pathname == "/product/Smart%20Watches" || pathname == "/product/Chargers"||pathname == "/product/Power%20Banks" ?"bg-[#9538e2] navbar mt-3 mx-3 pt-2 pb-[500px] sm:pb-[500px] lg:pb-[650px] rounded-xl":"bg-white navbar py-3"}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${pathname == "/" || pathname == "/product/Computers" || pathname == "/product/Phones" || pathname == "/product/Smart%20Watches" || pathname == "/product/Chargers"||pathname == "/product/Power%20Banks" ?"text-white w-5 h-5":"w-5 h-5 text-black"}`}
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
            <NavLink to='/' className={`${pathname == "/" || pathname == "/product/Computers" || pathname == "/product/Phones" || pathname == "/product/Smart%20Watches" || pathname == "/product/Chargers"||pathname == "/product/Power%20Banks" ?"text-white hover:text-[#410571] cursor-pointer font-semibold":"text-white font-semibold hover:text-[#410571]"}`}>Home</NavLink>
            <NavLink to='/statistic' className={`${pathname == "/" || pathname == "/product/Computers" || pathname == "/product/Phones" || pathname == "/product/Smart%20Watches" || pathname == "/product/Chargers"||pathname == "/product/Power%20Banks" ?"text-white py-2 hover:text-[#410571] cursor-pointer font-semibold":"text-white py-2 hover:text-[#410571] font-semibold"}`}>Statistic</NavLink>
           <NavLink to='/deshboard' className={`${pathname == "/" || pathname == "/product/Computers" || pathname == "/product/Phones" || pathname == "/product/Smart%20Watches" || pathname == "/product/Chargers"||pathname == "/product/Power%20Banks" ?"text-white hover:text-[#410571] cursor-pointer font-semibold":"hover:text-[#410571] text-white font-semibold"}`}>Deshboard</NavLink>
           <NavLink to='/contact' className={`${pathname == "/" || pathname == "/product/Computers" || pathname == "/product/Phones" || pathname == "/product/Smart%20Watches" || pathname == "/product/Chargers"||pathname == "/product/Power%20Banks" ?" hover:[#410571] text-white cursor-pointer font-semibold":"text-white hover:text-[#410571] font-semibold"}`}>Contact</NavLink>
          </ul>
        </div>
        <a className={`${pathname == "/" || pathname == "/product/Computers" || pathname == "/product/Phones" || pathname == "/product/Smart%20Watches" || pathname == "/product/Chargers"||pathname == "/product/Power%20Banks" ? "text-2xl ml-2 font-bold text-white" :"text-2xl ml-2 font-bold text-[#a446f1]"}`}> <Link to='/'>Gadget Heaven</Link></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
         <NavLink to='/' className={({ isActive }) =>
        `${isActive 
          ? "text-white bg-[#410571] rounded-2xl px-3 py-2 cursor-pointer font-semibold" 
          : pathname === "/" || pathname == "/product/Computers" || pathname == "/product/Phones" || pathname == "/product/Smart%20Watches" || pathname == "/product/Chargers"||pathname == "/product/Power%20Banks"
          ? "text-white px-3 py-2 cursor-pointer font-semibold" 
          : "text-black px-3 py-2 font-semibold"}`
      }>Home</NavLink>
            <NavLink to='/statistic' className={({ isActive }) =>
        `${isActive 
          ? "text-white bg-[#410571]  mx-5 rounded-2xl px-2 py-2 cursor-pointer font-semibold" 
          : pathname === "/" || pathname == "/product/Computers" || pathname == "/product/Phones" || pathname == "/product/Smart%20Watches" || pathname == "/product/Chargers"||pathname == "/product/Power%20Banks"
          ? "text-white px-3 mx-5 py-2 cursor-pointer font-semibold" 
          : "text-black px-3 mx-5 py-2 font-semibold"}`
      }>Statistic</NavLink>
           <NavLink to={'/deshboard' } className={({ isActive }) =>
        `${isActive 
          ? "text-white bg-[#410571] rounded-2xl px-3 py-2 cursor-pointer font-semibold" 
          : pathname === "/" || pathname == "/product/Computers" || pathname == "/product/Phones" || pathname == "/product/Smart%20Watches" || pathname == "/product/Chargers"||pathname == "/product/Power%20Banks"
          ? "text-white px-3 py-2 cursor-pointer font-semibold" 
          : "text-black px-3 py-2 font-semibold"}`
      }>Deshboard</NavLink>
           <NavLink to={'/contact' } className={({ isActive }) =>
        `${isActive 
          ? "text-white bg-[#410571] mx-5 rounded-2xl px-3 py-2 cursor-pointer font-semibold" 
          : pathname === "/" || pathname == "/product/Computers" || pathname == "/product/Phones" || pathname == "/product/Smart%20Watches" || pathname == "/product/Chargers"||pathname == "/product/Power%20Banks"
          ? "text-white px-3 mx-5 py-2 cursor-pointer font-semibold" 
          : "text-black px-3 mx-5 py-2 font-semibold"}`
      }>Contact</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
      <div><MdOutlineShoppingCart  className={`${pathname == "/" ?"text-4xl text-gray-800 bg-white rounded-full p-1 font-semibold": "text-4xl text-gray-800 border border-solid border-gray-400 rounded-full p-1 font-semibold"}`}/></div>
         <p><FaRegHeart className={`${pathname == "/" ?" text-4xl text-gray-800 bg-white rounded-full p-1 font-semibold mx-5":" text-4xl text-gray-800 border border-solid border-gray-400 rounded-full p-1 font-semibold mx-5"}`}/></p>
        <div>
        </div>
      </div>
    </div>
      </div>
    );
};

export default Navbar;