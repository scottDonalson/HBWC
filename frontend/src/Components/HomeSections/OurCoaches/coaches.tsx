'use client';
import Image from "next/image";
import MeetOurCoachesButton from "@/Components/Buttons/CoachesButton/MeetOurCoachesButton";

export default function CoachSection() {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-8 my-2 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-4">Our Coaches</h2>

            <div className="w-full p-6 min-h-[600px] m-5 rounded-2xl shadow-2xl flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* Coach 1 */}
                    <div className="relative w-[300px] h-[500px] group overflow-hidden rounded-2xl shadow-lg mx-auto">
                        <Image
                            src="/coaches/johnny.jpg"
                            alt="Coach Johnny Cook"
                            layout="fill"
                            className="object-cover transition duration-300 ease-in-out"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6
            bg-black bg-opacity-0 group-hover:bg-opacity-60 opacity-0 group-hover:opacity-100
            transition-all duration-300">
                            <p className="text-center font-bold">
                                COACH JOHNNY COOK<br />
                                Coach of:<br />
                                2 World Champions<br />
                                1 Olympian<br />
                                339 All-Americans<br />
                                71 National Champions<br />
                                Numerous State Champions and Placers<br />
                                5 years with HBWC
                            </p>
                        </div>
                    </div>

                    {/* Coach 2 */}
                    <div className="relative w-[300px] h-[500px] group overflow-hidden rounded-2xl shadow-lg mx-auto">
                        <Image
                            src="/coaches/preston.jpg"
                            alt="Coach Preston Smith"
                            layout="fill"
                            className="object-cover transition duration-300 ease-in-out"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6
            bg-black bg-opacity-0 group-hover:bg-opacity-60 opacity-0 group-hover:opacity-100
            transition-all duration-300">
                            <p className="text-center font-bold">
                                COACH PRESTON SMITH<br />
                                Ben&apos;s dad<br />
                                Original founder of the Honey Badger Wrestling Club
                            </p>
                        </div>
                    </div>

                    {/* Coach 3 */}
                    <div className="relative w-[300px] h-[500px] group overflow-hidden rounded-2xl shadow-lg mx-auto">
                        <Image
                            src="/coaches/tony.jpg"
                            alt="Coach Tony Cook"
                            layout="fill"
                            className="object-cover transition duration-300 ease-in-out"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6
            bg-black bg-opacity-0 group-hover:bg-opacity-60 opacity-0 group-hover:opacity-100
            transition-all duration-300">
                            <p className="text-center font-bold">
                                COACH TONY COOK<br />
                                WORLD JUNIOR FREESTYLE CHAMPION<br />
                                WORLD GRECO ROMAN CHAMPION<br />
                                MULTIPLE NATIONAL FREESTYLE/GRECO ROMAN CHAMPIONSHIPS<br />
                                COACHED 106 ALL-AMERICANS.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <MeetOurCoachesButton/>
        </div>

    );
}
