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
    position: 'absolute',
    width: '72.5%',
    top: '25.8cm',
    left: '3.4cm',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.5s ease',
    aspectRatio: '1.72',
    borderRadius:'67.5px'
  }
  const EP2Image={
    backgroundImage: `url(${TinkeringEp2})`,
    transform: 'translate3d(0, 0, 0)',
    position: 'absolute',
    width: '72.5%',
    top: '49.8cm',
    left: '3.4cm',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.5s ease',
    aspectRatio: '1.72',
    borderRadius:'67.5px'
  }
  const EP1Image={
    backgroundImage: `url(${TinkeringEp1})`,
    transform: 'translate3d(0, 0, 0)',
    position: 'absolute',
    width: '72.5%',
    top: '75.2cm',
    left: '3.4cm',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.5s ease',
    aspectRatio: '1.72',
    borderRadius:'67.5px'
  }
  const TNightIMG={
    backgroundImage: `url(${TinkerersNight})`,
    transform: 'translate3d(0, 0, 0)',
    position: 'absolute',
    width: '72.5%',
    top: '101.5cm',
    left: '3.4cm',
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
    
      
      <div className='Effect' style={divStyle}>
          <div className='Content'>
             <p>ilwauefhwaiufhiuhfiuhihiu</p>
          </div>
      </div>
      <div className='Cybercon-Border'></div>
         <div className='Cybercon-Title'>
         <p className='Cybercon'>Cybercon-2023</p>
      </div>
      <div className='Cybercon-Border-2'></div>
        
     
     
      <div className='Effect' style={EP2Image}>
          <div className='Content'>
             <p>ilwauefhwaiufhiuhfiuhihiu</p>
          </div>
      </div>
      <div className="Tinkering-Ep2-Border"></div>
        <div className='Tinkering-101-ep2-Title'>
        <p className='Tinkering-101-ep2'>Tinkering-101 Episode-2</p>
       </div>
        <div className="Tinkering-Ep2-Border-2"></div>
        

        
        <div className='Effect' style={EP1Image}>
          <div className='Content'>
             <p>ilwauefhwaiufhiuhfiuhihiu</p>
          </div>
      </div>
      <div className='Tinkering-Ep1-Border'></div>
      <div className='Tinkering-Ep1-Border-2'></div>
       <div className='Tinkering-101-ep-Title'>
        <p className='Tinkering-101-ep1'>Tinkering-101 Episode-1</p>
      </div>

      
      
      <div className='Effect' style={TNightIMG}>
          <div className='Content'>
             <p>ilwauefhwaiufhiuhfiuhihiu</p>
          </div>
      </div>
      <div className="TN-Border"></div>
      <div className="TN-Border-2"></div>
      <div className='TN-Container'>
      <div className='Tinkerers-Night-Title'>
        <p className='Tinkerers-Night'>Tinkerers Night</p>
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
left: 707px;
top: 3480px;

background: #6C10C6;
border-radius:50%;
}
.circle14{
position: absolute;
width: 12px;
height: 12px;
left: 707px;
top: 3480px;

background: #6C10C6;
border-radius:50%;
}
.circle15{
position: absolute;
width: 20px;
height: 20px;
left: 63px;
top: 3825px;

background: #6C10C6;
border-radius:50%;
}
.circle16{

  position: absolute;
  width: 12px;
  height: 12px;
  left: 499px;
  top: 4496px;
  border-radius:50%;
  background: #6C10C6;
  
}
.circle17{

position: absolute;
width: 20px;
height: 20px;
left: 561px;
top: 4543px;
border-radius:50%;
background: #6C10C6;

}

.Cybercon-Image{
      position: absolute;
      width: 1053px;
      height: 612px;

left: 107px;
top: 972px;
box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.5);
border-radius: 84px;


}
.Cybercon-Border{
box-sizing: border-box;
position: absolute;
// width: 1053px;
width:72.5%;
// height: 612px;
left: 120px;
top: 961px;
border: 6px solid #6C10C6;
border-radius: 84px;
z-index:-1;
aspect-ratio:1.72;
}
.Cybercon-Border-2{
position: absolute;
width: 631px;
height: 159px;
left: -174px;
top: 1524px;
background: #6C10C6;
box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
border-radius: 79.5px;
aspect-ratio:3.96;
}
.Cybercon-Title{
  position: absolute;
  width: 646px;
  height: 135px;
  left: -174px;
  top: 1524px;
  z-index:1;
  background: #8C3FD7;
  border-radius: 67.5px;
  aspect-ratio:4.78;
}
.Cybercon{
  left:5cm;
  top:1cm;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #FFFFFF;
  padding-top:35px;
  padding-left:200px;
}
@media (max-width: 767px) {
  .Cybercon-Border-2 {
    width: 100%;
    height: auto;
    left: 0;
  }
  
  .Cybercon-Title{
    width: 100%;
    left: 0;
   
    aspect-ratio: auto;
  }
  
  .Cybercon {
    font-size: 24px;
    line-height: 30px;
    padding-top: 20px;
    padding-right: 60px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .Cybercon-Border-2{
    width: 90%;
    left: 5%;
  }
  
  .Cybercon-Title {
    width: 80%;
    left: 10%;

  }
  .Cybercon{
    padding-left: 10px;
  }
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








.Tinkering-Ep2-Img{
  position: absolute;
width: 1051px;
height: 611px;
left: 129px;
top: 1881px;
box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.5);
border-radius: 84px;

}
.Tinkering-Ep2-Border{
  box-sizing: border-box;
  position: absolute;
  // width: 1051px;
  // height: 611px;
  width:72.5%;
  left: 114px;
  top: 1870px;
  border: 6px solid #6C10C6;
  border-radius: 84px;
  z-index:-1;
  aspect-ratio:1.72
  }
  .Tinkering-Ep2-Border-2{
position: absolute;
width: 812px;
height: 159px;
left: 750px;
top: 2423px;
background: #6C10C6;
box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
border-radius: 107.5px;
}
.Tinkering-101-ep2-Title{
 position: absolute;
  width: 60%;
  // height: 135px;
  left: 720px;
  top: 2423px;
  background: #8C3FD7;
  border-radius: 107.5px;
  z-index:1;
  aspect-ratio:6.01;
  }
.Tinkering-101-ep2{
  left:15cm;
  top:1cm;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #FFFFFF;
  padding-top:35px;
  padding-left:80px;
 }
 @media (max-width: 767px) {
  .Tinkering-Ep2-Border-2 {
    width: 100%;
    height: auto;
    left: 0;
   
  }
  
  .Tinkering-101-ep2-Title {
    width: 100%;
    left: 0;
    
    aspect-ratio: auto;
  }
  
  .Tinkering-101-ep2 {
    font-size: 24px;
    line-height: 30px;
    padding-top: 20px;
    padding-left: 10px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .Tinkering-Ep2-Border-2 {
    width: 90%;
    left: 5%;
  }
  
  .Tinkering-101-ep2-Title {
    width: 80%;
    left: 10%;
  }
}

/* For screens larger than 1024px */
// @media (min-width: 1024px) {
//   .Tinkering-Ep2-Border-2 {
//     width: 812px;
//     height: 159px;
//     left: 750px;
//     top: 2423px;
//   }
  
//   .Tinkering-101-ep2-Title {
//     width: 60%;
//     left: 720px;
//     top: 2423px;
//     aspect-ratio: 6.01;
//   }
// }


// .Tinkering-Ep2-Border-2 {
//   position: absolute;
//   background: #6C10C6;
//   box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
//   border-radius: 107.5px;
// }

// .Tinkering-101-ep2-Title {
//   position: absolute;
//   background: #8C3FD7;
//   border-radius: 107.5px;
//   z-index: 1;
// }

// .Tinkering-101-ep2 {
//   position: relative;
//   font-family: 'Inter';
//   font-style: normal;
//   font-weight: 700;
//   font-size: 48px;
//   line-height: 58px;
//   color: #FFFFFF;
//   padding-top: 35px;
//   padding-left: 10px;
// }







.Tinkering-Ep1-Image{

  position: absolute;
  width: 1046px;
  height: 615px;
  left: 136px;
  top: 2847px;
  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.5);
  border-radius: 84px;
  
  
}
.Tinkering-Ep1-Border{
box-sizing: border-box;
position: absolute;
// width: 1060px;
// height: 616px;
width:72.5%;
left: 116px;
top: 2829px;
border: 6px solid #6C10C6;
border-radius: 84px;
z-index:-1;
aspect-ratio:1.72;
}
.Tinkering-Ep1-Border-2{
position: absolute;
width: 789px;
height: 159px;
left: -172px;
top: 3387px;
background: #6C10C6;
box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
border-radius: 107.5px;

}
.Tinkering-101-ep-Title{

  position: absolute;
  width: 813px;
  height: 135px;
  left: -172px;
  top: 3387px;
  z-index:1;
  background: #8C3FD7;
  border-radius: 107.5px;
  
}
.Tinkering-101-ep1{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #FFFFFF;
  padding-top:35px;
  padding-left:200px;
}
@media (max-width: 767px) {
  .Tinkering-Ep1-Border-2 {
    width: 100%;
    height: auto;
    left: 0;
    
  }
  
  .Tinkering-101-ep-Title {
    width: 100%;
    left: 0;

    aspect-ratio: auto;
  }
  
  .Tinkering-101-ep1 {
    font-size: 24px;
    line-height: 30px;
    padding-top: 20px;
    padding-right: 60px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .Tinkering-Ep1-Border-2{
    width: 90%;
    left: 5%;
    
  }
  
  .Tinkering-101-ep-Title {
    width: 80%;
    left: 10%;

  }
  .Tinkering-101-ep1 {
    padding-left: 10px;
  }
}







.TN-Border{

  box-sizing: border-box;
  
  position: absolute;
  // width: 1051px;
  // height: 611px;
  width:72.5%;
  left: 114px;
  top: 3822px;
  
  border: 6px solid #6C10C6;
  border-radius: 84px;
  z-index:-1;
  aspect-ratio:1.72;
}
.TN-Border-2{
position: absolute;
width: 812px;
height: 159px;
left: 780px;
top: 4365px;
background: #6C10C6;
box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
border-radius: 107.5px;

}
.TN-Container{
  position:relative;
}
.Tinkerers-Night-Title{
  padding-right: 20px;
  width: 812px;
  height: 135px;
  background: #8C3FD7;
  border-radius: 67.5px;
  margin-top: 91cm;
  margin-left:20cm;
  padding-left:26px;
  padding-top:30px;
  z-index:1;
}
.Tinkerers-Night{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #FFFFFF;
  padding-top:10px;
  padding-left:20px;
  z-index:1;
}
`;