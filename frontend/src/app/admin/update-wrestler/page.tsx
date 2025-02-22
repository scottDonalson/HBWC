'use client';

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

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

function UpdateWrestlerContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id"); // ✅ Extract ID from URL
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    const [wrestler, setWrestler] = useState<Wrestler | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    useEffect(() => {
        if (!id) {
            setError("Invalid wrestler ID.");
            setLoading(false);
            return;
        }

        fetch(`${API_BASE_URL}/api/wrestlers/${id}`)
            .then((response) => {
                if (!response.ok) throw new Error("Wrestler not found");
                return response.json();
            })
            .then((data: Wrestler) => {
                setWrestler(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        if (!wrestler) return;
        setWrestler({
            ...wrestler,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!id || !wrestler) return;

        try {
            const response = await fetch(`http://localhost:8080/api/wrestlers/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(wrestler),
            });

            if (!response.ok) throw new Error("Failed to update wrestler");

            setSuccessMessage("Wrestler updated successfully!");
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(`Error updating wrestler. Please try again. ${err.message}`);
            } else {
                setError("Error updating wrestler. Please try again.");
            }
        }
    };

    if (loading) return <p className="text-center text-gray-500">Loading wrestler data...</p>;
    if (error) return <p className="text-red-500 text-center">{error}</p>;
    if (!wrestler) return <p className="text-center">No wrestler found.</p>;

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg text-black">
            <h2 className="text-2xl font-bold mb-4">Update Wrestler</h2>

            {successMessage && <p className="mb-4 text-green-600">{successMessage}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="first_name" placeholder="First Name" value={wrestler.first_name} onChange={handleChange} className="input w-full" />
                <input type="text" name="last_name" placeholder="Last Name" value={wrestler.last_name} onChange={handleChange} className="input w-full" />
                <input type="email" name="email" placeholder="Email" value={wrestler.email} onChange={handleChange} className="input w-full" />
                <input type="text" name="school" placeholder="School" value={wrestler.school} onChange={handleChange} className="input w-full" />
                <input type="text" name="usa_number" placeholder="USA Number" value={wrestler.usa_number} onChange={handleChange} className="input w-full" />

                <select name="gender" value={wrestler.gender} onChange={handleChange} className="input w-full">
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>

                <input type="text" name="image_url" placeholder="Image URL" value={wrestler.image_url} onChange={handleChange} className="input w-full" />
                <input type="date" name="birthdate" value={wrestler.birthdate} onChange={handleChange} className="input w-full" />
                <textarea name="description" placeholder="Description" value={wrestler.description} onChange={handleChange} className="input w-full"></textarea>
                <input type="text" name="phone_number" placeholder="Phone Number" value={wrestler.phone_number} onChange={handleChange} className="input w-full" />

                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded w-full">Update Wrestler</button>
            </form>
        </div>
    );
}

export default function UpdateWrestler() {
    return (
        <Suspense fallback={<p className="text-center">Loading update page...</p>}>
            <UpdateWrestlerContent />
        </Suspense>
    );
}
