import React from 'react'
import styled from "styled-components";

const Home = () => {
    return (
        <Homestyled>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <h2 className='hero-heading'>Tinkerers’ Laboratory</h2>
          <h3 className='hero-tag'>IIT Hyderabad</h3>
          <h4 className="hero-bottom">Think Tinker Transform.</h4>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src="./images/Home.svg" alt="image" />
          </picture>
        </div>
      </div>
    </Homestyled>
    )
}

export default Home;


const Homestyled = styled.section`
  padding: 9rem 0;

  .section-hero-data{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero-heading{
    position: absolute;
    width: 431px;
    height: 170px;
    left: 15rem;
    top: 220px;
      
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 85px;
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
    left: 15rem;
    top: 485px;
      
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
  }

  .section-hero-image{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 624px;
  }

  picture{
    text-align: center;
  }


`;