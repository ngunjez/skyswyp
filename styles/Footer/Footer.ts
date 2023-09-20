import styled from "styled-components";

export const FooterContainer = styled.div`
position:relative;
display:flex;
width: 100%;
height:35vh;
padding: 33px 16px 32px 16px;
align-items: flex-start;
border-top: 1px solid rgba(255, 255, 255, 0.10);
background: #0D0D0E;
`

export const FooterLogo = styled.div`
position:relative;
width: 24.358px;
height: 24.358px;
flex-shrink: 0;
fill: #FFF;
left:50px;
background-image:url("/footer_logo.svg");
background-position:center;
background-size:cover;
background-repeat:no-repeat;
`

export const Get_footer = styled.div`
position:absolute;
top:70px;
left:65px;
color: #FFF;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 27px; 
`

export const Frame1 = styled.div`
position:relative;
top:80px;
width:330px;
left:19px;
height:34px;
display: flex;
align-items:center;
white-space:nowrap;
align-items: flex-start;
gap: 28px;
`

export const Get2Button = styled.button`
display: flex;
padding: 10px 16px;
justify-content: center;
align-items: center;
border-radius: 16.5px;
border: 1px solid rgba(255, 255, 255, 0.10);
background: rgba(255, 255, 255, 0.04);
color: #FFF;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: 14px;
`

export const Arrow = styled.div`
position:absolute;
left:110px;
top:15px;
width: 8.608px;
height: 8.832px;
flex-shrink: 0;
fill: #FFF;
background-image:url("/Arrow.svg");
background-position:center;
background-size:cover;
backgorund-repeat:no-repeat;
`

export const FindButton = styled.button`
display: flex;
padding: 10px 60px 10px 16px;
justify-content: center;
align-items: center;
border-radius: 16.5px;
border: 1px solid rgba(255, 255, 255, 0.10);
background: rgba(255, 255, 255, 0.04);
color: #FFF;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: 14px; 
`

export const FindArrow = styled.div`
position:absolute;
right:20px;
top:15px;
width: 8.608px;
height: 8.832px;
fill: #FFF;
background-image:url("/Arrow.svg");
background-position:center;
background-size:cover;
backgorund-repeat:no-repeat;
`

export const SocialContainer = styled.div`
position:relative;
top:150px;
right:73%;
height:135px;
display: flex;
width: 119.33px;
flex-direction: column;
align-items: flex-start;
gap: 16px;
flex-shrink: 0;
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

export const Links = styled.div`
display: flex;
width: 119.33px;
flex-direction: column;
align-items: flex-start;
gap: 16px;
opacity: 0.6;
cursor:pointer;
`

export const Twitter = styled.div`
display: flex;
padding-right: 0px;
align-items: flex-end;
gap: 10px;
justify-content:center;
`

export const TwitterLogo = styled.div`
width: 16.402px;
height: 13.32px;
flex-shrink: 0;
fill: #FFF;
background-image:url("/Twitter_Logo.svg");
background-position:center -1px;
background-size:cover;
background-repeat:no-repeat;
`

export const TwitterText = styled.div`
color: #FFF;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 22.5px; 
`

export const GitHub = styled.div`
display: flex;
padding-right: 0px;
align-items: flex-end;
gap: 10px;
`

export const GitHubLogo = styled.div`
width: 19.048px;
height: 18.586px;
fill: #FFF;
background-image:url("/GitHub_Logo.svg");
background-position:center -1px;
background-size:cover;
background-repeat:no-repeat;
`

export const GitHubText = styled.div`
color: #FFF;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 22.5px;
`

export const Email = styled.div`
display: flex;
padding-right: 0px;
align-items: flex-end;
gap: 10px;
`

export const EmailLogo = styled.div`
width: 16.667px;
height: 13.333px;
fill: #FFF;
background-image:url("/Email_Logo.svg");
background-position:center -1px;
background-size:cover;
background-repeat:no-repeat;
`

export const EmailText = styled.div`
color: #FFF;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22.5px; 
`