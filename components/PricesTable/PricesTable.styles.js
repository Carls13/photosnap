import { BLACK } from "@photosnap/theme/colors.theme";
import { DESKTOP_X_PADDING, MOBILE_X_PADDING, TABLET_X_PADDING } from "@photosnap/theme/spacing.theme";
import styled from "styled-components";

export const TableContainer = styled.div`
    padding: 50px ${DESKTOP_X_PADDING};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;

    @media screen and (max-width: 1200px) {
        padding: 50px ${TABLET_X_PADDING};
    }

    @media screen and (max-width: 600px) {
        margin: 30px ${MOBILE_X_PADDING};
        max-width: 300px;
        overflow-x: scroll;
    }
`;

export const TableTitle = styled.h2`
    font-family: DM Sans;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0;
    text-transform: uppercase;
    text-align: center;
`;

export const Table = styled.table`
    border: unset;
    font-family: DM Sans;
    width: 80%;
    margin: 20px 10%; 
`;

export const TableHead = styled.thead`
    th {
        padding: 20px;
        border-bottom: 2px solid ${BLACK};
    }

    th:nth-child(1) {
        text-align: left;
    }
`;

export const TableBody = styled.tbody`
    th {
        padding: 20px;
    }

    th:nth-child(1) {
        text-align: left;
    }
`;