import React from 'react'
import Herosection from '../components/Herosection';

const Inventory = () => {
  const data = {
    title: "Inventory ",
    image: "./images/Inventory.svg"
  };

  return (
    <Herosection {...data} />
  )
}

export default Inventory;