'use client'

import React, { useEffect, useState } from "react";

const SpaceShips = () => {
    const [rockets, setRockets] = useState<any[]>([]);
    const [filterSuccess, setFilterSuccess] = useState<boolean | null>(null);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches?")
            .then((res) => res.json())
            .then((data) => {
                console.log("rockets", data);
                setRockets(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleFilterChange = (value: boolean | null) => {
        setFilterSuccess(value);
    };

    const filteredRockets = rockets.filter(
        (rocket) =>
            filterSuccess === null || 
            (rocket.launch_success !== null && rocket.launch_success === filterSuccess) ||
            rocket.launch_success === null
    );

    // Evitar la repetición de cohetes utilizando un conjunto para almacenar los identificadores únicos de los cohetes
    const uniqueRocketIds = new Set();
    const uniqueFilteredRockets = filteredRockets.filter((rocket) => {
        if (uniqueRocketIds.has(rocket.flight_number)) {
            return false;
        }
        uniqueRocketIds.add(rocket.flight_number);
        return true;
    });

    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-500 min-h-screen">
            <section id="gallery" className="container mx-auto py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 text-center">
                    Spaceship Gallery
                </h2>
                <div className="flex justify-center mb-8">
                    <button
                        className={`px-4 py-2 mr-4 rounded ${
                            filterSuccess === null
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-300 text-gray-800'
                        }`}
                        onClick={() => handleFilterChange(null)}
                    >
                        All
                    </button>
                    <button
                        className={`px-4 py-2 mr-4 rounded ${
                            filterSuccess === true
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-300 text-gray-800'
                        }`}
                        onClick={() => handleFilterChange(true)}
                    >
                        Successful
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${
                            filterSuccess === false
                                ? 'bg-red-500 text-white'
                                : 'bg-gray-300 text-gray-800'
                        }`}
                        onClick={() => handleFilterChange(false)}
                    >
                        Failed
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {uniqueFilteredRockets.map((rocket) => (
                        <div
                            key={rocket.flight_number}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            {rocket.links.mission_patch ? (
                                <img
                                    src={rocket.links.mission_patch}
                                    alt={rocket.rocket.rocket_name}
                                    className="w-full object-cover"
                                />
                            ) : (
                                <img
                                    src="/images/no-image.jpg"
                                    alt="No image available"
                                    className="w-full object-cover"
                                />
                            )}
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    {rocket.rocket.rocket_name}
                                </h3>
                                <p className="text-gray-700">
                                    Estado de despegue:{" "}
                                    <span
                                        className={`font-semibold ${
                                            rocket.launch_success
                                                ? "text-green-600"
                                                : "text-red-600"
                                        }`}
                                    >
                                        {rocket.launch_success === null
                                            ? "No definido"
                                            : rocket.launch_success
                                                ? "Exitoso"
                                                : "Fallido"}
                                    </span>
                                </p>
                                <p className="text-gray-700">
                                    Detalles: {rocket.details}
                                </p>
                                <p className="text-gray-700">
                                    Lanzamiento: {rocket.launch_date_utc}
                                </p>
                                <a
                                    href={rocket.links.wikipedia}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    Más información
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SpaceShips;
