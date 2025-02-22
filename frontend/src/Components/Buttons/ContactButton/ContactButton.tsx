import Link from "next/link";

export default function ContactButton() {
    return (
        <div className="mt-6">
            <Link href="/About/Contact">
                <button className="bg-orange-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-800 transition duration-300">
                    Contact
                </button>
            </Link>
        </div>
    );
}