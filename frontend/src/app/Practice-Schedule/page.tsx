export default function PracticeSchedulePage() {
    const schedule = [
        { day: "Monday - Thursday", time: "6:00 PM - 7:30 PM", group: "Threestyle" },
        { day: "Monday, Tuesday, Thursday", time: "5:00 PM - 6:00 PM", group: "HBWC Orange" },
        { day: "Friday", time: "5:30 PM", group: "Weigh-Ins" },
        { day: "Starting March 24th", time: "TBA", group: "Freestyle & Greco" },
    ];

    return (
        <main className="min-h-screen bg-gray-100 p-10">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-orange-700 mb-6">Practice Schedule</h1>
                <p className="text-lg text-gray-700 text-center mb-6">
                    Below is our weekly practice schedule for all experience levels.
                </p>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                        <tr className="bg-orange-700 text-white">
                            <th className="border border-gray-300 px-4 py-3">Day</th>
                            <th className="border border-gray-300 px-4 py-3">Time</th>
                            <th className="border border-gray-300 px-4 py-3">Group</th>
                        </tr>
                        </thead>
                        <tbody>
                        {schedule.map((session, index) => (
                            <tr key={index} className="text-gray-800 text-center bg-gray-50 hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-3">{session.day}</td>
                                <td className="border border-gray-300 px-4 py-3">{session.time}</td>
                                <td className="border border-gray-300 px-4 py-3">{session.group}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <p className="text-center text-gray-600 mt-6">
                    Please arrive **15 minutes early** and bring all necessary gear.
                </p>
            </div>
        </main>
    );
}
