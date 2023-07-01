import { ClassNames } from '@emotion/react';
import React,{useState} from 'react'
import styled from "styled-components";
import Cybercon from "../images/cyberevent.png"
import TinkeringEp2 from "../images/tinkering101ep2.png"
import TinkeringEp1 from "../images/tinkering101ep1.png"
import TinkerersNight from "../images/tinkerersnight.png"
const Events = () => {
  const [showText, setShowText] = useState(false);
    const handleMouseEnter = () => {
      setShowText(true);
    };
  
    const handleMouseLeave = () => {
      setShowText(false);
    };
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
      
      <img src={Cybercon} className="Cybercon-Image"/>
      <div className='Cybercon-Border'></div>
        <div className='Cybercon-Title'>
        <p className='Cybercon'>Cybercon-2023</p>
      </div>
      <div className='Cybercon-Border-2'></div>
        
        
      <img className="Tinkering-Ep2-Img" src={TinkeringEp2}></img>
        <div className="Tinkering-Ep2-Border"></div>
        <div className='Tinkering-101-ep2-Title'>
        <p className='Tinkering-101-ep2'>Tinkering-101 Episode-2</p>
       </div>
        <div className="Tinkering-Ep2-Border-2"></div>
        
        <img className='Tinkering-Ep1-Image' src={TinkeringEp1}/>
      <div className='Tinkering-Ep1-Border'></div>
      <div className='Tinkering-Ep1-Border-2'></div>
       
      <img className="TN-Night" src={TinkerersNight}/>
      <div className='Tinkering-101-ep-Title'>
        <p className='Tinkering-101-ep1'>Tinkering-101 Episode-1</p>
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
  /* Ellipse 28 */

position: absolute;
width: 20px;
height: 20px;
left: 63px;
top: 1873px;
border-radius:50%;
background: #6C10C6;

}
.circle10{
  /* Ellipse 27 */

position: absolute;
width: 12px;
height: 12px;
left: 499px;
top: 2544px;
border-radius:50%;
background: #6C10C6;

}
.circle11{
  /* Ellipse 26 */

position: absolute;
width: 20px;
height: 20px;
left: 561px;
top: 2591px;
border-radius:50%;
background: #6C10C6;

}
.circle12{
  /* Ellipse 30 */

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
  /* Ellipse 31 */

position: absolute;
width: 12px;
height: 12px;
left: 707px;
top: 3480px;

background: #6C10C6;
border-radius:50%;
}
.circle15{
  /* Ellipse 37 */

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
  /* Ellipse 35 */

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
left: 127px;
top: 972px;
box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.5);
border-radius: 84px;

}
.Cybercon-Border{
box-sizing: border-box;
position: absolute;
width: 1053px;
height: 612px;
left: 114px;
top: 961px;
border: 6px solid #6C10C6;
border-radius: 84px;

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
  width: 1051px;
  height: 611px;
  left: 114px;
  top: 1870px;
  border: 6px solid #6C10C6;
  border-radius: 84px;
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
  width: 812px;
  height: 135px;
  left: 720px;
  top: 2423px;
  background: #8C3FD7;
  border-radius: 107.5px;
  z-index:1;
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
  padding-left:40px;
 
}







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
width: 1060px;
height: 616px;
left: 116px;
top: 2829px;
border: 6px solid #6C10C6;
border-radius: 84px;

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





.TN-Night{
  position: absolute;
  width: 1051px;
  height: 611px;
  left: 120px;
  top: 3835px;
  background: url(image.png);
  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.5);
  border-radius: 84px;
  
}
.TN-Border{

  box-sizing: border-box;
  
  position: absolute;
  width: 1051px;
  height: 611px;
  left: 114px;
  top: 3822px;
  
  border: 6px solid #6C10C6;
  border-radius: 84px;
  
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
  z-index:3;
}

`;