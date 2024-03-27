import { BLACK, LIGHT_GRAY, WHITE } from "@photosnap/theme/colors.theme";
import styled from "styled-components";
import { DESKTOP_X_PADDING, TABLET_X_PADDING, MOBILE_X_PADDING } from "@photosnap/theme/spacing.theme";

export const FooterContainer = styled.footer`
    background-color: ${BLACK};
    padding: ${(props) => {
        if (props.bigPadding) return`144px ${DESKTOP_X_PADDING} 72px ${DESKTOP_X_PADDING}`;
        
        return `72px ${DESKTOP_X_PADDING}`;
    }};
    display: flex;
    flex-direction: column;
    gap: 100px;
    position: relative;
   

    @media screen and (max-width: 1200px) {
        padding: ${(props) => {
            if (props.bigPadding) return `144px ${TABLET_X_PADDING} 72px ${TABLET_X_PADDING}`;
            
            return `72px ${TABLET_X_PADDING}`;
        }};
    }
    
    @media screen and (max-width: 600px) {
        gap: 30px;
        padding: ${(props) => {
            if (props.bigPadding) return `144px ${MOBILE_X_PADDING} 72px ${MOBILE_X_PADDING}`;
            
            return `72px ${MOBILE_X_PADDING}`;
        }};
    }
`;

export const FooterFirstRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 50px;
    }
`;

export const FooterOptions = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    color: ${WHITE};

    @media screen and (max-width: 600px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const FooterInfoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-gap: 25px;
    }
`;

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 600px) {
        text-align: center;
    }
`;

export const Info = styled.span`
    color: #FFF;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
`; 

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: 600px) {
       justify-content: center;
       align-items: center;
    }
`;

export const SocialRow = styled.div`
    display: flex;
    gap: 10px;
`;

export const Copyright = styled.div`
    color: ${LIGHT_GRAY};
    display: flex;
    justify-content: flex-end;
    font-family: DM Sans;

    @media screen and (max-width: 600px) {
        justify-content: center;
    }
`;