import { FaBagShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const navItems = [
    { label: "Furniture", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
];

const NavItems = () => {
    return (
        <ul className='flex flex-col md:flex-row items-center md:space-x-8 gap-8'>
            {navItems.map((item, index) => (
                <li key={index+1}>
                    <NavLink to={item.path} className={({ isActive }) => isActive ? "text-primary font-bold" : "hover:text-primary"}>
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    return (
        // <header className="bg-white shadow-md py-4 px-8">
        <header>
            <nav className="max-w-screen-2xl container mx-auto flex items-center justify-between py-6 px-4">
                {/* logo */}
                <Link to="/">
                    <h1 className="font-bold">Panto</h1>
                </Link>
                {/* manu items  */}
                <div className="hidden md:flex items-center justify-center">
                    <NavItems />
                </div>
                {/* cart */}
                <div className="hidden md:block cursor-pointer relative">
                    <FaBagShopping />
                    <sub className="absolute top-0 -right-3 bg-primary text-white h-5 w-5 rounded-full text-xs flex items-center justify-center">
                        0
                    </sub>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;