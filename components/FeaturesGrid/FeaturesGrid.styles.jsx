import { BLACK } from "@photosnap/theme/colors.theme";
import { DESKTOP_X_PADDING, MOBILE_X_PADDING, TABLET_X_PADDING } from "@photosnap/theme/spacing.theme";
import styled from "styled-components";

export const FeaturesGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    margin: 100px ${DESKTOP_X_PADDING};
    text-align: center;

    @media screen and (max-width: 1200px) {
        margin: 100px ${MOBILE_X_PADDING};
        grid-template-columns: 1fr;
    }
`;

export const FeatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const FeatureTitle = styled.h6`
    font-family: DM Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0;
    color: ${BLACK};
`;

export const FeatureText = styled.p`
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0;
    color: ${BLACK};
`;