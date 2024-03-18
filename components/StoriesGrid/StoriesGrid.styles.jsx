import { ACCENT, WHITE } from "@photosnap/theme/colors.theme";
import { DESKTOP_X_PADDING } from "@photosnap/theme/spacing.theme";
import styled, { css } from "styled-components";

export const StoriesGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 0;
`;

export const StoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;

    background-image: url('${props => props.desktopImage}');
    background-size: cover;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    cursor: pointer;

    hr {
        margin: 20px 0;
    }

    &:hover {
        border: 10px solid;
        border-image-slice: 1;
        border-width: 5px;
        border-image-source: ${ACCENT};
        transform: translateY(-20px);
        border-left: unset;
        border-top: unset;
        border-right: unset;
    }
`;

export const StoryTitle = styled.h6`
    font-family: DM Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0;
    color: ${WHITE};
    ${props => props.upperSpace ? css`margin-top: auto;` : ''}
`;

export const StoryAuthor = styled.p`
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0;
    color: ${WHITE};
    ${props => props.date ? css`margin-top: auto;` : ''}
`;

export const StoryLinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer; 
    font-family: DM Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0;
    color: ${WHITE}; 
`;

export const Arrow = styled.span`
    
`;