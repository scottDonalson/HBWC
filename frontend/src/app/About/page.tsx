import MeetOurCoachesButton from "@/Components/Buttons/CoachesButton/MeetOurCoachesButton";
import WrestlersButton from "@/Components/Buttons/WrestlersButton/WrestlersButton";
import ContactButton from "@/Components/Buttons/ContactButton/ContactButton";

export default function About() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <div className="max-w-3xl bg-white p-8 shadow-lg rounded-lg text-center">
                <h1 className="text-4xl font-bold text-orange-700 mb-4">About Us</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Welcome to <span className="font-bold">Honey Badger Wrestling Club</span>, the premier youth wrestling program in Northwest Arkansas.
                    Our club is dedicated to developing young athletes into **elite competitors** through world-class training, mentorship, and discipline.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6">Our Mission</h2>
                <p className="text-gray-600 mt-2">
                    We strive to build not only great wrestlers but also strong individuals with resilience, determination, and sportsmanship.
                    Our experienced coaching staff has trained **national champions, All-Americans, and Olympians**.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6">Why Choose Us?</h2>
                <ul className="text-gray-600 mt-2 text-left list-disc list-inside">
                    <li>🏆 Proven track record of producing elite athletes</li>
                    <li>🥋 Comprehensive training programs for all levels</li>
                    <li>💪 Focus on both physical and mental conditioning</li>
                    <li>🏅 Access to top-tier wrestling facilities</li>
                </ul>


                <ContactButton/>
                <MeetOurCoachesButton/>
                <WrestlersButton />
            </div>
        </main>
    );
}