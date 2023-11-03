import { ButtonContainer, FindButton, FirstContainer, FooterContainer, FooterWrapper, GetButton, GetVector, LinkEmail, LinkIcon, LinkText, LinksBox, Logo, LogoText, SocialContainer, SocialHeader } from "@/styles/Footer/Footer";
import React from "react";
import Link from "next/link";


const Footer = () => {
  return(
    <FooterContainer>
      <FooterWrapper>
        <FirstContainer>
          <Logo></Logo>
            <LogoText>Get in Touch with Innovation</LogoText>
            <ButtonContainer>
              <GetButton>Get a website
                <GetVector></GetVector>
              </GetButton>
              <Link
              href="https://api.whatsapp.com/send?phone=254746171687"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FindButton>Find us on Whatsapp
                <GetVector></GetVector>
              </FindButton>
              </Link>
            </ButtonContainer>
        </FirstContainer>
        <SocialContainer>
          <SocialHeader>Social</SocialHeader>
          <LinksBox>
          <Link
              href="https://twitter.com/skyswyp"
              target="_blank"
              rel="noopener noreferrer"
            >
          <LinkIcon></LinkIcon>
          </Link>
          <Link
              href="https://twitter.com/skyswyp"
              target="_blank"
              rel="noopener noreferrer"
            >
          <LinkText>Twitter</LinkText>
          </Link>
          </LinksBox>
          <LinksBox>
          <Link
              href="mailto:skyswyptechnologies@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
          <LinkEmail></LinkEmail>
          </Link>
          <Link
              href="mailto:skyswyptechnologies@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
          <LinkText>Email</LinkText>
          </Link>
          </LinksBox>
        </SocialContainer>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer;