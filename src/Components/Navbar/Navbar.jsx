import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBagShopping, FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const navItems = [
    { label: "Furniture", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
];

const NavItems = ({ toggleMenu }) => {
    return (
        <ul className='flex flex-col md:flex-row items-center md:space-x-8 gap-8'>
            {navItems.map((item, index) => (
                <li key={index+1} onClick={toggleMenu}>
                    <NavLink to={item.path} className={({ isActive }) => isActive ? "text-primary font-bold" : "hover:text-primary"} >
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    }

    return (
        // <header className="bg-white shadow-md py-4 px-8">
        <header className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out text-white`}>
            <nav className="section-container flex items-center justify-between">
                {/* logo */}
                <Link to="/">
                    <h1 className="font-bold">Panto</h1>
                </Link>

                {/* mobile menu items */}
                <div onClick={toggleMenu} className="md:hidden cursor-pointer text-xl hover:text-primary" >
                    {
                        isMenuOpen ? null : <FaBars />
                    }
                </div>

                {/* desktop menu items */}
                <div className="hidden md:flex items-center justify-center">
                    <NavItems />
                </div>

                {/* mobile menu items */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-black opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
                    <div className="absolute top-4 right-4 text-xl cursor-pointer" onClick={toggleMenu}>
                        <FaTimes />
                    </div>
                    <NavItems toggleMenu={toggleMenu} />
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