import React from "react";
import styled from "styled-components";
import WordAnimation from "../components/homeanimate";
import ImageScroll from "../components/imagescroll";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const words = ["Think", "Tinker", "Transform"];
const interval = 200; // Delay between each letter
const typingDelay = 2000; // Delay before erasing starts
const erasingDelay = 100; // Delay between each erased letter

const Home = () => {
  return (
    <Homestyled>
      <motion.div whileHover={{ scale: 1.5 }} className="circle2" />
      <motion.div whileHover={{ scale: 1.5 }} className="circle3" />
      <div className="container">
        <div className="row">
          <div className="col-xl" id="left">
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 1 }}
              className="hero-heading"
            >
              Tinkerers' Laboratory
            </motion.div>
            <div className="hero-tag">IIT Hyderabad</div>
            <div className="hero-bottom">
              <WordAnimation
                words={words}
                interval={interval}
                typingDelay={typingDelay}
                erasingDelay={erasingDelay}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="reachus"
            >
              <NavLink to="/contacts">Reach Us</NavLink>
            </motion.button>
          </div>
          <div className="col-xl" id="right">
            <div className="section-hero-image">
              <picture>
                <motion.img
                  initial={{ y: "20%", opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="pic1"
                  src="./images/Home.svg"
                  alt="image"
                />
              </picture>
            </div>
          </div>
        </div>
        <div className="row" id="aims">
          <div className="col-lg-12">
            <div className="ouraim">Our Aim</div>
            <div className="seperator"></div>
            <div className="desp1">
              Here, at Tinkerers' Lab, our aim is to provide you a working space
              with vast ranges of tools in order to bring out the inner tinkerer
              in you
            </div>
          </div>
        </div>
        <div className="row" id="aims2">
          <div className="col-lg-4 col-md-6">
            <motion.div whileHover={{ scale: 1.1 }} className="cont">
              <div className="box">
                <img src="./images/aim1.svg" alt="Aim1" />
              </div>
              <div className="content">
                <div className="heading">Availability</div>
                <div className="line"></div>
                <div className="desp2">
                  We know the best ideas don't always come to us during work
                  hours. Tinkerers' Lab is open 24/7, giving the liberty to
                  build and innovate whenever.
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md-6">
            <motion.div whileHover={{ scale: 1.1 }} className="cont">
              <div className="box">
                <img src="./images/aim2.svg" alt="Aim1" />
              </div>
              <div className="content">
                <div className="heading">Resources</div>
                <div className="line"></div>
                <div className="desp2">
                  We have a wide range of resources ,from the commonplace
                  Raspberry Pis and Arduinos to CNCs and 3D Printers.
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md-6">
            <motion.div whileHover={{ scale: 1.1 }} className="cont">
              <div className="box">
                <img src="./images/aim3.svg" alt="Aim1" />
              </div>
              <div className="content">
                <div className="heading">TL Talks</div>
                <div className="line"></div>
                <div className="desp2">
                  TL will host talks and sessions with innovators and
                  entrepreneurs to boost the interest in new fields and push
                  boundaries.
                </div>
              </div>
            </motion.div>
            <div className="hand">
              <img src="./images/hand.svg" alt="hand" />
            </div>
          </div>
        </div>
      </div>
      <ImageScroll />
    </Homestyled>
  );
};

export default Home;

const Homestyled = styled.section`
  .col-lg-4,
  .col-md-6 {
    padding-top: 20px;
  }
  .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  .hand {
    position: absolute;
    z-index: 3;
    right: 5vw;
    margin-bottom: 5vw;
  }
  .separator {
    border: 3px solid rgba(0, 0, 0, 0.1);
  }
  .desp2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #001824;
    padding: 0rem 5vw;
    margin-bottom: 15vh;
  }

  #aims2,
  #aims {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5vw;
    padding-right: 5vw;
    position: relative;
  }
  .line {
    margin: 2.5rem 5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .heading {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    text-align: center;

    color: #6c10c6;
    padding-top: 4rem;
  }
  .content {
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 39px;
    margin-top: -3.5rem;
    z-index: 1;
    height: 38rem;
  }
  .box {
    background: #eddaff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 95px;
    height: 95px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .desp1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #001824;
    margin: 3rem;
    margin-top: 20px;
  }
  .ouraim {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    text-align: center;

    color: #000000;
    padding-top: 7vh;
  }
  .reachus {
    width: 220px;
    height: 10vh;
    a {
      color: #fff;
    }

    background: #6c10c6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 46px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;

    align-items: center;
    text-align: center;

    color: #ffffff;
  }

  .circle1 {
    position: absolute;
    background-color: #6c10c6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }
  .circle2 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }
  .col-xl-6 {
    text-align: center;
  }
  .col-xl {
    text-align: center;
  }

  .circle3 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }
  .pic1 {
    animation-name: rotation1;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 8s;
    animation-delay: 1s;
    // animation: rotation1 8s infinite linear;
  }
  @keyframes rotation1 {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(25deg);
    }
    25% {
      transform: rotate(-25deg);
    }
    25% {
      transform: rotate(-25deg);
    }
    25% {
      transform: rotate(25deg);
    }
  }

  .circle4 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 74rem;
    top: 20rem;
  }

  .circle5 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 78rem;
    top: 28rem;
  }
  .hero-heading {
    margin-top: 8rem;
    margin-bottom: 3rem;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 85px;
  }

  .hero-tag {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }

  .hero-bottom {
    padding: 50px;
    height: 150px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    padding-bottom: 2rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 624px; */
  }

  picture {
    text-align: center;
  }
  @media (min-width: 768px) {
    .desp2 {
      padding: 0rem 5vw;
    }
  }
  @media (max-width: 1200px) {
    .reachus {
      font-weight: 700;
      font-size: 24px;
      width: 75vw;
    }
    #right {
      display: none;
    }
    body {
      min-width: fit-content;
    }
    .desp2 {
      padding: 0rem 5vw;
    }
    .container {
      justify-content: center;
      width: 100vw;
    }
    .pic1 {
      display: none;
    }

    .hero-heading {
      text-align: center;
      font-weight: 700;
      font-size: 50px;
    }

    .hero-tag {
      text-align: center;
      font-weight: 500;
      font-size: 30px;
    }

    .hero-bottom {
      text-align: center;
    }
    .circle1 {
      display: none;
    }

    .circle2 {
      display: none;
    }

    .circle3 {
      display: none;
    }

    .circle4 {
      display: none;
    }

    .circle5 {
      display: none;
    }
  }
`;
