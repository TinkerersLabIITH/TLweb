import React from "react";
import WordAnimation from "../components/homeanimate";
import styled from "styled-components";
import { color, motion } from "framer-motion";
import { blue } from "@mui/material/colors";

const words = ["Think", "Tinker", "Transform"];
const interval = 200; // Delay between each letter
const typingDelay = 2000; // Delay before erasing starts
const erasingDelay = 100; // Delay between each erased letter
const Projects = () => {
  return (
    <ProjectWrapper>
      <motion.div whileHover={{ scale: 1.5 }} className="circle1" />
      <motion.div whileHover={{ scale: 1.5 }} className="circle2" />
      <motion.div whileHover={{ scale: 1.5 }} className="circle3" />
      <motion.div whileHover={{ scale: 1.5 }} className="circle4" />
      <motion.div whileHover={{ scale: 1.5 }} className="circle5" />
      <div className="container">
        <div className="row">
          <div className="col-xl" id="left">
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 1 }}
              className="hero-heading"
            >
              Projects
            </motion.div>
            <h3 className="hero-tag">Tinkerers’ Lab IITH</h3>
            <h4 className="hero-bottom">
              <WordAnimation
                words={words}
                interval={interval}
                typingDelay={typingDelay}
                erasingDelay={erasingDelay}
              />
            </h4>
          </div>
          <div className="col-xl" id="right">
            <picture>
              <motion.img
                initial={{ y: "20%", opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                src="./images/Project1.svg"
                alt="image"
                className="hero-img"
              />
            </picture>
          </div>
        </div>
        <div className="row" id="collab-form">
          <h3 style={{ fontWeight: 500, color: "black" }}>
            Projects Available
          </h3>
          <div className="col-lg-4 col-md-6">
            <motion.div whileHover={{ scale: 1.1 }} className="cont">
              <div className="box">
                <img src="./images/mlp.png" alt="Aim1" />
              </div>
              <div className="content">
                <div className="heading">ML Project</div>
                <div className="line"></div>
                <div className="desp2">
                  <div>
                    Click on the Below Link to apply for a Machine Learning
                    Project
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <motion.a
                      style={{
                        fontSize: "22px",
                        fontWeight: 550,
                        color: "#6c10c6",
                      }}
                      href=""
                    >
                      Apply
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md-6">
            <motion.div whileHover={{ scale: 1.1 }} className="cont">
              <div className="box">
                <img src="./images/swp.png" alt="Aim1" />
              </div>
              <div className="content">
                <div className="heading">Software Project</div>
                <div className="line"></div>
                <div className="desp2">
                  <div>
                    Click on the Below Link to apply for a Software Project
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <motion.a
                      style={{
                        fontSize: "22px",
                        fontWeight: 550,
                        color: "#6c10c6",
                      }}
                      href=""
                    >
                      Apply
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md-6">
            <motion.div whileHover={{ scale: 1.1 }} className="cont">
              <div className="box">
                <img src="./images/otp.png" alt="Aim1" />
              </div>
              <div className="content">
                <div className="heading">Others</div>
                <div className="line"></div>
                <div className="desp2">
                  <div>
                    {" "}
                    Click on the Below Link to apply for Other type of Projects
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <motion.a
                      style={{
                        fontSize: "22px",
                        fontWeight: 550,
                        color: "#6c10c6",
                      }}
                      href=""
                    >
                      Apply
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <h3
          style={{
            fontSize: "30px",
            fontWeight: 500,
            paddingTop: "70px",
            color: "black",
          }}
        >
          If you have any innovative ideas and want to combine with TL, please
          fill the below form
        </h3>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="btn"
        >
          Apply
        </motion.button>
      </div>
    </ProjectWrapper>
  );
};

export default Projects;

const ProjectWrapper = styled.section`
  padding: 9rem 0;
  .col-lg-4,
  .col-md-6 {
    padding-top: 20px;
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
  .line {
    margin: 2.5rem 5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
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
  }
  a {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 15vh;
  }
  .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  #collab-form {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5vw;
    padding-right: 5vw;
    position: relative;
  }

  .content {
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 39px;
    margin-top: -3.5rem;
    z-index: 1;
    padding-bottom: 30px;
  }
  .col-xl {
    text-align: center;
  }
  .btn {
    margin-top: 50px;
    width: 200px;
    height: 7vh;
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

  .circle3 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }

  .circle4 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 41rem;
    top: 67rem;
  }

  .circle5 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 38rem;
    top: 18rem;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .container {
    justify-content: center;
    text-align: center;
    width: 100vw;
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
    justify-content: end;
    align-items: center;
  }

  picture {
    text-align: end;
  }

  .hero-img {
    width: 70%;
  }
  @media (max-width: 1200px) {
    #right {
      display: none;
    }
    body {
      min-width: fit-content;
    }
    .container {
      justify-content: center;
      text-align: center;
      width: 100vw;
    }
    .wip h2 {
      font-size: 4rem;
      padding-bottom: 5rem;
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
