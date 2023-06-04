import React from 'react'
import Herosection from '../components/Herosection';

const Contacts = () => {
  const data = {
    title: "Contact US!",
    image: "./images/Contacts.svg"
  };

  return (
    <Herosection {...data} />
  )
}

export default Contacts;