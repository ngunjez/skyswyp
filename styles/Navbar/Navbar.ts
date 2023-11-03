import { styled } from "styled-components";

export const NavbarContainer = styled.div`
position:fixed;
width:inherit;
height:64px;
background-color: #0D0D0E;
z-index:1;
border-bottom: 1px solid rgba(255, 255, 255, 0.10);
display:flex;
top:0px;
`

export const NavbarWrapper = styled.div`
width:80%;
height:auto;
display:flex;
justify-content: space-evenly;
align-items:center;
`

export const NavLogo = styled.div`
position:relative;
width:26.1px;
height:26.1px;
fill: #FFF;
left:5%;
background-image: url("Logo.svg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export const NavHeader = styled.div`
position:abolute;
color: #FFF;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 55.224px; /* 345.15% */
`