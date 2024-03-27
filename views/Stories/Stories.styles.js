import { WHITE } from "@photosnap/theme/colors.theme";
import styled from "styled-components";

export const StoriesHeroContainer = styled.div`
    display: flex;
    align-items: center;
    background-image: url('/assets/stories/desktop/moon-of-appalacia.jpg');
    background-size: cover;
    height: 90vh;

    @media screen and (max-width: 1200px) {
        background-image: url('/assets/stories/tablet/moon-of-appalacia.jpg');
        height: unset;
    }
`;

export const StoriesHeroInfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px;
    gap: 20px;
    width: 30%;
    color: ${WHITE};

    @media screen and (max-width: 600px) {
        width: 100%;
        padding: 80px 20px;
    }
`;

export const StoriesHeroTitle = styled.h1`
    font-family: DM Sans;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0;
    text-transform: uppercase;
`;

export const StoriesHeroText = styled.p`
    font-family: DM Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 25px;
    letter-spacing: 0;
`;

export const StoriesHeroInvite = styled.span`
    font-family: DM Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 2px;
    cursor: pointer;
`;

export const StoriesHeroInfo = styled.span`
    font-family: DM Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 2px;
`;