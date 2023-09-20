import { Arrow, Email, EmailLogo, EmailText, FindArrow, FindButton, FooterContainer, FooterLogo, Frame1, Get2Button, Get_footer, GitHub, GitHubLogo, GitHubText, Links, SocialContainer, SocialHeader, Twitter, TwitterLogo, TwitterText } from '@/styles/Footer/Footer';
import React from 'react';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterLogo></FooterLogo>
        <Get_footer>Get in Touch with Innovation</Get_footer>
        <Frame1>
            <Get2Button>Get a website
                <Arrow></Arrow>
            </Get2Button>
            <FindButton>Find us on Whatsapp
                <FindArrow></FindArrow>
            </FindButton>
        </Frame1>
        <SocialContainer>
            <SocialHeader>Social</SocialHeader>
            <Links>
            <Twitter>
                <TwitterLogo></TwitterLogo>
                <TwitterText>Twitter</TwitterText>
            </Twitter>
            <GitHub>
                <GitHubLogo></GitHubLogo>
                <GitHubText>GitHub</GitHubText>
            </GitHub>
            <Email>
                <EmailLogo></EmailLogo>
                <EmailText>Email</EmailText>
            </Email>
            </Links>
        </SocialContainer>
    </FooterContainer>
  )
}

export default Footer;