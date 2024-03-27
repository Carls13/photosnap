import { BLACK, LIGHT_GRAY, WHITE } from "@photosnap/theme/colors.theme";
import styled, { css } from "styled-components";

const activeStyle = css`
    color: ${LIGHT_GRAY}!important;
`;

export const Option = styled.span`
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px; /* 100% */
    letter-spacing: 2px;
    cursor: pointer;
    color: ${props => props.headerLink ? BLACK : WHITE};
        
    a {
        color: ${props => props.headerLink ? BLACK : WHITE};
        ${props => props.active ? activeStyle : null}
        text-decoration: none;
        &:hover {
            ${activeStyle}
        }
    }

    ${props => props.active ? activeStyle : null}

    @media screen and (max-width: 600px) {
        background: none;
        backdrop-filter: none;
    }
`;