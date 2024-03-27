import { Beta } from "@photosnap/components/Beta/Beta";
import { FeaturesGrid } from "@photosnap/components/FeaturesGrid/FeaturesGrid";
import { Header } from "@photosnap/components/Header/Header";
import { HeroContainer, HeroInfoColumn, HeroInvite, HeroText, HeroTitle } from "../Home/Home.styles";
import Image from "next/image";
import { Footer } from "@photosnap/components/Footer/Footer";

export const FeaturesView = () => {
    return (
        <>
            <Header />
            <HeroContainer reverseMobile background="black">
                <HeroInfoColumn>
                    <HeroTitle>FEATURES </HeroTitle>
                    <HeroText>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories. </HeroText>
                </HeroInfoColumn>
                <Image src="/assets/features/desktop/hero.jpg" alt="FEATURES" className="desktop-image" width={830} height={490} />
                <Image src="/assets/features/tablet/hero.jpg" alt="FEATURES" className="tablet-image" width={830} height={490} />
                <Image src="/assets/features/mobile/hero.jpg" alt="FEATURES" className="mobile-image" width={830} height={490} />
            </HeroContainer>
            <FeaturesGrid extended />
            <Beta/>
            <Footer/>
        </>
    );
};