"use client";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("Failed to send message. Please try again.");
            }
        } catch  {
            setStatus("Error sending message. Please try again.");
        }
    };

    return (
        <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            <div className="max-w-3xl bg-white p-8 shadow-lg rounded-lg text-center">
                <h1 className="text-4xl font-bold text-orange-700 mb-6">Contact Us</h1>
                <p className="text-lg text-gray-700 mb-4">
                    Have questions? Want to join? Send us a message, and we will get back to you!
                </p>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border rounded-lg text-black"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border rounded-lg text-black"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border rounded-lg text-black"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-orange-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-800 transition"
                    >
                        Send Message
                    </button>
                </form>

                {/* Status Message */}
                {status && <p className="mt-4 text-gray-600">{status}</p>}
            </div>
        </main>
    );
}