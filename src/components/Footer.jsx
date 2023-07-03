import React from "react";
import { styled } from "styled-components";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { NavLink } from "react-router-dom";
import WordAnimation from "../components/homeanimate";

const words = ["hink", "inker", "ransform"];
const interval = 300; // Delay between each letter
const typingDelay = 2000; // Delay before erasing starts
const erasingDelay = 150; // Delay between each erased letter

const Footer = () => {
  return (
    <MainFooter>
      <div className="top">
        <div className="subfooter">
          <img src="./images/Vector.svg" alt="logo" />
          <div className="line"></div>
          <div className="names">
            <div>Tinkerers' Lab</div>
            <div>IIT Hyderabad</div>
          </div>
        </div>
        <div className="tagline">
          T
          <WordAnimation
            words={words}
            interval={interval}
            typingDelay={typingDelay}
            erasingDelay={erasingDelay}
          />
        </div>
      </div>
      <footer>
        <div className="container grid grid-three-column">
          <div className="location">
            <div className="bold">
              <b>Location</b>
            </div>
            <div>
              <p>
                Beside Aryabatta Hostel. Indian Institute of Technology
                Hyderabad, Kandi, Sangareddy, Telangana, India.
              </p>
            </div>
          </div>
          <div className="handels">
            <div className="bold">
              <b>Reach us</b>
            </div>
            <div className="accounts">
              <picture>
                <NavLink to="https://www.facebook.com/tl.iith/" target="_blank">
                  <img src="./images/img1.svg" alt="facebook" />
                </NavLink>
              </picture>
              <picture>
                <NavLink
                  to="https://www.instagram.com/tinkererslab_iith"
                  target="_blank"
                >
                  <img src="./images/img5.svg" alt="instagram" />
                </NavLink>
              </picture>
              <picture>
                <NavLink
                  to="https://www.linkedin.com/in/tinkerers-lab-iith/"
                  target="_blank"
                >
                  <img src="./images/img2.svg" alt="linkedin" />
                </NavLink>
              </picture>
              <picture>
                <NavLink to="https://discord.gg/cZFaRjyw" target="_blank">
                  <img src="./images/img4.svg" alt="discord" />
                </NavLink>
              </picture>
              <picture>
                <NavLink
                  to="https://github.com/TinkerersLabIITH"
                  target="_blank"
                >
                  <img src="./images/img3.svg" alt="github" />
                </NavLink>
              </picture>
            </div>
          </div>
          <div className="contacts">
            <div>
              <PhoneIcon />
              +91 97992 98098
            </div>
            <div>
              <EmailIcon />
              tl@iith.ac.in
            </div>
            <div>
              <EmailIcon />
              ms20btech11019@iith.ac.in
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright © 2023 All Rights Reserved | IIT Hyderabad
        </div>
      </footer>
    </MainFooter>
  );
};
export default Footer;

const MainFooter = styled.footer`
  .top {
    border-top: 1px solid #6c10c6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .subfooter {
    padding-top: 5rem;
    padding-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .line {
      width: 3px;
      height: 12rem;
      background: #6c10c6;
    }
    img {
      left: 2rem;
      height: 12rem;
      width: 12rem;
    }

    .names {
      padding: 0 2rem;
      color: #6c10c6;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
    }
  }

  .tagline {
    align-items: center;
    justify-content: center;
    color: #6c10c6;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
  }

  footer {
    padding-top: 5rem;
  }

  .copyright {
    padding-top: 5rem;
    padding-bottom: 2rem;
    color: #6c10c6;
    font-size: 20px;
    font-family: Inter;
    text-align: center;
  }

  .location {
    color: #6c10c6;
    font-size: 20px;
    font-family: Inter;
    margin: 0 6rem;
    text-align: center;
  }

  .handels {
    color: #6c10c6;
    font-size: 20px;
    font-family: Inter;
    text-align: center;

    .accounts {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 2.5rem;
      gap: 2rem;
    }
  }

  .contacts {
    color: #6c10c6;
    font-size: 20px;
    font-family: Inter;
    padding-left: 6.5rem;

    svg {
      font-size: 25px;
      margin-right: 20px;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 1200px) {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3.2rem;

      .grid {
      }
    }

    .subfooter {
      img {
        margin-left: 2rem;
        height: 10rem;
        width: 10rem;
      }

      .names {
        font-size: 25px;
      }
    }
    .tagline {
      font-size: 20px;
    }

    .handels {
      .accounts {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 2rem;
        gap: 0.1rem;
      }
    }

    .contacts {
      color: #6c10c6;
      font-size: 15px;
      font-family: Inter;
      padding-left: 2rem;
    }
  }
`;