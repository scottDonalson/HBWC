'use client';
import Image from "next/image";
import ProgramsButton from "@/Components/Buttons/ProgramsButton/ProgramsButton";

export default function ClubSection() {

    return (
        <div className="relative bg-orange-700 grid grid-cols-1 md:grid-cols-3 grid-rows-auto rounded-2xl items-center gap-4 p-6">

            {/* Heading: Full Width */}
            <h2 className="text-3xl font-bold text-white col-span-full text-center p-4">
                Our Programs
            </h2>

            {/* Description Box */}
            <div className="bg-white drop-shadow-2xl shadow-lg text-2xl rounded-2xl p-8 col-span-1 md:col-span-2 flex flex-col items-center justify-center max-w-screen-lg mx-auto">
                <ul>
                    <li className="text-gray-600 my-2">
                        <strong>Honey Badger Orange (Novice Level):</strong> Designed for entry-level wrestlers or those not yet ready for our elite Threestyle program.
                    </li>
                    <li className="text-gray-600 my-2">
                        <strong>Threestyle (Elite National Level):</strong> Our premier training program for dedicated athletes.
                    </li>
                </ul>
                <ProgramsButton/>
            </div>

            {/* Image: Moves Below Text on Mobile */}
            <div className="relative p-4 rounded-2xl flex flex-col items-center justify-center text-center col-span-1">
                <Image
                    src="/thumbs-up-300x300.jpg"
                    alt="A young girl wrestler"
                    width={300}
                    height={300}
                    className="w-full rounded-2xl"
                />
            </div>

            {/* Call to Action */}
            <div className="col-span-1 md:col-span-2 flex flex-row items-center text-center justify-center md:justify-center row-span-2">

                <p
                    className="text-4xl text-black  md:text-center drop-shadow-lg p-5"
                    style={{ textShadow: "1px 1px 0px white, -1px -1px 0px white, -1px 1px 0px white, 1px -1px 0px white" }}
                >
                    Join us and take your wrestling skills to the next level!
                </p>
            </div>

        </div>


    )
}


