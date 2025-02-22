import Image from "next/image";
import ContactButton from "@/Components/Buttons/ContactButton/ContactButton";

const programs = [
    {
        name: "Honey Badger Orange (Novice Level)",
        description:
            "Designed for entry-level wrestlers or those not yet ready for our elite Threestyle program. This division focuses on mastering fundamental techniques and building a strong foundation in wrestling.",
        image: "/bo-300x500.jpg",
    },
    {
        name: "Threestyle (Elite National Level)",
        description:
            "Our premier training program for dedicated athletes ready to be pushed mentally, physically, and emotionally. Includes hands-on coaching, structured practice, and access to elite-level facilities.",
        image: "/cam-300x500.jpg",
    },
    {
        name: "Girls' Wrestling Program",
        description:
            "Empowering young female athletes through high-level training and mentorship. Our program provides a supportive environment for girls to develop skills, confidence, and competitive experience.",
        image: "/brek-300x500.jpg",
    },
];

export default function Programs() {
    return (
        <main className="min-h-screen bg-gray-100 p-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-orange-700 mb-10">Our Programs</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col items-center"
                        >
                            {/* Image Container */}
                            <div className="relative w-full h-[600px]">
                                <Image
                                    src={program.image}
                                    alt={program.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="p-6 text-center flex-1 flex flex-col">
                                <h2 className="text-2xl font-bold text-gray-800">{program.name}</h2>
                                <p className="text-gray-600 mt-2">{program.description}</p>
                            </div>
                        </div>
                    ))}


                </div>
                <div className="text-center p-6">
                    <ContactButton/>
                </div>
            </div>
        </main>
    );
}
