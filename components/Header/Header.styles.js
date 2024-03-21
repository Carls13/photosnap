import { BLACK, LIGHT_GRAY, WHITE } from "@photosnap/theme/colors.theme";
import { DESKTOP_X_PADDING, MOBILE_X_PADDING, TABLET_X_PADDING } from "@photosnap/theme/spacing.theme";
import styled from "styled-components";
import css from "styled-jsx/css";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px ${DESKTOP_X_PADDING};
    background-color: ${WHITE};
    border-bottom: 1px solid ${WHITE};

    #burger {
        display: none;
    }

    #cart-icon {
        cursor: pointer;
    }

    .toggle-menu-icon {
        display: none;
        position: relative;
        z-index: 10;

        @media screen and (max-width: 600px) {
            display: flex;
        }
    }

    @media screen and (max-width: 1200px) {
        padding: 25px ${TABLET_X_PADDING};
    }
    
    @media screen and (max-width: 600px) {
        padding: 25px ${MOBILE_X_PADDING};
    }
`;

export const HeaderOptions = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;

    @media screen and (max-width: 600px) {
        ${(props) => !props.isOpen ? css`display: none;` : ''};
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        top: 96px;
        left: 0;
        background: ${BLACK};
        width: 100vw;
        padding: 48px 24px;

        span {
            width: 100%;
            font-family: Manrope;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 2px;
        }
    }
`;

export const MainButton = styled.button`
    width: 158px;
    height: 40px;
    flex-shrink: 0;
    background: ${(props) => props.transparent ? 'transparent' : BLACK};
    text-align: center;
    color: ${WHITE};
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    outline: none;
    border: 1px solid ${WHITE};

    &:hover {
        background: ${LIGHT_GRAY};
        color: ${BLACK}
    }
`;