import { WHITE } from "@photosnap/theme/colors.theme";
import { DESKTOP_X_PADDING, TABLET_X_PADDING } from "@photosnap/theme/spacing.theme";
import styled from "styled-components";

export const BetaContainer = styled.div`
    background-image: url('/assets/shared/desktop/bg-beta.jpg');
    height: 240px;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${DESKTOP_X_PADDING};
    gap: 100px;

    @media screen and (max-width: 1200px) {
        background-image: url('/assets/shared/tablet/bg-beta.jpg');
            flex-direction: column;
            padding: 10px ${TABLET_X_PADDING};
            gap: 10px;
        }
    }
`;

export const BetaTitle = styled.h2`
    color: ${WHITE};

    font-family: DM Sans;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 1.429px;

    @media screen and (max-width: 600px) {
        font-size: 32px;
        text-align: center;
    }
`;

export const ArrowLink = styled.span`
    color: ${WHITE};
    cursor: pointer;
    display: flex;
    font-family: DM Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 2px;

    @media screen and (max-width: 600px) {
        font-size: 12px;
        text-align: center;
    }
`;