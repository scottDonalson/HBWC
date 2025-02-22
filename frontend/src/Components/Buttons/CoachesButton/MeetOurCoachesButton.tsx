import Link from "next/link";

export default function MeetOurCoachesButton() {
    return (
        <div className="mt-6">
            <Link href="/About/Coaches">
                <button className="bg-orange-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-800 transition">
                    Meet Our Coaches
                </button>
            </Link>
        </div>
    );
}