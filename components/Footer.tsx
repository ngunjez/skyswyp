import {
  Arrow,
  Email,
  EmailLogo,
  EmailText,
  FindArrow,
  FindButton,
  FooterContainer,
  FooterLogo,
  Frame1,
  Get2Button,
  Get_footer,
  GitHub,
  GitHubLogo,
  GitHubText,
  Links,
  SocialContainer,
  SocialHeader,
  Twitter,
  TwitterLogo,
  TwitterText,
} from "@/styles/Footer/Footer";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo></FooterLogo>
      <Get_footer>Get in Touch with Innovation</Get_footer>
      <Frame1>
        <Get2Button>
          Get a website
          <Arrow></Arrow>
        </Get2Button>
        <Link
            href="https://api.whatsapp.com/send?phone=254746171687"
            target="_blank"
            rel="noopener noreferrer"
          >
        <FindButton>
          Find us on Whatsapp
          <FindArrow></FindArrow>
        </FindButton>
        </Link>
      </Frame1>
      <SocialContainer>
        <SocialHeader>Social</SocialHeader>
        <Links>
          <Link
            href="https://twitter.com/skyswyp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter>
              <TwitterLogo></TwitterLogo>
              <TwitterText>Twitter</TwitterText>
            </Twitter>
          </Link>
          {/* <GitHub>
                <GitHubLogo></GitHubLogo>
                <GitHubText>GitHub</GitHubText>
            </GitHub> */}
          <Link
            href="mailto:skyswyptechnologies@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email>
              <EmailLogo></EmailLogo>
              <EmailText>Email</EmailText>
            </Email>
          </Link>
        </Links>
      </SocialContainer>
    </FooterContainer>
  );
};

export default Footer;
