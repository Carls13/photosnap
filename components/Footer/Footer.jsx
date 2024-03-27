import Image from "next/image"
import { CustomLink } from "../CustomLink/CustomLink"
import { FooterContainer, FooterFirstRow, FooterOptions, FooterInfoGrid, ContactContainer, Copyright, SocialContainer, SocialRow } from "./Footer.styles"
import Link from "next/link";
import { ArrowLink } from "../Beta/Beta.styles";

export const Footer = ({ showProject = false }) => {
    return (
        <FooterContainer bigPadding={showProject}>
            <FooterFirstRow>
                <ContactContainer>
                    <Link href={'/'}>
                        <Image src={'/assets/shared/desktop/logo-white.svg'} width={202} height={27} alt="Logo" />
                    </Link>
                    <FooterOptions>
                        <CustomLink headerLink={false} route="/">HOME</CustomLink>
                        <CustomLink headerLink={false} route="/stories">STORIES</CustomLink>
                        <CustomLink headerLink={false} route="/features">FEATURES</CustomLink>
                        <CustomLink headerLink={false} route="/pricing">PRICING</CustomLink>
                    </FooterOptions>
                </ContactContainer>
                <ArrowLink onClick={() => window.location.href = 'https://carlosshb.com'}>
                    GET AN INVITE
                    &rarr;
                </ArrowLink>

            </FooterFirstRow>
            <FooterInfoGrid>
                <SocialContainer>
                    <SocialRow>
                        <a href="https://carlosshb.com" target="_blank">
                            <Image src={'/assets/shared/desktop/facebook.svg'} width={24} height={24} alt="Facebook" />
                        </a>
                        <a href="https://carlosshb.com" target="_blank">
                            <Image src={'/assets/shared/desktop/youtube.svg'} width={24} height={24} alt="Youtube" />
                        </a>
                        <a href="https://carlosshb.com" target="_blank">
                            <Image src={'/assets/shared/desktop/twitter.svg'} width={24} height={24} alt="Twitter" />
                        </a>
                        <a href="https://carlosshb.com" target="_blank">
                            <Image src={'/assets/shared/desktop/pinterest.svg'} width={24} height={24} alt="Pinterest" />
                        </a>
                        <a href="https://carlosshb.com" target="_blank">
                            <Image src={'/assets/shared/desktop/instagram.svg'} width={24} height={24} alt="Instagram" />
                        </a>
                    </SocialRow>
                </SocialContainer>
                <Copyright>
                    Copyright {new Date().getFullYear()}. All Rights Reserved
                </Copyright>
            </FooterInfoGrid>
        </FooterContainer>
    )
}