import Link from "next/link";
import FacebookLink from "@/Components/SocialMedia/FacebookLink";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-6 lg:px-16">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left: Logo & About */}
                    <div>
                        <h2 className="text-2xl font-bold">Honey Badger Wrestling</h2>
                        <p className="text-gray-400 mt-2">
                            Elevating young athletes to their full potential through elite training and mentorship.
                        </p>
                    </div>

                    {/* Middle: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="mt-2 space-y-2">
                            <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
                            <li><Link href="/About" className="hover:text-gray-200">About</Link></li>
                            <li><Link href="/Programs" className="hover:text-gray-200">Programs</Link></li>
                            <li><Link href="/Tournaments" className="hover:text-gray-200">Tournaments</Link></li>
                            {/*<li><Link href="/Sponsors" className="hover:text-gray-200">Sponsors</Link></li>*/}
                        </ul>
                    </div>

                    {/* Right: Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold">Follow Us</h3>
                        <div className="flex space-x-4 mt-3">
                            <FacebookLink />
                            {/*<a href="#" className="hover:text-yellow-500 text-2xl"><i className="fab fa-instagram"></i></a>*/}
                            {/*<a href="#" className="hover:text-yellow-500 text-2xl"><i*/}
                            {/*    className="fab fa-twitter"></i></a>*/}
                            {/*<a href="#" className="hover:text-yellow-500 text-2xl"><i*/}
                            {/*    className="fab fa-youtube"></i></a>*/}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-6"></div>

                {/* Copyright */}
                <div className="text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Honey Badger Wrestling Club. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;