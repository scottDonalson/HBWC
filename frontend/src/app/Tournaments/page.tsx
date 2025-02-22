"use client";
import { useState } from "react";

interface Tournament {
    id: string;
    name: string;
    date: string;
    location: string;
}

export default function Tournaments() {
    const [tournaments] = useState<Tournament[]>([]);
    const [loading] = useState(true);

    // useEffect(() => {
    //     fetch("/api/tournaments")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setTournaments(data);
    //             setLoading(false);
    //         })
    //         .catch((error) => console.error("Error fetching tournaments:", error));
    // }, []);

    return (
        <main className="min-h-screen bg-gray-100 p-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-orange-700 mb-10">Upcoming Tournaments</h1>

                {loading ? (
                        <p className="text-center text-gray-600">Coming Soon...</p>
                    // <p className="text-center text-gray-600">Loading tournaments...</p>
                ) : (
                    <ul className="space-y-4">
                        {tournaments.length > 0 ? (
                            tournaments.map((tournament) => (
                                <li key={tournament.id} className="bg-white p-6 rounded-lg shadow-md">
                                    <h2 className="text-2xl font-semibold">{tournament.name}</h2>
                                    <p className="text-gray-600">📅 {new Date(tournament.date).toLocaleDateString()}</p>
                                    <p className="text-gray-600">📍 {tournament.location}</p>
                                </li>
                            ))
                        ) : (
                            <p className="text-center text-gray-600">No tournaments available.</p>
                        )}
                    </ul>
                )}
            </div>
        </main>
    );
}
