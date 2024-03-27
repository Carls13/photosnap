import { BLACK, LIGHT_GRAY, WHITE, ACCENT } from "@photosnap/theme/colors.theme";
import { DESKTOP_X_PADDING, MOBILE_X_PADDING, TABLET_X_PADDING } from "@photosnap/theme/spacing.theme";
import styled, { css } from "styled-components";

export const PricingContainer = styled.div`
    display: flex;
    margin: 30px ${DESKTOP_X_PADDING};
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1200px) {
        margin: 30px ${TABLET_X_PADDING};
    }

    @media screen and (max-width: 1200px) {
      margin: 30px ${MOBILE_X_PADDING};
    }

    .advanced-switch {
        cursor: pointer;
        text-align: left;
        display: flex;
        gap: 10px;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.30000001192092896px;
        margin-bottom: 20px;

        span {
            font-family: DM Sans;
            color: #666666;
        }

        .active-option {
            color: ${BLACK};
            font-weight: bold;
        }
    }
    
      .with-margin-bottom { 
        margin-bottom: 37px;
      }
      
      .advanced-options-select {
        height: 30px;
        outline: none;
        width: auto;
      }
      
      .environment-container {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 17px;
      }
      
      .options-container {
        display: flex;
        width: 100%;
        gap: 5px;
      }
      
      .options-container .is-environment-selected {
        border: 1px solid ${BLACK};
        color:${BLACK};
      }
      
      .switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 20px;
      }
      
      .switch input { 
        opacity: 0;
        width: 0;
        height: 0;
      }
      
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
      }
      
      .slider:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 3px;
        bottom: 2px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
      }
      
      input:checked + .slider {
        background-color: ${BLACK};
      }
      
      input:focus + .slider {
        box-shadow: 0 0 1px ${BLACK};
      }
      
      input:checked + .slider:before {
        -webkit-transform: translateX(18px);
        -ms-transform: translateX(18px);
        transform: translateX(18px);
      }
      
      /* Rounded sliders */
      .slider.round {
        border-radius: 16px;
      }
      
      .slider.round:before {
        border-radius: 50%;
      }
`;

export const PlansContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    align-items: center;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`;

export const PlanCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    height: ${props => props.pro ? '470px' : '407px'};
    background-color: ${props => props.pro ? BLACK : LIGHT_GRAY};
    color: ${props => props.pro ? WHITE : BLACK};
    ${props => props.pro ? css`
        border: 10px solid;
        border-image-slice: 1;
        border-width: 5px;
        border-image-source: ${ACCENT};
        border-left: unset;
        border-bottom: unset;
        border-right: unset;
    ` : ''}

    button {
        margin-top: 30px;
    }
`;

export const PlanTitle = styled.h6`
    font-family: DM Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0;
`;

export const PlanDescription = styled.p`
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0;
`;

export const PlanPrice = styled.h6`
    font-family: DM Sans;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0;
    margin-top: 20px;
`;