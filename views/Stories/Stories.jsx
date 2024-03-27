import { Beta } from "@photosnap/components/Beta/Beta";
import { Header } from "@photosnap/components/Header/Header";
import { StoriesGrid } from "@photosnap/components/StoriesGrid/StoriesGrid";
import { StoriesHeroContainer, StoriesHeroInfo, StoriesHeroInfoColumn, StoriesHeroInvite, StoriesHeroText, StoriesHeroTitle } from "./Stories.styles";
import { Footer } from "@photosnap/components/Footer/Footer";

export const StoriesView = () => {
    return (
        <>
            <Header />
            <StoriesHeroContainer>
                <StoriesHeroInfoColumn>
                    <StoriesHeroInfo>LAST MONTH’S FEATURED STORY</StoriesHeroInfo>
                    <StoriesHeroTitle>DESIGNED FOR EVERYONE </StoriesHeroTitle>
                    <StoriesHeroText>March 2nd 2020  <b>by John Appleseed</b></StoriesHeroText>
                    <StoriesHeroText>Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. </StoriesHeroText>
                    <StoriesHeroInvite onClick={() => window.location.href = 'https://carlosshb.com'}>GET AN INVITE &rarr;</StoriesHeroInvite>
                </StoriesHeroInfoColumn>
            </StoriesHeroContainer>
            <StoriesGrid extended />
            <Beta/>
            <Footer/>
        </>
    );
};