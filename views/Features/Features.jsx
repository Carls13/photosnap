import { Beta } from "@photosnap/components/Beta/Beta";
import { FeaturesGrid } from "@photosnap/components/FeaturesGrid/FeaturesGrid";
import { Header } from "@photosnap/components/Header/Header";

export const FeaturesView = () => {
    return (
        <>
            <Header />
            <FeaturesGrid extended />
            <Beta/>
        </>
    );
};