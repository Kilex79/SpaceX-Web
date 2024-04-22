'use client'

import React, { useEffect, useState } from 'react';

export default function Home() {
  // All missions
  const [missions, setMissions] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches?")
      .then((res) => res.json())
      .then((data) => {
        // Filtrar las 10 misiones más antiguas
        const sortedMissions = data.sort((a: { launch_date_unix: number; }, b: { launch_date_unix: number; }) => a.launch_date_unix - b.launch_date_unix).slice(0, 10);
        setMissions(sortedMissions);
      })
      .catch((error) => console.log(error));
  }, []);

  // Upcoming Missions
  const [upcomingMissions, setUpcomingMissions] = useState<any[]>([]);;

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches/upcoming")
      .then((res2) => res2.json())
      .then((data) => {
        const sortedUpcomingMissions = data.slice(0, 10);
        setUpcomingMissions(sortedUpcomingMissions);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-gray-800 to-gray-500 justify-center items-center text-white py-16">
      <section className="text-center mb-8">
        <h1 className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Explore the Universe with SpaceX!</h1>
        <p className="text-lg">Welcome to the future of space exploration with the incredible rockets from SpaceX!</p>
      </section>
      <div className="flex justify-center items-center">
        <div className="w-1/4 mr-8">
          {/* Contenido del elemento flotante izquierdo */}
          <div className="bg-white/20 text-gray-50 rounded-lg p-4 ml-8 backdrop-blur">
            <h2 className="text-lg font-bold mb-2 text-gray-50">Space Missions Name</h2>
            <ul>
              {missions.map((mission, index) => (
                <li key={index} className="text-gray-50">{mission.mission_name}</li>
              ))}
            </ul>
          </div>
        </div>
        <img src="/images/space.jpg" alt="Space Exploration" className="w-1/2 rounded-lg shadow-lg shadow-purple-400/50" />
        <div className="w-1/4 ml-8">
          {/* Contenido del elemento flotante derecho */}
          <div className="bg-white/20 text-gray-50 rounded-lg p-4 mr-8 backdrop-blur">
            <h2 className="text-lg font-bold mb-2 text-gray-50">Upcoming Releases</h2>
            <ul>
              {upcomingMissions.map((mission, index) => (
                <li key={index} className="text-gray-50">{mission.mission_name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}