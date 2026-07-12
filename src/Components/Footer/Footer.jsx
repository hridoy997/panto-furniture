import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-secondary-bg text-black dark:bg-gray-800 dark:text-white pt-20 mt-5 pb-5">
            <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8">
                {/* logo and description */}
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-2xl font-bold mb-4"><Link to="/">Panto</Link></h2>
                    <p className="mr-12 ">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                </div>
                {/* services */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-primary">Services</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/shop" className="hover:text-primary">Email Marketing</Link>
                        </li>
                        <li>
                            <Link to="/shop" className="hover:text-primary">Campaigns</Link>
                        </li>
                        <li>
                            <Link to="/shop" className="hover:text-primary">Branding</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4 text-primary">Furniture</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/shop" className="hover:text-primary">Beds</Link>
                        </li>
                        <li>
                            <Link to="/shop" className="hover:text-primary">Chair</Link>
                        </li>
                        <li>
                            <Link to="/shop" className="hover:text-primary">All</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4 text-primary">Follow Us</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/shop" className="hover:text-primary flex items-center space-x-2">
                            <FaFacebook />
                            <span>Facebook</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/shop" className="hover:text-primary flex items-center space-x-2">
                            <FaTwitter />
                            <span>Twitter</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/shop" className="hover:text-primary flex items-center space-x-2">
                            <FaInstagram />
                            <span>Instagram</span>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
            {/* copyright */}
            <div className="section-container mt-12 flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black dark:bg-gray-800 dark:text-white border-t border-gray-300 pt-4">
                <p className="text-sm">Copyright&copy; {new Date().getFullYear()}</p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                    <Link to="/" className="hover:text-primary hover:underline">Terms & Conditions</Link>
                    <Link to="/" className="hover:text-primary hover:underline">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;