import { FeaturesGrid } from "@photosnap/components/FeaturesGrid/FeaturesGrid";
import { Header } from "@photosnap/components/Header/Header";
import { StoriesGrid } from "@photosnap/components/StoriesGrid/StoriesGrid";
import Image from "next/image";
import { HeroContainer, HeroInfoColumn, HeroInvite, HeroText, HeroTitle } from "./Home.styles";

export const HomeView = () => {
    return (
        <>
            <Header />
            <HeroContainer background="black">
                <HeroInfoColumn>
                    <HeroTitle>Create and share your photo stories. </HeroTitle>
                    <HeroText>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</HeroText>
                    <HeroInvite onClick={() => window.location.href = 'https://carlosshb.com'}>GET AN INVITE &rarr;</HeroInvite>
                </HeroInfoColumn>
                <Image src="/assets/home/desktop/create-and-share.jpg" alt="Create and Share" className="desktop-image" width={830} height={650} />
                <Image src="/assets/home/tablet/create-and-share.jpg" alt="Create and Share" className="tablet-image" width={830} height={650} />
                <Image src="/assets/home/mobile/create-and-share.jpg" alt="Create and Share" className="mobile-image" width={830} height={650} />
            </HeroContainer>
            <HeroContainer background="white">
                <Image src="/assets/home/desktop/beautiful-stories.jpg" alt="Beautiful stories" className="desktop-image" width={830} height={650} />
                <Image src="/assets/home/tablet/beautiful-stories.jpg" alt="Beautiful stories" className="tablet-image" width={830} height={650} />
                <Image src="/assets/home/mobile/beautiful-stories.jpg" alt="Beautiful stories" className="mobile-image" width={830} height={650} />
                <HeroInfoColumn>
                    <HeroTitle>Beautiful stories every time. </HeroTitle>
                    <HeroText>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</HeroText>
                    <HeroInvite onClick={() => window.location.href = 'https://carlosshb.com'}>GET AN INVITE &rarr;</HeroInvite>
                </HeroInfoColumn>
            </HeroContainer>
            <HeroContainer background="white">
                <HeroInfoColumn>
                    <HeroTitle>DESIGNED FOR EVERYONE </HeroTitle>
                    <HeroText>Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. </HeroText>
                    <HeroInvite onClick={() => window.location.href = 'https://carlosshb.com'}>GET AN INVITE &rarr;</HeroInvite>
                </HeroInfoColumn>
                <Image src="/assets/home/desktop/designed-for-everyone.jpg" alt="DESIGNED FOR EVERYONE" className="desktop-image" width={830} height={650} />
                <Image src="/assets/home/tablet/designed-for-everyone.jpg" alt="DESIGNED FOR EVERYONE" className="tablet-image" width={830} height={650} />
                <Image src="/assets/home/mobile/designed-for-everyone.jpg" alt="DESIGNED FOR EVERYONE" className="mobile-image" width={830} height={650} />
            </HeroContainer>
            
            <StoriesGrid />
            <FeaturesGrid />
        </>
    );
};