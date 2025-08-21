import { FaAd, FaCalendar, FaHome, FaList, FaMailBulk, FaMoneyBill, FaShopify, FaShoppingCart } from "react-icons/fa";
import { RiContactsBook2Fill, RiFeedbackFill, RiMenu2Fill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart()
    return (
        <div className="flex ">
            <div className="w-64 pl-4 text-[16px] min-h-screen py-10 bg-[#D1A054]">
                <h3 className="btn h-[70px] btn-ghost text-2xl cinzelFont uppercase font-bold flex-col hover:bg-transparent hover:border-none hover:shadow-none mb-8 hover:text-white">Bistro Boss <span className="text-lg font-medium tracking-[4px]">Restaurant</span></h3>
                <ul className="menu w-5/6 flex flex-col gap-3 cinzelFont font-semibold">
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-white' : 'text-black'
                        } to={'/dashboard/userHome'}>
                            <FaHome></FaHome>
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-white' : 'text-black'
                        } to={'/dashboard/reservation'}>
                            <FaCalendar></FaCalendar>
                            Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-white' : 'text-black'
                        } to={'/dashboard/reservation'}>
                            <FaMoneyBill></FaMoneyBill>
                            Payment History</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-white' : 'text-black'
                        } to={'/dashboard/cart'}>
                            <FaShoppingCart ></FaShoppingCart>
                            My Cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-white' : 'text-black'
                        } to={'/dashboard/addReview'}>
                            <RiFeedbackFill></RiFeedbackFill>
                            Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-white' : 'text-black'
                        } to={'/dashboard/bookings'}>
                            <FaList></FaList>
                            My Bookings</NavLink>
                    </li>

                    <div className=" border-t  border-white mt-4"></div>

                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-white' : 'text-black'
                        } to={'/'}>
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-white' : 'text-black'
                        } to={'/menu'}>
                            <RiMenu2Fill></RiMenu2Fill>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-white' : 'text-black'
                        } to={'/order/salad'}>
                            <FaShopify></FaShopify>
                            Shop</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-white' : 'text-black'
                        } to={'/contactus'}>
                            <FaMailBulk></FaMailBulk>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;