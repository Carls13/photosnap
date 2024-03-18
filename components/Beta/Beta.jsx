import Image from "next/image";
import { BetaContainer, BetaTitle, ArrowLink } from "./Beta.styles";

export const Beta = () => {
    return (
        <BetaContainer>
            <BetaTitle>We’re in beta. <br /> Get your invite today!</BetaTitle>
            <ArrowLink onClick={() => window.location.href = 'https://carlosshb.com'}>
                GET AN INVITE
                &rarr;
            </ArrowLink>
        </BetaContainer>
    );
};