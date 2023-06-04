import React from 'react'
import Herosection from '../components/Herosection';

const Events = () => {
  const data = {
    title: "Events",
    image: "./images/Event.svg"
  };

  return (
    <Herosection {...data} />
  )
}

export default Events;