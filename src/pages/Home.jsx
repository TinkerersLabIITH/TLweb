import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Homestyled>
      <div className="ellipse1" />
      <div className="ellipse2"></div>
      {/* <div className="circle1" /> */}
      <div className="circle2" />
      <div className="circle3" />
      {/* <div className="circle4" /> */}
      {/* <div className="circle5" /> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-heading">Tinkerers’ Laboratory</div>
            <div className="hero-tag">IIT Hyderabad</div>
            <div className="hero-bottom">Think Transform Thinker...</div>
            <button className="reachus">Reach Us</button>
          </div>
          <div className="col-lg-6">
            <div className="section-hero-image">
              <picture>
                <img className="pic1" src="./images/Home.svg" alt="image" />
              </picture>
            </div>
          </div>
        </div>
        <div className="row" id="aims">
          <div className="col-lg-12">
            <div className="ouraim">Our Aim</div>
            <div className="desp1">
              Here, at Tinkerers' Lab, our aim is to provide you a working space
              with vast ranges of tools in order to bring out the inner tinkerer
              in you
            </div>
          </div>
          </div>
          <div className="row" id="aims2">
          <div className="col-lg-4">
            <div className="box">
              <img src="./images/aim1.svg" alt="Aim1" />
            </div>
            <div className="content">
              <div className="heading">Availability</div>
              <div className="line"></div>
              <div className="desp2">
                We know that the best ideas don't always come to us during work
                hours. Tinkerers' Lab is open 24/7, giving you the liberty to
                build and innovate whenever.
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box">
              <img src="./images/aim2.svg" alt="Aim1" />
            </div>
            <div className="content">
              <div className="heading">Resources</div>
              <div className="line"></div>
              <div className="desp2">
              We have a wide range of resources ,from the commonplace Raspberry Pis and Arduinos to CNCs and 3D Printers.
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box">
              <img src="./images/aim3.svg" alt="Aim1" />
            </div>
            <div className="content">
              <div className="heading">TL Talks</div>
              <div className="line"></div>
              <div className="desp2">
              TL will host talks and sessions with innovators and entrepreneurs to boost the interest in new fields and push boundaries.
              </div>
            </div>
            <div className="hand">
              <img src="./images/hand.svg" alt="hand" />
            </div>
          </div>
          </div>
      </div>
    </Homestyled>
  );
};

export default Home;

const Homestyled = styled.section`
  padding: 9rem 5px;
  #aims2{
    padding:7rem 23rem;
  }
  .hand{
    padding-left:25rem;
  }
  .desp2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #001824;
    padding: 0rem 5rem;
    padding-bottom: 4rem;
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
    margin-top:-2.5rem;
    z-index:1;
    height:35rem;
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
    margin-left:11rem;
    z-index:2;
    position:relative;
  }
  #aims {
    margin: 0 25rem;
  }
  .desp1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #001824;
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
  }
  .reachus {
    position: absolute;
    width: 267px;
    height: 92px;
    left: 155px;
    top: 551px;
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
  .ellipse2 {
    position: absolute;
    width: 681px;
    height: 669px;
    left: -75px;
    top: -441px;

    background: radial-gradient(
        40.83% 40.83% at 50% 50%,
        rgba(0, 224, 255, 0.5) 0%,
        rgba(51, 182, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
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

  .ellipse1 {
    position: absolute;
    width: 808px;
    height: 794px;
    left: -363px;
    top: -349px;

    background: radial-gradient(
        40.83% 40.83% at 50% 50%,
        rgba(108, 16, 198, 0.5) 0%,
        rgba(186, 104, 200, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
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
  .col-lg-6 {
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

  .section-hero-data {
    display: flex;
    justify-content: center;
  }

  .hero-heading {
    position: absolute;
    width: 431px;
    height: 170px;
    left: 15rem;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 85px;
  }

  .hero-tag {
    position: absolute;
    left: 15rem;
    top: 406px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }

  .hero-bottom {
    position: absolute;

    left: 15rem;
    top: 485px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
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
  @media (max-width: 1200px) {
    .pic1 {
      display: none;
    }

    .hero-heading {
      text-align: center;
    }

    .hero-tag {
      text-align: center;
    }

    .hero-bottom {
      text-align: center;
    }
    .circle1 {
      background-color: #6c10c6;
      width: 20px;
      height: 20px;
      border-radius: 50%;
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
      display: none;
    }

    .circle5 {
      display: none;
    }
  }
`;
