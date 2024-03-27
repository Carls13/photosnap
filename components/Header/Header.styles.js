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

        #burger {
            display: flex;
        }

        button {
            display: none;
        }
    }
`;

export const HeaderOptions = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;

    @media screen and (max-width: 600px) {
        ${(props) => !props.isOpen ? css`display: none;` : ''};
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 70px;
        left: 0;
        background: ${WHITE};
        width: 100vw;
        padding: 48px 0;

        span {
            width: 100%;
            font-family: DM Sans;
            font-size: 15px;
            font-style: normal;
            font-weight: 700;
            line-height: 18px;
            letter-spacing: 2px;
            text-align: center;
        }

        button, hr {
            ${(props) => !props.isOpen ? css`display: none;` : css`display: block;`};
            width: 80%;
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