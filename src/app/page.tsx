import React from 'react';
import Home from './home/page'

export default function App() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-800 justify-center items-center text-white">
      <Home />
    </main>
  );
}


/*"use client";

import { useEffect, useState } from 'react'
import styles from './app.module.css'

export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches?')
      .then(res => res.json())
      .then(data => {
        console.log('rockets', data);
        setData(data);
      })
      .catch(error => console.log(error))

  }, []);

  return (
    /*<main className='py-10 flex justify-center items-center'>*/
/*<main>
  <div>
    <h1 className={styles.h1}>Hello CSR</h1>
    <br />
    <ul className={styles.ul}>
      {data.map((spx: any, index: any) => <li key={index}>{spx.mission_name}</li>)}
    </ul>
  </div>
</main>
)
}*/