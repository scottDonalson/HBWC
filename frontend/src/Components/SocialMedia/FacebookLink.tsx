import Link from "next/link";
import { FaFacebook } from "react-icons/fa"; // Install react-icons if needed

export default function FacebookLink() {
    return (
        <Link
            href="https://www.facebook.com/HoneyBadgerWrestlingClub/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition duration-300 flex items-center space-x-2"
        >
            <FaFacebook size={24} />
            <span>Follow us on Facebook</span>
        </Link>
    );
}
