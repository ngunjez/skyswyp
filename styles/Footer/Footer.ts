import styled from "styled-components";

export const FooterContainer = styled.div`
position:relative;
display:flex;
flex-direction:column;
width:100%;
height:auto;
align-items:center;
justify-content:center;
background: #0D0D0E;
padding: 33px 16px 32px 16px;
`

export const FooterWrapper = styled.div`
width:80%;
height:auto;
display:flex;
flex-direction:column;
gap:48px;

`

export const FirstContainer = styled.div`
width:auto;
height:auto;
display:flex;
align-items:flex-start;
flex-direction:column;
gap:15px;
`

export const Logo = styled.div`
width: 123.19px;
height: 28px;
background-image:url("/footer_logo.svg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export const LogoText = styled.div`
color: #FFF;
font-family: Inter;
font-size: 14px;
font-weight: 700;
line-height: 27px;
`

export const ButtonContainer = styled.div`
width:auto;
height:auto;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:28px;
`

export const GetButton = styled.div`
display: flex;
width: auto;
height:auto;
justify-content: center;
align-items: center;
border-radius: 16.5px;
border: 1px solid rgba(255, 255, 255, 0.10);
background: rgba(255, 255, 255, 0.04);
gap:5px;
white-space: nowrap;
`

export const GetVector = styled.div`
width: 8.608px;
height: 8.832px;
flex-shrink: 0;
fill: #FFF;
background-image:url("/fvector.svg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export const FindButton = styled.div`
display: flex;
height:auto;
justify-content: center;
align-items: center;
border-radius: 16.5px;
border: 1px solid rgba(255, 255, 255, 0.10);
background: rgba(255, 255, 255, 0.04);
gap:5px;
white-space: nowrap;

`

export const SocialContainer = styled.div`
width:auto;
height:auto;
display:flex;
flex-direction:column;
gap:16px;
`

export const SocialHeader = styled.div`
color: #FFF;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px; 
letter-spacing: 2.8px;
text-transform: uppercase;
`

export const LinksBox = styled.div`
width:auto;
height:auto;
display:flex;
flex-direction:row;
align-items:center;
gap:10px;
`

export const LinkIcon = styled.div`
width: 20px;
height: 17.63px;
padding: 2.352px 1.663px 1.957px 1.935px;
align-items: flex-start;
background-image:url("/Twitter.svg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export const LinkText = styled.div`
color: #FFF;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 22.5px;
`

export const LinkEmail = styled.div`
width: 20px;
height: 17.63px;
padding: 2.352px 1.663px 1.957px 1.935px;
align-items: flex-start;
background-image:url("/Email.svg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export const LinkText2 = styled.div`
color: #FFF;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 22.5px;
`