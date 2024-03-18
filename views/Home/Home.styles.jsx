import { ACCENT, ACCENT_VERTICAL } from "@photosnap/theme/colors.theme";
import { DESKTOP_X_PADDING } from "@photosnap/theme/spacing.theme";
import styled from "styled-components";

export const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props => props.background};
    color: ${props => props.background === 'white' ? 'black' : 'white'};
`;

export const HeroInfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px;
    gap: 20px;
    border: 10px solid;
    border-image-slice: 1;
    border-width: 5px;
    border-image-source: ${ACCENT_VERTICAL};
    transform: translateY(-20px);
    border-bottom: unset;
    border-top: unset;
    border-right: unset;
`;

export const HeroTitle = styled.h1`
    font-family: DM Sans;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0;
    text-transform: uppercase;
`;

export const HeroText = styled.p`
    font-family: DM Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 25px;
    letter-spacing: 0;
`;

export const HeroInvite = styled.span`
    font-family: DM Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 0;
    letter-spacing: 2px;
    cursor: pointer;
`;