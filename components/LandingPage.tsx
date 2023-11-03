import {
  LandingPageContainer,
  LandingPageWe,
  LandingRec1,
  Providing,
  LandingRec2,
  Text3,
  AIChatbots,
  LandingRec3,
  Text5,
  Websites,
  Line,
  Line1,
  Line2,
  Line3,
  Engineer,
  GetRec,
  Getbtn,
  Arrow,
  ReadText,
  Arrow2,
  Grid,
  Box1,
  SectionRec,
  Header1,
  HeaderText,
  Image1,
  Header2,
  Text2,
  Image2,
  Header3,
  Header3Text,
  Image3,
  Innovation,
  Innovation_Text,
  Image4,
  Collaborative,
  Collaborative_Text,
  Testimonial,
  See_Text,
  OnRec,
  OnText,
  B_Text,
  W_text,
  BW_container,
  OnRec2,
  Their_Text,
  M_text,
  CardLine,
} from "@/styles/LandingPage";
import React from "react";
import Link from "next/link";

const LandingPage = () => {
  const chatbotItems = [
    "AI Chatbots",
    "UI/UX Design",
    "Consultancy",
    "Web Development",
    "Mobile Development",
    "MVP Development",
  ];

  const sectionRecItems = [
    {
      header: "Why Skyswyp?",
      headerText:
        "With a dynamic team of designers, developers, and product strategists, we're dedicated to transforming your ideas into reality. Here's why partnering with us is a + .",
      image: <Image1 />,
    },
    {
      header: "Expertise Across the Spectrum",
      headerText:
        "Our diverse skill set allows us to tackle projects of various technical backgrounds. Whether you're envisioning an AI-powered chatbot, a cutting-edge MVP, a robust web platform, a seamless mobile app, or exploring the potential of blockchain technology",
      image: <Image2 />,
    },
    {
      header: "Client-Centric Approach",
      headerText:
        "We're not just here to execute your vision; we're here to understand your goals, provide valuable insights, and work collaboratively to ensure your project reaches its full potential.",
      image: <Image3 />,
    },
    {
      header: "Innovation from Concept to Completion",
      headerText:
        "From the inception of an idea to the final polished product, we guide you through every step of the development process. Our team excels at turning concepts into actionable plans, creating MVPs that prove concepts and deliver solutions.",
      image: <Image4 />,
    },
  ];
  
  return (
    <LandingPageContainer>
      <Providing>
        Providing the building blocks to increase
        <br /> ROI.
      </Providing>
      <LandingPageWe>we are constantly growing</LandingPageWe>

      <LandingRec1>
        <Line></Line>
        <Line1></Line1>
        <Line2></Line2>
        <Line3></Line3>
        <LandingRec2>
          <Text3>3</Text3>
          <AIChatbots>AI Chatbots</AIChatbots>
        </LandingRec2>
        <LandingRec3>
          <Text5>5</Text5>
          <Websites>Websites</Websites>
        </LandingRec3>
      </LandingRec1>

      <Engineer>
        We engineer experiences that reshape
        <br />
        industries and revolutionize user
        <br />
        engagement.
      </Engineer>

      <GetRec>
        <Getbtn>
          Get an app <Arrow />
        </Getbtn>
        <ReadText>
          Read our Resources <Arrow2 />
        </ReadText>
      </GetRec>
      <Grid>
        {chatbotItems.map((item, index) => (
          <Box1 key={index}>{item}</Box1>
        ))}
      </Grid>
      <SectionRec>
        <Header1>Why Skyswyp?</Header1>
        <HeaderText>
          With a dynamic team of designers, developers, and product strategists,
          we&#39;re dedicated to transforming your ideas into reality.
          Here&#39;s why partnering with us is a + .
        </HeaderText>
        <Image1></Image1>
        <Header2>Expertise Across the Spectrum</Header2>
        <Text2>
          Our diverse skill set allows us to tackle projects of various
          technical backgrounds. Whether you&#39;re envisioning an AI-powered
          chatbot, a cutting-edge MVP, a robust web platform, a seamless mobile
          app, or exploring the potential of blockchain technology
        </Text2>
        <Image2></Image2>
        <Header3>Client-Centric Approach</Header3>
        <Header3Text>
          We&#39;re not just here to execute your vision; we&#39;re here to
          understand your goals, provide valuable insights, and work
          collaboratively to ensure your project reaches its full potential.
        </Header3Text>
        <Image3></Image3>
        <Innovation>Innovation from Concept to Completion</Innovation>
        <Innovation_Text>
          From the inception of an idea to the final polished product, we guide
          you through every step of the development process. Our team excels at
          turning concepts into actionable plans, creating MVPs that prove
          concepts and deliver solutions.
        </Innovation_Text>
        <Image4></Image4>
        <Collaborative>Collaborative Partnership</Collaborative>
        <Collaborative_Text>
          You&#39;re not just hiring a team &#45; you&#39;re gaining a partner
          who is as invested in your success as you are. We prioritize open
          communication, value your insights, and work collaboratively to ensure
          that every project reflects your unique vision.
        </Collaborative_Text>
      </SectionRec>
      <Testimonial>Testimonial</Testimonial>
      <See_Text>
        See why teams trust
        <br /> Skyswyp
      </See_Text>
      <OnRec>
        <OnText>
        &quot;Skyswyp elevated our business with an AI chatbot that understands
          user intent like magic.&quot;
        </OnText>
        <BW_container>
          <B_Text>Benjamin Oramisi</B_Text>
          <W_text>Wavelink Networks</W_text>
        </BW_container>
        <CardLine></CardLine>
      </OnRec>
      <OnRec2>
        <Their_Text>
        &quot;Their web development prowess transformed our online presence,
          boosting user engagement and conversions.&quot;
        </Their_Text>
        <M_text>Margaret </M_text>
      </OnRec2>
    </LandingPageContainer>
  );
};

export default LandingPage;
