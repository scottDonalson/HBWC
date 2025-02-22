'use client';

import Image from "next/image";
import WrestlersButton from "@/Components/Buttons/WrestlersButton/WrestlersButton";

export default function MeetTheWrestlers() {
    return(
        <div className="bg-white shadow-lg rounded-2xl p-8 my-2 flex flex-col items-center justify-center ">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-4">Meet the Wrestlers</h2>
            <div className="relative p-6 h-[500px] m-5 rounded-2xl shadow-2xl flex flex-row">
                <Image src="/meet-the-wrestlers.jpg" alt="a picture of a group of wrestlers" width={1000} height={500}
                       className="object-cover rounded-2xl mx-2"/>

            </div>
            <WrestlersButton />
        </div>
    )
}