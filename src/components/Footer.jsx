import React from 'react'
import { styled } from 'styled-components';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <MainFooter>
      <div className="top">

      <div className="subfooter">
        <img src="./images/Vector.svg" alt="logo" />
        <div className="line"></div>
        <div className="names">
          <div >Tinkerers' Lab</div>
          <div >IIT Hyderabad</div>
        </div>
      </div>
      <div className="tagline">Think Thinker Transform.</div>
      </div>
      <footer>
        <div className="container grid grid-three-column">
          <div className="location">
            <div className="bold"><b>Location</b></div>
            <div ><p>Beside Aryabatta Hostel. Indian Institute of Technology Hyderabad, Kandi, Sangareddy, Telangana, India.</p></div>
          </div>
          <div className="handels">
                <div className="bold"><b>Reach us</b></div>
                <div>
                  <picture><img src="./images/img1.svg" alt="facebook" /></picture>
                  <picture><img src="./images/img5.svg" alt="instagram" /></picture>
                  <picture><img src="./images/img2.svg" alt="linkedin" /></picture>
                  <picture><img src="./images/img4.svg" alt="discord" /></picture>
                  <picture><img src="./images/img3.svg" alt="github" /></picture>
                </div>
          </div>
          <div className="contacts">
            <div>
            <PhoneIcon/>
            +91 97992 98098
            </div>
            <div>
              <EmailIcon/>
              tl@iith.ac.in
            </div>
            <div>
              <EmailIcon/>
              ms20btech11019@iith.ac.in
            </div>
          </div>
        </div>
      </footer>
    </MainFooter>
  )
}

export default Footer;

const MainFooter = styled.footer`

  .top{
    border-top: 1px solid #6C10C6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .subfooter{
    padding-top: 5rem ;
    padding-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .line{
      width: 3px;
      height: 12rem;
      background: #6C10C6;
    }
    img{
      left: 2rem;
      height: 12rem;
      width: 12rem;
    }

    .names{
      padding: 0 2rem;
      color: #6C10C6;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
    }
  }

  .tagline{
    align-items: center;
    justify-content: center;
      color: #6C10C6;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
  }

  footer{
    padding: 14rem 0 9rem 0;
    /* background-color: red; */
  }
`;