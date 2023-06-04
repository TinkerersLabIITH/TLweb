import React from 'react'
import Navbar from './Navbar';
import styled from "styled-components";

const Header = () => {
    return (
        <MainHeader>
            <div className="gradient" />
            <div className="header-left">
                <img src="./images/Logo_black.svg" alt="logo" className='logo' />
                <div className="header-name">
                    <div >Thinkerers' Lab</div>
                    <div >IIT Hyderabad</div>
                </div>
            </div>
            <Navbar />
        </MainHeader>
    )
}

export default Header;

const MainHeader = styled.header`
padding: 0 10rem;
height: 10rem;
background-color: ${({ theme }) => theme.colors.white};
display: flex;
justify-content: space-between;
align-items: center;

.gradient {
  position: absolute;
  border-radius: 50%;
  filter: blur(0);
}

.gradient {
  top: -349px;
  left: -363px;
  background: radial-gradient(
    50% 50%at 50% 50%,
    rgba(108, 16, 198, 0.5),
    rgba(186, 104, 200, 0)
  );
  width: 808px;
  height: 794px;
}

.header-left{
    display: flex;
    justify-content: center;
    align-items: center;

    .logo{
        height: 75px;
        width: 54px;
    }

    .header-name{
        padding-left: 1.3rem;
        padding-top: 1rem;
        width: 164px;
        height: 60px;
        left: 104px;
        top: 27px;

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;

        color: #000000;
    }
}
`