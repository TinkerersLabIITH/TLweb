import { FunctionsRounded } from '@mui/icons-material';
import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import styled from "styled-components";
import WordAnimation from "../components/homeanimate";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const words = ["Think", "Tinker", "Transform"];
const interval = 200; // Delay between each letter
const typingDelay = 2000; // Delay before erasing starts
const erasingDelay = 100; // Delay between each erased letter

const Contacts = () => {

  //Form

  const [message, setMessage] = useState({
    name: '',
    email: '',
    message: '',
    send: false
  })

  const [warn, setWarn] = useState({
    name: false,
    email: false,
    message: false,
    send: false
  })
  function handleChange(event) {
    const { name, value } = event.target
    setMessage(prev => {
      return {
        ...prev,
        [name]: value
      }
    })

  }

  const formRef = useRef(null)

  function handleSubmit(event) {
    const re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    event.preventDefault()
    setWarn(({
      name: message.name ? false : true,
      email: message.email && re.test(message.email) ? false : true,
      message: message.message ? false : true,
      send: message.name && message.email && re.test(message.email) && message.message ? true : false
    }))
    message.name && message.email && re.test(message.email) && message.message &&
      fetch('https://script.google.com/macros/s/AKfycbweHBn46bB_ikYWUgVWtfV1S-IAB3bxLCA5eV0zHFKaDArWNECVvsr05AESUfj8A-St/exec',
        {
          method: "POST",
          body: new FormData(formRef.current),
        }).then(res => console.log(res.status), setMessage({ ...message, send: true })).catch(err => console.log(err))
  }

  // Confirmation Message
  const confirm = (
    <div className='send-confirm'>
      Thank you for contacting us
    </div>
  )

  //Screensize
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);


    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  //Animations
  gsap.registerPlugin(ScrollTrigger)
  const messageRef = useRef(null)
  const mapRef = useRef(null)
  const imgRef = useRef(null)
  screenSize.width >= 1200 ?
    useEffect(() => {
      const messageElem = messageRef.current
      gsap.fromTo(messageElem, { autoAlpha: 0, translateX: '10%' }, {
        autoAlpha: 1, translateX: '0', duration: 3, scrollTrigger: {
          trigger: messageElem,
          start: "50px 45%",
          end: "+=1290",
          toggleActions: "restart complete restart complete"
        }
      })
      const mapElem = mapRef.current
      gsap.fromTo(mapElem, { autoAlpha: 0, translateX: '-10%' }, {
        autoAlpha: 1, translateX: '0', duration: 3, scrollTrigger: {
          trigger: mapElem,
          start: "50px 45%",
          end: "+=1250",
          toggleActions: "restart complete restart complete"
        }
      })
    }, []) :
    useEffect(() => {
      const messageElem = messageRef.current
      gsap.fromTo(messageElem, { autoAlpha: 0, translateX: '10%' }, {
        autoAlpha: 1, translateX: '0', duration: 4, scrollTrigger: {
          trigger: messageElem,
          start: "-60% 50%",
          end: "+=1320",
          toggleActions: "restart complete restart complete"
        }
      })
      const mapElem = mapRef.current
      gsap.fromTo(mapElem, { autoAlpha: 0, translateX: '-10%' }, {
        autoAlpha: 1, translateX: '0', duration: 4, scrollTrigger: {
          trigger: mapElem,
          start: "-60% 50%",
          end: "+=1300",
          toggleActions: "restart complete restart complete"
        }
      })
    }, [])




  return (
    <ContactsWrapper >
      <div className="ellipse1" />
      <div className="ellipse2"></div>
      <div className='circle1' />
      <div className='circle2' />
      <div className='circle3' />
      <div className='circle4' />
      <div className='circle5' />
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <h2 className='hero-heading'>Contact us!</h2>
          <h3 className='hero-tag'>Tinkerers’ Lab IITH</h3>
          <div className="hero-bottom">
            <WordAnimation
              words={words}
              interval={interval}
              typingDelay={typingDelay}
              erasingDelay={erasingDelay}
            />
          </div>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src="./images/Contacts.svg" alt="image" className='hero-img' ref={imgRef} />
          </picture>
        </div>
      </div>
      <div className="section-map-message">
        <div className='section-map' ref={mapRef}>
          <div className='map-iframe'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461.1025061004142!2d78.12566068992736!3d17.597490805694715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf706d15f396d%3A0xd8767eda72322c70!2sTinkerers&#39;%20Laboratory%20IITH!5e0!3m2!1sen!2sin!4v1688018342297!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ 'border': 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        <div className='section-message' ref={messageRef}>
          <h4>Message Us</h4>
          <form className='section-message-box' onSubmit={handleSubmit} noValidate ref={formRef}>
            <div className='section-message-box-wraps'>
              <label htmlFor='message-name'>Name</label>
              <input
                type='text'
                placeholder='Enter here'
                id='message-name'
                name='name'
                value={message.name}
                onChange={handleChange}
              />
            </div>
            {warn.name && <div className='message-warning'>Enter your name</div>}
            <div className='section-message-box-wraps'>
              <label htmlFor='message-email'>Mail ID</label>
              <input
                type='email'
                placeholder='Enter here'
                id='message-email'
                name='email'
                value={message.email}
                onChange={handleChange}
              />
              {warn.email && <div className='message-warning'>Enter your email</div>}
            </div>
            <div className='section-message-box-wraps'>
              <label htmlFor='message-message'>Enter your Message</label>
              <textarea
                placeholder='Enter here'
                id='message-message'
                name='message'
                value={message.message}
                onChange={handleChange}
              />
              {warn.message && <div className='message-warning'>Enter your message</div>}
            </div>
            <div className='section-message-submit'>
              <button>Submit</button>
            </div>
            {message.send && confirm}
          </form>
        </div>
      </div>
    </ContactsWrapper >
  )
}

export default Contacts;

const ContactsWrapper = styled.section`
  padding: 9rem 0;

  .ellipse2 {
    position: absolute;
    width: 681px;
    height: 669px;
    left: 0;
    top: -441px;
    z-index: -1;

    background: radial-gradient(
        40.83% 40.83% at 50% 50%,
        rgba(0, 224, 255, 0.5) 0%,
        rgba(51, 182, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  }

  .ellipse1 {
    position: absolute;
    width: 808px;

    @media (max-width: 1200px) {
      width: 700px;
    }
    height: 794px;
    left: -363px;
    top: -349px;
    z-index: -1;

    background: radial-gradient(
        40.83% 40.83% at 50% 50%,
        rgba(108, 16, 198, 0.5) 0%,
        rgba(186, 104, 200, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  }

  .circle1{
    position: absolute;
    background-color: #6C10C6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }

  .circle2{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }

  .circle3{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }

  .circle4{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 74rem;
    top: 20rem;
  }

  .circle5{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 78rem;
    top: 28rem;
  }

  .hero-heading{
    position: absolute;
    /* width: 431px; */
    /* height: 170px; */
    left: 15rem;
    top: 310px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    /* line-height: 85px; */
  }

  .hero-tag{
    position: absolute;
    width: 1008px;
    height: 580px;
    left: 15rem;
    top: 406px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }

  .hero-bottom{
    position: absolute;
    width: 1008px;
    height: 525px;
    left: 32rem;
    top: 485px;
      
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
  }

  .section-hero-image{
    display: flex;
    justify-content: end;
    align-items: center;
  }

  picture{
    text-align: end;
  }

  .hero-img{
    width: 100%;
  }

  picture {
    animation: leftright 6s infinite linear;
  }

  @keyframes leftright {
    0%,
    100% {
      transform: translateX(3%);
    }
    50% {
      transform: translateX(1%);
    }
  }

  .section-map-message {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10vw;
    height: 105vh;
  }
  .section-map {
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    margin-left: -7vw;
    margin-top: 12vh;
  }

  .section-message {
    height: 80vh;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-message-box {
    width: 40vw;
    max-width: 49rem;
    height: max-content;
    border-radius: 68px;
    background: #FFF;
    box-shadow: 0px 0px 30px 2px rgba(0, 0, 0, 0.10);
    display: flex;
    flex-direction: column;
    padding: 4rem 4rem;
    margin-top: 1.5rem;

  }

  .section-message h4 {
    color: #6C10C6;
    font-size: 4rem;
    font-family: Inter;
  }

  .section-message-box label {
    font-size: 1.65rem;
    font-weight: 700;
    font-family: Inter;
    margin-top: 1rem;
    margin-left: 0.3rem;
  }

  .section-message-box-wraps {
    display: flex;
    flex-direction: column;
  }

  #message-name, #message-email {
    width: 100%;
    height: 4.6rem;
    border-radius: 16px;
    background: #F3F3F3;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.10) inset;
    color: #757575;
    font-size: 1.55rem;
    line-height: 5.3125rem;
    padding:  0.65rem 1.5rem;
    border: none;
    outline: none;
    font-family: Inter;
    margin-top: 0.2rem;
  }

  #message-message {
    width: 100%;
    height: 16rem;
    border-radius: 16px;
    background: #F3F3F3;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.10) inset;
    color: #757575;
    font-size: 1.55rem;
    resize: none;
    padding:  0.9rem 1.6rem;
    border: none;
    outline:none;
    font-family: Inter;
    margin-top: 0.1rem;
  }

  .section-message-submit button {
    margin-top: 1.5rem;
    width: 100%;
    height: 5.5rem;
    background: #6C10C6;
    color: #FFF;
    font-size: 1.8rem;
    font-weight: 600;
    border-radius: 16px;
    line-height: 5.3125rem;
    font-family: Inter;
    border: none;
  } 

  .map-iframe {
    z-index: 999;
    margin-left: 10rem;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25) inset;
    width: 35vw;
    height: 69vh;
    min-width: 300px;
    min-height: 410px;
    max-width: 500px;
    max-height: 700px;
  }

  .message-warning {
    color: red;
    margin: 0;
    margin-left: 0.5rem;
    margin-bottom: -0.7rem;
    font-size: 1.15rem;
  }

  .send-confirm {
    color: yellowgreen;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  @media (max-width: 1400px){
    .circle4,.circle5 {
      visibility: hidden;
    }
  }
  @media (max-width: 1200px) {
    .section-hero-data {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2vh;
      height: max-content;
      width: 95vw;
      margin-top: -15vh;
    }

    .hero-heading {
      display: flex;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;width: auto;
    height: auto;
    font-size: 80px;
    position: unset;
}

    .hero-tag {
    font-family: 'Inter';
    font-style: normal;
    width: auto;
    height: auto;
    position: unset;
    }

    .hero-bottom {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    width: auto;
    height: auto;
    position: unset;

    } 

    .section-hero-image {
      display: none;
    }
    .section-hero-data {
        height: 80vh;
    }

    .circle1, .circle2, .circle3, .circle4, .circle5 {
      display: none;
    }

    .section-map-message {
      height: 100vh;
    }
    .section-map {
      margin: 23vh 0 0 0;
      
    }

    .section-message {
      margin: 0;
      margin-top: 10vh;
      width: 100%;
    }

    .section-message-box {
      width: 100%;
    }
  }

    @media (max-width:768px){

      .section-map-message {
        display: flex;
        flex-direction: column;
        height: 180vh;
        padding: 0;
      }

      .map-iframe {
        width: 80vw;
        margin-left: -3vw;
      }

      .section-message {
        width: 80vw;
        order:1;
      }
      .section-message-box {
        width: 100%;
      }
      .section-map {
        width: 100%;
        order:2;
      }
    }

    @media (max-height: 600px) {
      .section-map{
        margin-top: 40vh;
      }
    }
`;