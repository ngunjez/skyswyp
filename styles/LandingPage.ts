import { styled } from "styled-components";

export const PageContainer=styled('div')({
    position:"relative",
    display:'flex',
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    width:"450px",
    height:"100%",
    overflowY:"auto",
    overflowX:"hidden",
    "@media screen and(max-width: 599px)":{
      width:"100%",
      height:"100%",
    }
})

export const LandingPageContainer = styled('div')({
  display:"flex",
  flexDirection:"column",
  background:"#000",
  justifyContent:"center",
  alignItems:"center"
})


export const Providing = styled("div")({
  display:"flex",
margin:"55px auto auto auto",
width:"81%",
marginTop:"150px",
background:" linear-gradient(272deg, #B4BBFF 0%, #6AEFFF 25%, #B5FFF2 50%, #6AEFFF 75%, #B4BBFF 100%)",
backgroundClip:" text",
fontFamily:" Inter",
fontSize:" 36px",
fontStyle:" normal",
fontWeight:" 700",
lineHeight:" 58px", 
letterSpacing:" -1.03px",
WebkitBackgroundClip:" text",
WebkitTextFillColor:" transparent",
})

export const LandingPageWe = styled.div`
margin-top:26px;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 20px; 
letter-spacing: 4.2px;
text-transform: uppercase;
background: linear-gradient(271deg, #B4BBFF 0%, #6AEFFF 25%, #B5FFF2 50%, #6AEFFF 75%, #B4BBFF 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

export const Line = styled.div`
width: 358px;
height: 1px;
background: rgba(255, 255, 255, 0.40);
`

export const Line1 = styled.div`
position:absolute;
display:flex;
width: 1px;
height: 144px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%);
`

export const Line2 = styled.div`
position:absolute;
display:flex;
width: 1px;
height: 144px;
left:179px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%);
`

export const Line3 = styled.div`
position:absolute;
width: 1px;
height: 144px;
right:0px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%);
`

export const LandingRec1 = styled.div`
display:flex;
width: 358px;
height: 144px;
margin-top:8.34px;  
position:relative;
`

export const LandingRec2 = styled.div`
position:absolute;
display: flex;
width: 179px;
height:auto;
padding: 32px 0px;
flex-direction: column;
justify-content: center;
align-items: center;
flex-shrink: 0;
text-align:center;
gap:17px;
left:0;
`

export const Text3 = styled.p`
font-family: Inter;
font-size: 26px;
font-style: normal;
font-weight: 400;
line-height: 36px; 
background: linear-gradient(94deg, #FFF 0%, rgba(255, 255, 255, 0.70) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

export const AIChatbots = styled.p`
color: #FFF;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 27px; 
`


export const LandingRec3 = styled.div`
position:absolute;
display: flex;
width: 179px;
height:auto;
padding: 32px 0px;
flex-direction: column;
justify-content: center;
align-items: center;
flex-shrink: 0;
left:179px;
gap:17px;
`

export const Text5 = styled.p`
font-family: Inter;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 36px;
background: linear-gradient(94deg, #FFF 0%, rgba(255, 255, 255, 0.70) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

export const Websites = styled.p`
color: #FFF;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 27px; 
`
export const Engineer = styled.p`
margin-top:35px;
display:flex;
flex-direction:column;
margin:0;
padding:0;
text-align: justify;
color: #FFF;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 34px; 
`

export const GetRec = styled.div`
position:relative;
display: flex;
height: 32px;
width: 358px;
margin-top:31px;
padding-right: 0px;
align-items: center;
gap: 12px;
`

export const Getbtn = styled.button`
align-items: flex-start;
width: 127.02px;
height: 32px;
border-radius: 16px;
background: rgba(255, 255, 255, 0.92);
padding-right: 25px;
color: #000;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: 14px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
padding:9px 15px;
`

export const Arrow = styled.div`
width: 8.608px;
height: 8.832px;
fill: #000000;
background-image: url("Vector.svg");
background-position: center;
background-repeat: no-repeat;
background-size; cover;
`

export const ReadText = styled.div`
display: flex;
flex-direction: row;
align-items:center;
justify-content:space-between;
width:fit-content;
height: 32px;
padding: 9px 15px;
border-radius: 16px;
color: #FFF;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: 14px; 
white-space: nowrap;
`

export const Arrow2 = styled.div`
width: 8.608px;
height: 8.832px;
flex-shrink: 0;
fill: #FFF;
background-color: #000;
background-image: url("Vector2.svg");
background-position: center;
background-repeat: no-rpeat;
background-size: cover;
margin-left:10px;
`

export const Grid = styled.div`
display: flex;
flex-wrap:wrap;
width: 358px;
height: 387px;
flex-direction: column;
align-items: flex-start;
justify-content:center;
text-align:center;
gap: 20px;
margin-top: 97px;
background:#0C0C0EB2;
`

export const Box1 = styled.div`
display: flex;
width: 171px;
padding: 34.95px 51.31px 34.97px 51.3px;
justify-content: center;
align-items: center;
flex-shrink: 0;
background: radial-gradient(70.71% 70.71% at 50% 50%, rgba(51, 51, 61, 0.20) 0%, rgba(57, 57, 70, 0.12) 100%), rgba(12, 12, 14, 0.70);
color: #FFFFFF;
text-align: center;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
white-space:nowrap;
`

export const SectionRec = styled.div`
display: flex;
width: 389px;
height: 2320px;
padding: 0px 16px;
flex-direction: column;
align-items: flex-start;
gap: 40px;
background: rgba(13, 13, 14, 0.80);
box-shadow: 0px 0px 100px 100px rgba(13, 13, 14, 0.80);
`

export const Header1 = styled.div`
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: 20px; 
letter-spacing: 4.2px;
text-transform: uppercase;
background: linear-gradient(271deg, #B4BBFF 0%, #6AEFFF 25%, #B5FFF2 50%, #6AEFFF 75%, #B4BBFF 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

export const HeaderText = styled.div`
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 23.9px; 
letter-spacing: -0.8px;
background: linear-gradient(91deg, #FFF 0%, rgba(255, 255, 255, 0.70) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

export const Image1 = styled.div`
width: 356px;
height: 274.141px;
background: url("/Rs1.png"), lightgray 50% / cover no-repeat;
mix-blend-mode: luminosity;
background-position:center;
background-size:cover;
background-repeat:no-repeat;
`

export const Header2 = styled.div`
color: #FFF;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 33px;
`

export const Text2 = styled.div`
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 22.5px;
background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.70) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

export const Image2 = styled.div`
width: 356px;
height: 297.069px;
background: url("/Image2.svg"), lightgray 50% / cover no-repeat;
mix-blend-mode: luminosity;
background-position:center;
background-size:cover;
background-repeat:no-repeat;
`

export const Header3 = styled.div`
color: #FFF;
font-family: Inter;
font-size: 21px;
font-style: normal;
font-weight: 500;
line-height: 33px;
`

export const Header3Text = styled.div`
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22.5px;
background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.70) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

export const Image3 = styled.div`
width: 356px;
height: 274.141px;
background: url("/Image3.svg"), lightgray 50% / cover no-repeat;
mix-blend-mode: luminosity;
background-position:center;
background-size:cover;
background-repeat:no-repeat;
`

export const Innovation = styled.div`
color: #FFF;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 33px;
`

export const Innovation_Text = styled.div`
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22.5px;
background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.70) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

export const Image4 = styled.div`
width: 356px;
height: 300.059px;
flex-shrink: 0;
background: url("/Image4.svg"), lightgray 50% / cover no-repeat;
mix-blend-mode: luminosity;
background-position:center;
background-size:cover;
background-repeat:no-repeat;
`

export const Collaborative = styled.div`
color: #FFF;
font-family: Inter;
font-size: 21px;
font-style: normal;
font-weight: 500;
line-height: 33px;
`

export const Collaborative_Text = styled.div`
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22.5px;
background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.70) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

export const Testimonial = styled.div`
position:relative;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: 4.2px;
text-transform: uppercase;
background: linear-gradient(271deg, #B4BBFF 0%, #6AEFFF 25%, #B5FFF2 50%, #6AEFFF 75%, #B4BBFF 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
align-items: flex-start;
display:flex;
right:25%;
margin-top:40px;
`

export const See_Text = styled.div`
position:relative;
right:9.1%;
font-family: Inter;
font-size: 31px;
font-style: normal;
font-weight: 400;
line-height: 38.4px;
letter-spacing: -0.8px;
background: linear-gradient(91deg, #FFF 0%, rgba(255, 255, 255, 0.70) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin-top:20px;
`

export const OnRec = styled.div`
display:flex;
padding: 39px 40px 40px 40px;
flex-direction:column;
align-items:flex-start;
justify-content:center;
gap:32px;
width: 358px;
height: 287.624px;
flex-shrink: 0;
background: rgba(255, 255, 255, 0.12);
margin-top:42px;
`

export const CardLine = styled.div`
position:absolute;
width:356px;
height:1px;
margin-top:300px;
background: rgba(255, 255, 255, 0.12);
left:10.5%;
`

export const OnText = styled.div`
color: #FFF;
font-family: Inter;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: 32.4px; 
`

export const BW_container = styled.div`
display: flex;
padding-right: 0px;
flex-direction: column;
align-items: flex-start;
gap: 0.5px;
`

export const B_Text = styled.div`
color: #FFF;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 22.5px;
`

export const W_text = styled.div`
color: #FFF;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 20px;
opacity: 0.7;
`

export const OnRec2 = styled.div`
display: flex;
width: 356px;
flex-direction:column;
align-items:flex-start;
justify-content:center;
padding: 39px 40px 40px 40px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
background: rgba(255, 255, 255, 0.12);
gap:10px;
margin-bottom:113px;
`

export const Their_Text = styled.div`
color: #FFF;
font-family: Inter;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: 32.4px;
`

export const M_text = styled.div`
color: #FFF;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 22.5px;
`

