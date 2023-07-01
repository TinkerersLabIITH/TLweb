import React from 'react'
import styled from "styled-components";
import WordAnimation from "../components/homeanimate";

const words = ["Think", "Tinker", "Transform"];
const interval = 200; // Delay between each letter
const typingDelay = 2000; // Delay before erasing starts
const erasingDelay = 100; // Delay between each erased letter


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
          <h3 className='hero-tag'>Tinkerers' Lab IITH</h3>
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
      <div className='circle8' />
      <div className='circle9' />
      
      <div className="secretaries">
        <div className="position">Secretaries</div>
        <div className='img-secs'>
        <picture><img src="./images/jarpula.png" alt="pic" /></picture>
        <picture><img src="./images/abhay.png" alt="pic" /></picture>
        <picture><img src="./images/sahoo.png" alt="pic" /></picture>
        <picture><img src="./images/suddho.png" alt="pic" /></picture>
        </div>
        <div className="img-secs">
        <picture><img src="./images/arthi.png" alt="pic" /></picture>
        <picture><img src="./images/arsh.png" alt="pic" /></picture>
        <picture><img src="./images/anand.png" alt="pic" /></picture>
        </div>
      </div>
      <div className='circle6' />
      <div className='circle7' />
      
      <div className="cores">
        <div className="cores-position">Cores</div>
        <div className="cores-section">
            <div className="core"> 
            <div className="position">SOFTWARE</div>
            <ul className="name-cores">
              <li>ARSH SRIVASTAVA</li>
              <li>MOHAMED KAIF</li>
              <li>AJAY KRISHNAN K</li>
              <li>SATPUTE ANIKET TUKARAM</li>
              <li>DEEPSHIKHA</li>
              <li>KASI DHANVI</li>
              <li>HIMANSHU SHEKHAR MAHARAJ</li>
              <li>ARUGONDA SRIKAR</li>
              <li>SHASHANK SINGH</li>
              <li>MEDIKONDA SREEKAR</li>
              <li>MAHESH</li>
              <li>SAI TEJA BHUKYA</li>
            </ul>
            </div>
            <div className="core"> 
            <div className="position"> MACHINE LEARNING</div>
            <ul className="name-cores">
              <li>HARSH GOYAL</li>
              <li>HARSHIT PANT</li>
              <li>TEJAL KULKARNI</li>
              <li>RATNA KSNR</li>
              <li>AAYUSH ADLAKHA</li>
              <li>DIKSHANT KHANDELWAL</li>
              <li>VISHAL VIJAY DEVADIGA</li>
              <li>SWAPNIL BAG</li>
              <li>SHIRSENDU PAL</li>
              <li>REDDICHARLA NAGA GIRI VARDHAN</li>
              <li>ISHAAN JAIN</li>
              <li>GITANSHU ARORA</li>
            </ul>
            </div>
            <div className="core"> 
            <div className="position"> MECHATRONICS</div>
            <ul className="name-cores">
              <li>KEVIN</li>
              <li>PRATIK PATIL</li>
              <li>NANJUDARDHAYA</li>
              <li>SHRIRAM H</li>
              <li>NEERAJ BALACHANDERN</li>
              <li>SAFA FATHIMA RAFEEK</li>
              <li>GUNETHRA</li>
              <li>KAIPA VENKATA TUHIL</li>
              <li>RAGHUVEER</li>
              <li>MATHEW M PHILIP</li>
              <li>PRAKHAR</li>
              <li>ASHISH BHARDWAJ</li>
            </ul>
           
            </div>
        </div>
        <div className="cores-section">
        <div className="core"> 
            <div className="position">EVENTS & PRO</div>
            <ul className="name-cores">
              <li>PRABHAT</li>
              <li>MEET JAIN</li>
              <li>PARTH KANSAGRA</li>
              <li>AHMIK VIRANI</li>
              <li>SHARVIL PEDAMKAR</li>
              <li>NISARG ASLE</li>
              <li>VEDANT SANGHAVI</li>
              <li>UTTAM PAHARIA</li>
              <li>SARTHAK SINGHAL</li>
              <li>PRITESH SINGH</li>
              <li>DEVANSH AGRAWAL</li>
            </ul>
            </div>
            <div className="core"> 
            <div className="position"> OPERATIONS</div>
            <ul className="name-cores">
              <li>TANISHQ BHATTACHARJEE</li>
              <li>SAHIL KUSHWAHA</li>
              <li>OMKAR NILKANTH</li>
              <li>PRATHAMESH KADAM</li>
              <li>CHANDRAHAAS</li>
              <li>ABHAY GOYAL</li>
              <li>SOHAM JIDDEWAR</li>
              <li>VARUN SRIVASTAV</li>
            </ul>
            </div>
            <div className="core"> 
            <div className="position"> DESIGN</div>
            <ul className="name-cores">
              <li>PRANAY JAIN</li>
              <li>PADMAPRABHAN A</li>
              <li>THAVEEM</li>
              <li>SRIJA MAILERSETTI</li>
              </ul>
           
            </div>
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

  .hero-bottom {
    padding: 50px;
    height: 150px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    padding-bottom: 2rem;
    margin-top:250px;
    margin-left: 15rem;
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
    margin-top:180px;
    .position{
      padding: 2rem 0;
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
    justify-content: space-around; 
    
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
       margin-bottom:40px;
      
    }
  }

  .cores{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 
    margin:30px;
    
    .cores-position{
      
      color: #000;
      text-align: center;
      font-size: 48px;
      font-family: Inter;
      font-weight: 700;
    }

    .cores-section{
      width: 100%;
      display: flex;
      justify-content: space-around;


      .core{
        
        width: 323px;
        height: 500px;
        left: 479px;
        top: 2487px;
        margin-bottom:200px;

        .position{
          width:auto;
          margin-left:0px;  
          padding: 2rem 0;
          color: #000;
          text-align: center;
          font-size: 35px;
          font-family: Inter;
          font-weight: 700;  
          margin-top:40px;
        }
  
        .name-cores{
          font-family: Inter;
          font-size:25px;
          color: #6C10C6;
          text-align: center;

        }
      }

      
    
    } 
  }


  .circle6{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 10rem;
    top: 190rem;
  }

  .circle7{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 15rem;
    top: 195rem;
  }

  .circle8{
    position: absolute;
    background-color: #6C10C6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 200rem;
    top: 90rem;
  }

  .circle9{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 195rem;
    top: 100rem;
  }
  


    @media (min-width:768px){
      
    }

    @media (max-width: 1200px) {
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

      .circle6 {
        display: none;
      }
      .circle7 {
        display: none;
      }
      .circle8 {
        display: none;
      }
      .circle9 {
        display: none;
      }

      .hero-img{
        display: none;
      }

      .hero-heading {
        top:180px;
        font-weight: 800;
        font-size: 50px;
        margin-left:-100px;
        text-align: center;
      }

      
      .hero-tag {
        top:240px;
        font-weight: 500;
        font-size: 30px;
        margin-left:-120px;
        width:auto;
        height:auto;
      }

      .hero-bottom {
        font-size:30px;
        margin-top:120px;
        margin-left:30px;
        text-align: center;
        
      }

      .secretaries{
        
        .img-secs{
          display:flex;
          flex-wrap: wrap;
          align-content: center;
          gap: 3rem;
        }
      }

      .cores{
        
        
        .cores-section{
          display:flex;
          flex-wrap: wrap;
          

          .core{
            margin-bottom:0px;
            height:fit-content;
            
            .position{
              text-align: center;
              font-size:30px;
              margin-left:0px;
            }

            .name-cores{
              font-size:20px;
              text-align: center;
              padding-left:0rem;
              
            }
          }

        }
      }
  }

`;

