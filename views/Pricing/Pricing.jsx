import { Beta } from "@photosnap/components/Beta/Beta";
import { Header } from "@photosnap/components/Header/Header";
import { HeroContainer, HeroInfoColumn, HeroText, HeroTitle } from "../Home/Home.styles";
import Image from "next/image";
import { PricesTable } from "@photosnap/components/PricesTable/PricesTable";
import { Plans } from "@photosnap/components/Plans/Plans";
import { Footer } from "@photosnap/components/Footer/Footer";

export const PricingView = () => {
    return (
        <>
            <Header />
            <HeroContainer reverseMobile background="black">
                <HeroInfoColumn>
                    <HeroTitle>PRICING </HeroTitle>
                    <HeroText>Create your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</HeroText>
                </HeroInfoColumn>
                <Image src="/assets/pricing/desktop/hero.jpg" alt="pricing" className="desktop-image" width={830} height={490} />
                <Image src="/assets/pricing/tablet/hero.jpg" alt="pricing" className="tablet-image" width={830} height={490} />
                <Image src="/assets/pricing/mobile/hero.jpg" alt="pricing" className="mobile-image" width={830} height={490} />
            </HeroContainer>
            <Plans />
            <PricesTable />
            <Beta/>
            <Footer/>
        </>
    );
};