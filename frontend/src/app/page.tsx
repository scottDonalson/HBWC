import ParallaxSection from "@/Components/HomeSections/ParallaxSection/parallax";
import ClubSection from "@/Components/HomeSections/ClubSection/club";
import CoachSection from "@/Components/HomeSections/OurCoaches/coaches";
import MeetTheWrestlers from "@/Components/HomeSections/MeetTheWrestlers/wrestlers";

export default function Home() {
    return (
        <main className="grid  grid-cols-1 mx-auto">
            <div className="">
                <ParallaxSection/>
            </div>
            <div className="">
                <ClubSection/>
            </div>
            <div className="">
                <CoachSection/>
            </div>
            <div className="">
                <MeetTheWrestlers/>
            </div>
        </main>
    );
}
