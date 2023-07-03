import { ClassNames } from '@emotion/react';
import React,{useState} from 'react'
import styled from "styled-components";
import Cybercon from "../images/cyberevent.png"
import TinkeringEp2 from "../images/tinkering101ep2.png"
import TinkeringEp1 from "../images/tinkering101ep1.png"
import TinkerersNight from "../images/tinkerersnight.png"
const Events = () => {
  const divStyle = {
    backgroundImage: `url(${Cybercon})`,
    transform: 'translate3d(0, 0, 0)',
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.5s ease',
    aspectRatio: '1.72',
    borderRadius:'67.5px'
  }
  const EP2Image={
    backgroundImage: `url(${TinkeringEp2})`,
    transform: 'translate3d(0, 0, 0)',
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.5s ease',
    aspectRatio: '1.72',
    borderRadius:'67.5px'
  }
  const EP1Image={
    backgroundImage: `url(${TinkeringEp1})`,
    transform: 'translate3d(0, 0, 0)',
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.5s ease',
    aspectRatio: '1.72',
    borderRadius:'67.5px'
  }
  const TNightIMG={
    backgroundImage: `url(${TinkerersNight})`,
    transform: 'translate3d(0, 0, 0)',
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.5s ease',
    aspectRatio: '1.72',
    borderRadius:'67.5px'
  }
  return (
    <EventWrapper>
       <div className='circle1' />
      <div className='circle2' />
      <div className='circle3' />
      <div className='circle4' />
      <div className='circle5' />
      <div className="circle6" />
      <div className='circle7'/>
      <div className='circle8'/>
      <div className='circle9'/>
      <div className='circle10'/>
      <div className='circle11'/>
      <div className='circle12'/>
      <div className='circle13'/>
      <div className='circle14'/>
      <div className='circle15'/>
      <div className='circle16'/>
      <div className='circle17'/>
        <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <h2 className='hero-heading'>Events</h2>
          <h3 className='hero-tag'>Tinkerers’ Lab IITH</h3>
          <h4 className="hero-bottom">Think Tinker Transform.</h4>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src="./images/Event.svg" alt="image" className='hero-img'/>
          </picture>
        </div>
      </div>
    
  <div className="flex-container">
    <div className="flex-item">
      <div className="image">
      <div className='Effect' style={divStyle}>
      <div className='Content'>
             <p>ilwauefhwaiufhiuhfiuhihiu</p>
          </div>
          </div>
          <div className="Left-Img">
        <div className="image-name">CyberCon-2023</div>
        <div className="decoration"></div>
        </div>
      </div>
    </div>
    <div className="flex-item">
      <div className="image">
      <div className='Effect' style={EP2Image}>
      <div className='Content'>
             <p>ilwauefhwaiufhiuhfiuhihiu</p>
          </div>
          </div>
          <div className='Right-Img'>
        <div className="image-name-2">Tinkering-101-Episode-02</div>
        <div className="decoration-2"></div>
        </div>
      </div>
    </div>
    <div className="flex-item">
      <div className="image">
      <div className='Effect' style={EP1Image}>
      <div className='Content'>
             <p>ilwauefhwaiufhiuhfiuhihiu</p>
          </div>
          </div>
          <div className="Left-Img">
        <div className="image-name-3">Tinkering-101-Episode-01</div>
        <div className="decoration-3"></div>
        </div>
      </div>
    </div>
    <div className="flex-item">
      <div className="image">
      <div className='Effect' style={TNightIMG}>
      <div className='Content'>
             <p>ilwauefhwaiufhiuhfiuhihiu</p>
          </div>
          </div>
          <div className='Right-Img'>
        <div className="image-name-4">Tinkerers-Night</div>
        <div className="decoration-4"></div>
        </div>
      </div>
    </div>
  </div>
    </EventWrapper>
  )
}

export default Events;

const EventWrapper = styled.section`
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
 
  .flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:15rem 0;
    gap:25%;
   
  }

  .flex-item {
    padding: 10px;
    text-align: center;
    align-items: center;
    width:75%;
  }

  .Right-Img {
    position: relative;
    display: inline-block;
    align-items: center;
    left:50%;
     
    
  }
  .Left-Img{
    position: relative;
    display: inline-block;
    align-items: center;
    right:50%;
  }

  .image-name {
    align-items:center;
    position: relative;
    width: 100%;
    height: 135px;
    bottom:6vh;
    z-index: 1;
    background: #8C3FD7;
    border-radius: 67.5px;
    aspect-ratio: 4.78;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 58px;
    color: #FFFFFF;
    padding-top: 35px;
    padding-left: 20%;
    text-align: left;
    margin-bottom: 20px;
  }
  .image-name-2 {
    align-items:center;
    position: relative;
    width: 120%;
    height: 135px;
    bottom:60px;
    z-index: 1;
    background: #8C3FD7;
    border-radius: 67.5px;
    aspect-ratio: 4.78;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #FFFFFF;
    padding-top: 5%;
    padding-right:8%;
    text-align: left;
    margin-bottom: 20px;
    right:18%;
    padding-left:3%;
  }
  .image-name-3{
  align-items:center;
  position: relative;
  width: 120%;
  height: 135px;
  bottom:20px;
  z-index: 1;
  background: #8C3FD7;
  border-radius: 67.5px;
  aspect-ratio: 4.78;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #FFFFFF;
  padding-top: 6%;
  padding-left:15%;
  text-align: left;
  margin-bottom: 20px;
  left:6%;
  }
  .image-name-4 {
  align-items:center;
  position: relative;
  width: 100%;
  height: 135px;
  bottom:20px;
  z-index: 1;
  background: #8C3FD7;
  border-radius: 67.5px;
  aspect-ratio: 4.78;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #FFFFFF;
  padding-top: 6%;
  padding-left:20%;
  text-align: left;
  margin-bottom: 20px;
  right:2%;
  }
  .decoration {
    width: 110%;
    height: 100%;
    background: #6C10C6;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    border-radius: 79.5px;
    aspect-ratio: 3.96;
    position:absolute;
    bottom:30%;
    right:6%;
  }
  .decoration-2 {
  width: 110%;
  height: 159px;
  background: #6C10C6;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  border-radius: 79.5px;
  aspect-ratio: 3.96;
  position:absolute;
  bottom:35%;
  right:4%;
  }
  .decoration-3{
    width: 120%;
  height: 100%;
  background: #6C10C6;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  border-radius: 79.5px;
  aspect-ratio: 3.96;
  position:absolute;
  bottom:10%;
  left:2%;
  }
  .decoration-4{
    width: 110%;
    height: 100%;
  background: #6C10C6;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  border-radius: 79.5px;
  aspect-ratio: 3.96;
  position:absolute;
  bottom:15px;
  }
  @media (max-width: 1200px) {
    .flex-container {
      padding: 10px;
      gap: 20px;
    }
  
    .flex-item {
      width: 100%;
    }
  
    .Right-Img,
    .Left-Img {
      left: auto;
      right: auto;
    }
  
    .image-name{
      font-size: 32px;
      padding-top: 5%;
      padding-left:20%;
      width:100%;
    }
   
    .image-name-3,
    .image-name-4 {
      font-size: 32px;
      padding-top: 5%;
      padding-left:20%;
      width:100%;
      left:1%;
    }
    .image-name-2{
      font-size: 32px;
      padding-top: 5%;
      padding-left:20%;
      width:100%;
      left:2%;
    }
    .decoration,
    .decoration-2,
    .decoration-3,
    .decoration-4{
      width:auto;
    } 

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
    position:  absolute;
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
    font-weight: 700;
    width: auto;
    height: auto;
    font-size: 5.5rem;
    position: unset;
}

    .hero-tag {
    font-family: 'Inter';
    font-style: normal;
    width: auto;
    height: auto;
    position: unset;
    font-size: 4rem;
    line-height: 4rem;
    }

    .hero-bottom {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
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
  }

  .section-hero-image{
    display: flex;
    justify-content: end;
    align-items: center;
  }
  @media (max-width: 1000px) {
    .section-hero-image {
      display: none;
    }
  }

  .hero-img{
    width: 100%;
  }
 
  .circle6{
    position: absolute;
    width: 20px;
    height: 20px;
    left: 53px;
    top: 941px;
    border-radius: 50%;
    background: #6C10C6;
    }
    
.circle7{
 position: absolute;
width: 12px;
height: 12px;
left: 561px;
top: 1612px;
background: #6C10C6;
border-radius:50%;
}
.circle8{

position: absolute;
width: 20px;
height: 20px;
left: 494px;
top: 1649px;
border-radius:50%;
background: #6C10C6;

}
.circle9{
  

position: absolute;
width: 20px;
height: 20px;
left: 63px;
top: 1873px;
border-radius:50%;
background: #6C10C6;

}
.circle10{
 

position: absolute;
width: 12px;
height: 12px;
left: 499px;
top: 2544px;
border-radius:50%;
background: #6C10C6;

}
.circle11{
position: absolute;
width: 20px;
height: 20px;
left: 561px;
top: 2591px;
border-radius:50%;
background: #6C10C6;

}
.circle12{

position: absolute;
width: 20px;
height: 20px;
left: 53px;
top: 2829px;
border-radius:50%;
background: #6C10C6;

}
.circle13{
 

position: absolute;
width: 12px;
height: 12px;
left: 507px;
top: 3480px;

background: #6C10C6;
border-radius:50%;
}
.circle14{
position: absolute;
width: 12px;
height: 12px;
left: 707px;
top: 3180px;

background: #6C10C6;
border-radius:50%;
}
.circle15{
position: absolute;
width: 20px;
height: 20px;
left: 103px;
top: 3825px;

background: #6C10C6;
border-radius:50%;
}
.circle16{

  position: absolute;
  width: 12px;
  height: 12px;
  left: 499px;
  top: 3996px;
  border-radius:50%;
  background: #6C10C6;
  
}
.circle17{

position: absolute;
width: 20px;
height: 20px;
left: 561px;
top: 4043px;
border-radius:50%;
background: #6C10C6;

}
.Effect {
  transform: translate3d(0, 0, 0);
  position: relative;
 width: 72%; 
  aspect-ratio: 1.72;
  color: #fff;
  overflow: hidden;
  transition: width 0.5s ease;
  z-index:0.5;
}
.Effect:before,
.Effect:after {
  transform: translate3d(0, 0, 0);
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  // border-radius:67.5px;
}
.Effect:after {
  background: transparentize(#031625, 0.15);
  opacity: 1;
  transition: opacity 0.5s ease;
}
.Effect:before {
  background: rgba(104, 50, 172, 0.6); /* Replace with your desired light purple color */
  z-index: 1;
  opacity: 0;
  transform: translate3d(0, 10, 0) translateY(100%);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.Effect:hover {
  width: 72.5%;
}
.Effect:hover:after {
  opacity: 0;
}

.Effect:hover:before {
  opacity: 1;
  transform: translate3d(0, 0, 0) translateY(0);
  transition: opacity 1s ease, transform 1s ease 0.25s;
}
.Effect:hover .Content {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.75s ease 0.5s;
}
.Effect:hover .Effect {
  filter: grayscale(0);
}
.Content {
  transform: translate3d(0, 0, 0) translateY(25px);
  position: relative;
  z-index: 10;
  text-align: center;
  margin: 0 1.618em;
  top: 50%; /* Adjust the vertical position to center the content */
  opacity: 0;
  color: white; /* Change the color to purple */
  font-size: 20px;
}
@media (max-width: 1000px) {
  .circle6,
  .circle7,
  .circle8,
  .circle9,
  .circle10,
  .circle11,
  .circle12,
  .circle13,
  .circle14,
  .circle15,
  .circle16,
  .circle17
  {
    display: none;
  }
}
`;