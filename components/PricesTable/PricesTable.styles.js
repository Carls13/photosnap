import { BLACK } from "@photosnap/theme/colors.theme";
import { DESKTOP_X_PADDING } from "@photosnap/theme/spacing.theme";
import styled from "styled-components";

export const TableContainer = styled.div`
    padding: 50px ${DESKTOP_X_PADDING};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
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
`;

export const TableBody = styled.tbody`
    th {
        padding: 20px;
    }
`;