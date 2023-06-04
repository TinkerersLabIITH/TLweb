import React from 'react'
import Herosection from '../components/Herosection';

const Projects = () => {
  const data = {
    title: "Projects ",
    image: "./images/Project.svg"
  };

  return (
    <Herosection {...data} />
  )
}

export default Projects;