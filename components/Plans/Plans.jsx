import { useState } from "react"
import { MainButton } from "../Header/Header.styles";
import { PlanCard, PlanDescription, PlanPrice, PlanTitle, PlansContainer, PricingContainer } from "./Plans.styles";

export const Plans = () => {
    const [monthly, setMonthly] = useState(true);

    return (
        <PricingContainer>
            <div className={`advanced-switch`}>
                <span className={monthly ? 'active-option' : ''}>Monthly</span>
                <label class="switch">
                    <input type="checkbox" checked={!monthly} /> 
                    <span class="slider round" onClick={() => setMonthly(!monthly)}></span>
                </label>
                <span className={!monthly ? 'active-option' : ''}>Yearly</span>
            </div>
            <PlansContainer>
                <PlanCard>
                    <PlanTitle>Basic</PlanTitle>
                    <PlanDescription>Includes basic usage of our platform. Recommended for new and aspiring photographers.</PlanDescription>
                    <PlanPrice>$19{!monthly && 0}.00</PlanPrice>
                    <PlanDescription>per {monthly ? 'month' : 'year'}</PlanDescription>
                    <MainButton>PICK PLAN</MainButton>
                </PlanCard>
                <PlanCard pro>
                    <PlanTitle>Pro</PlanTitle>
                    <PlanDescription>More advanced features available. Recommended for photography veterans and professionals.</PlanDescription>
                    <PlanPrice>$39{!monthly && 0}.00</PlanPrice>
                    <PlanDescription>per {monthly ? 'month' : 'year'}</PlanDescription>
                    <MainButton>PICK PLAN</MainButton>
                </PlanCard>
                <PlanCard>
                    <PlanTitle>Business</PlanTitle>
                    <PlanDescription>Additional features available such as more detailed metrics. Recommended for business owners.</PlanDescription>
                    <PlanPrice>$99{!monthly && 0}.00</PlanPrice>
                    <PlanDescription>per {monthly ? 'month' : 'year'}</PlanDescription>
                    <MainButton>PICK PLAN</MainButton>
                </PlanCard>
            </PlansContainer>
        </PricingContainer>
    );
};