import React from 'react'
import Herosection from '../components/Herosection';

const Team = () => {
  const data = {
    title: "Our Team",
    image: "./images/Team.svg"
  };

  return (
    <Herosection {...data} />
  )
}

export default Team;