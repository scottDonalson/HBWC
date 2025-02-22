'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

interface Wrestler {
    first_name: string;
    last_name: string;
    email: string;
    school: string;
    usa_number: string;
    gender: string;
    image_url: string;
    description: string;
    birthdate: string;
    phone_number: string;
}

export default function WrestlersList() {
    const [wrestlers, setWrestlers] = useState<Wrestler[]>([]);
    const [selectedWrestler, setSelectedWrestler] = useState<Wrestler | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    useEffect(() => {
        fetch(`${API_BASE_URL}/api/wrestlers`)
            .then((response) => response.json())
            .then((data: Wrestler[]) => {
                console.log("Fetched Wrestlers:", data);
                setWrestlers(data);
                setLoading(false);
            })
            .catch((err) => console.error("Fetch error:", err));
    }, []);

    const openModal = (wrestler: Wrestler) => {
        setSelectedWrestler(wrestler);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedWrestler(null);
        setIsModalOpen(false);
    };

    if (loading) return <p className="text-center text-gray-500">Loading wrestlers...</p>;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-black text-center">Wrestlers List</h2>

            <ul className="space-y-4 p-3">
                {wrestlers.length === 0 ? (
                    <p className="text-gray-500 text-center">No wrestlers found.</p>
                ) : (
                    wrestlers.map((wrestler, index) => (
                        <li
                            key={`wrestler-${index}`}
                            className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-4 cursor-pointer border border-gray-200 hover:shadow-xl transition"
                            onClick={() => openModal(wrestler)}
                        >
                            {/* Image */}
                            <Image
                                src={wrestler.image_url}
                                alt={wrestler.first_name}
                                width={115}
                                height={115}
                                className="w-28 h-28 rounded-full object-cover border border-gray-300 md:mr-4"
                            />

                            {/* Text Content */}
                            <div className="flex flex-col md:flex-row w-full md:items-center text-center md:text-left">
                                <div className="flex flex-col md:w-2/3">
                                    <p className="text-lg font-semibold text-black">{wrestler.first_name} {wrestler.last_name}</p>
                                    <p className="text-gray-600">{wrestler.school}</p>


                                </div>

                                {/* Description - Stacks below on small screens, centers in column on larger screens */}
                                <p className="text-gray-500 mt-2 md:mt-0 md:w-1/3 md:text-center">
                                    {wrestler.description}

                                </p>
                            </div>
                        </li>
                    ))
                )}
            </ul>

            {isModalOpen && selectedWrestler && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-black">
                        <h2 className="text-xl font-bold">
                            {selectedWrestler.first_name} {selectedWrestler.last_name}
                        </h2>
                        <p className="text-xl font-bold">{selectedWrestler.usa_number}</p>

                        <p className="mt-2 text-gray-600">{selectedWrestler.description}</p>
                        <button
                            onClick={closeModal}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
