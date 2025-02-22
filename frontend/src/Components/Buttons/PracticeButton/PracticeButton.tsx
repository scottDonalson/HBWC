import Link from "next/link";

export default function PracticeButton() {
    return (
        <div className="mt-6 text-center">
            <Link href="/Practice-Schedule">
                <button className="bg-orange-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-800 transition duration-300">
                    Practice Schedule
                </button>
            </Link>
        </div>
    );
}