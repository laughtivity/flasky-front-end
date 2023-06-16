import React, { useState } from 'react';
import './App.css';
import CrystalList from './components/CrystalList';

const crystalData = [
  {
    id: 1,
    name: 'Amethyst',
    color: 'Purple',
    powers: "Infinite knowledge and wisdom",
    charges: 0
  },
  {
    id: 2,
    name: "Tiger's Eye",
    color: "Orange",
    powers: "Confidence and strength",
    charges: 0
  },
  {
    id: 3,
    name: "Rose Quartz",
    color: "Pink",
    powers: "Love",
    charges:0 
  },
];
function App() {
  // uses crystalData because you will be able to update in case any data
  // changes
  const [crystals, setCrystals] = useState(crystalData)

  const increaseCharge = (id) => (
    setCrystals(prevCrystals => {
      const updatedCrystals = prevCrystals.map(crystal => {
        // condition ? value to return if condition is met 
        // : is what happens if the condition is not met 
        // returns the updated crystal object or the original crystal object
        return crystal.id === id ? {...crystal, charges:crystal.charges+1} : crystal
      })

      return updatedCrystals
    })
  )

  const totalCharges = () => {
    let total = 0
    for (let crystal of crystals) {
      total += crystal.charges
    }
    return total
  }

  const removeCrystal = (id) => {
    setCrystals(prevCrystals => {
      // filter returns a new array and bypass needing to updated all other
      // crystals. Filter will only put the crystla in the array if it does not
      // equal the crystal with the id passed
      const updatedCrystals = prevCrystals.filter(crystal => crystal.id !== id)
      // returns the filtered crystal list
      return updatedCrystals
    })
  }

  const title = 'The Crystal Cove'
  return (
    <main className = 'App'>
      <h1>{title}</h1>
      <p>Total Charges: {totalCharges()} </p>
      {/* you pass crystals because  */}
      <CrystalList crystals = {crystals} increaseCharge={increaseCharge} removeCrystal={removeCrystal}/>
    </main>
  
  );
}

export default App;
