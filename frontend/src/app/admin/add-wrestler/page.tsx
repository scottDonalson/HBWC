'use client';
import { useState } from "react";

// ✅ Define a TypeScript interface for Wrestler
interface Wrestler {
    id?: number; // ✅ Optional because it's auto-generated by the backend
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

export default function AddWrestler() {
    // ✅ Ensure formData follows the Wrestler interface
    const [formData, setFormData] = useState<Wrestler>({
        first_name: "",
        last_name: "",
        email: "",
        school: "",
        usa_number: "",
        gender: "M",
        image_url: "",
        description: "",
        birthdate: "",
        phone_number: "",
    });

    const [message, setMessage] = useState("");

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // ✅ Exclude `id` from formData when sending the request
        const {id, ...wrestlerData } = formData;
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${API_BASE_URL}/api/wrestlers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(wrestlerData), // ✅ Don't send "id"
        });

        if (response.ok) {
            setMessage(`${formData.first_name} added successfully!`);

            setFormData({
                first_name: "",
                last_name: "",
                email: "",
                school: "",
                usa_number: "",
                gender: "M",
                image_url: "",
                description: "",
                birthdate: "",
                phone_number: "",
            });
        } else {
            setMessage("Error adding wrestler. Please try again.");
            console.log("Wrestler ID:", id);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-black">Add a New Wrestler</h2>

            {message && <p className="mb-4 text-green-600">{message}</p>}

            <form onSubmit={handleSubmit} className="space-y-4 text-black">
                <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange}  className="input" />
                <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange}  className="input" />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}  className="input" />
                <input type="text" name="school" placeholder="School" value={formData.school} onChange={handleChange}  className="input" />
                <input type="text" name="usa_number" placeholder="USA Number" value={formData.usa_number} onChange={handleChange}  className="input" />
                <input type="text" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange}  className="input" />

                <select name="gender" value={formData.gender} onChange={handleChange} className="input">
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>

                <input type="text" name="image_url" placeholder="Image URL" value={formData.image_url} onChange={handleChange}  className="input" />
                <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange}  className="input" />
                <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange}  className="input"></textarea>

                <button type="submit" className="btn">Add Wrestler</button>

            </form>
        </div>
    );
}
