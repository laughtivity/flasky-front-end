import React from 'react';
import './App.css';
import CrystalList from './components/CrystalList';

const crystalData = [
  {
    id: 1,
    name: 'Amethyst',
    color: 'Purple',
    powers: "Infinite knowledge and wisdom",
    charge: 5
  },
  {
    id: 2,
    name: "Tiger's Eye",
    color: "Orange",
    powers: "Confidence and strength",
    charge: 0
  },
  {
    id: 3,
    name: "Rose Quartz",
    color: "Pink",
    powers: "Love",
    charge:1
  },
];
function App() {
  const title = 'The Crystal Cove'
  return (
    <main className = 'App'>
      <h1>{title}</h1>
      <CrystalList crystals = {crystalData} />
    </main>
  
  );
}

export default App;
