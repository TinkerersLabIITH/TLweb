import React from 'react'
import styled from "styled-components";

const Team = () => {
  return (
    <TeamWrapper>
      <div className='circle1' />
      <div className='circle2' />
      <div className='circle3' />
      <div className='circle4' />
      <div className='circle5' />
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <h2 className='hero-heading'>Our Team</h2>
          <h3 className='hero-tag'>Tinkerers’ Lab IITH</h3>
          <h4 className="hero-bottom">Think Tinker Transform.</h4>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src="./images/Team.svg" alt="image" className='hero-img' />
          </picture>
        </div>
      </div>
      <div className="convener">
        <div className="position">Convener</div>
        <picture>
          <img src="./images/samyak.png" alt="pic" />
        </picture>
      </div>
      <div className="secretaries">
        <div className="position">Secretaries</div>
        <div className='img-secs'>
        <picture><img src="./images/samyak.png" alt="pic" /></picture>
        <picture><img src="./images/samyak.png" alt="pic" /></picture>
        <picture><img src="./images/samyak.png" alt="pic" /></picture>
        <picture><img src="./images/samyak.png" alt="pic" /></picture>
        <picture><img src="./images/samyak.png" alt="pic" /></picture>
        <picture><img src="./images/samyak.png" alt="pic" /></picture>
        <picture><img src="./images/samyak.png" alt="pic" /></picture>
        </div>
      </div>
    </TeamWrapper>
  )
}

export default Team;

const TeamWrapper = styled.section`
  padding: 9rem 0;

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

  .section-hero-data{
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    justify-content: end;
    align-items: center;
  }

  picture{
    text-align: end;
  }

  .hero-img{
    width: 100%;
  }

  .convener{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    
    .position{
      padding: 10rem 0;
      color: #000;
      text-align: center;
      font-size: 48px;
      font-family: Inter;
      font-weight: 700;
    }

    img{
      width: 262.292px;
      height: 280px;
    }
  }

  .secretaries{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    
    .position{
      padding: 7rem 0;
      color: #000;
      text-align: center;
      font-size: 48px;
      font-family: Inter;
      font-weight: 700;
    }

    .img-secs{
      display: flex;
      flex-direction: row;
    }
  }

`;