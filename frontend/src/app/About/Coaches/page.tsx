import Image from "next/image";

const coaches = [
    {
        name: "Coach Johnny Cook",
        image: "/coaches/johnny.jpg",
        description: "Coach of 2 World Champions, 1 Olympian, 339 All-Americans, and 71 National Champions.",
    },
    {
        name: "Coach Preston Smith",
        image: "/coaches/preston.jpg",
        description: "Ben’s dad and the original founder of the Honey Badger Wrestling Club.",
    },
    {
        name: "Coach Tony Cook",
        image: "/coaches/tony.jpg",
        description: "World Junior Freestyle Champion, World Greco Roman Champion, and coach of 106 All-Americans.",
    },
];

export default function CoachesPage() {
    return (
        <main className="min-h-screen bg-gray-100 p-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-orange-700 mb-10">Meet Our Coaches</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {coaches.map((coach, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden group">
                            <div className="relative w-full h-96">
                                <Image
                                    src={coach.image}
                                    alt={coach.name}
                                    layout="fill"
                                    className="object-cover group-hover:opacity-80 transition duration-300"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h2 className="text-2xl font-bold text-gray-800">{coach.name}</h2>
                                <p className="text-gray-600 mt-2">{coach.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}