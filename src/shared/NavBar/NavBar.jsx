import { Link, NavLink } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";



const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Log Out Successfully")
            })
    }

    const navOptions = <>
        <NavLink to={'/'} className={({ isActive }) =>
            isActive ? 'text-yellow-400' : "text-base"}>
            <li className="uppercase font-semibold"><a>Home</a></li>
        </NavLink>
        <NavLink to={'/contactus'} className={({ isActive }) =>
            isActive ? 'text-yellow-400' : "text-base"}>
            <li className="uppercase font-semibold"><a>Contact us</a></li>
        </NavLink>
        <NavLink to={'/dashboard'} className={({ isActive }) =>
            isActive ? 'text-yellow-400' : "text-base"}>
            <li className="uppercase font-semibold"><a>dashboard</a></li>
        </NavLink>
        <NavLink to={'/menu'} className={({ isActive }) =>
            isActive ? 'text-yellow-400' : "text-base"}>
            <li className="uppercase font-semibold"><a>Our menu</a></li>
        </NavLink>
        <NavLink to={'/order/salad'} className={({ isActive }) =>
            isActive ? 'text-yellow-400' : "text-base"}>
            <li className="uppercase font-semibold"><a>Our shop</a></li>
        </NavLink>
        <NavLink to={'dashboard/cart'}>
            <li className="uppercase font-semibold -ml-4"><a><button className="btn  bg-transparent border-none">
                <FaShoppingCart className="text-green-700 mr-3 text-2xl"></FaShoppingCart>
                <div className="badge badge-secondary">+{cart.length}</div>
            </button></a></li>
        </NavLink>
    </>

    return (
        <div className="navbar md:navbar-center max-w-screen h-[70px] md:h-[80px] fixed z-10 text-white bg-black/30">
            <div className="navbar md:navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <div className="text-black">
                            {navOptions}
                        </div>
                    </ul>
                </div>
                <Link to={'/'} className="btn h-[70px] btn-ghost text-lg md:text-2xl cinzelFont uppercase font-bold flex-col hover:bg-transparent hover:border-none hover:shadow-none hover:text-yellow-300">Bistro Boss <span className="textarea-md md:text-lg font-medium tracking-[4px]">Restaurant</span></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu items-center menu-horizontal">
                    {navOptions}
                </ul>
            </div>
            <div className="">
                {
                    user ?
                        <div>
                            <button onClick={handleLogOut} className="btn uppercase flex flex-col md:-ml-5 md:w-36 md:mr-10 bg-transparent border-none shadow-none text-white font-bold">Sign Out <span className="text-yellow-600">{user.displayName}</span></button>
                        </div>
                        : <Link to={'/login'}><a className="btn uppercase -ml-5 w-36 mr-10 bg-transparent border-none shadow-none text-white font-bold">Login<RiAccountCircleFill className="text-4xl"></RiAccountCircleFill></a></Link>
                }

            </div>
        </div>
    );
};

export default NavBar;