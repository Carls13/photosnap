import { FeaturesGrid } from "@photosnap/components/FeaturesGrid/FeaturesGrid";
import { Header } from "@photosnap/components/Header/Header";
import { StoriesGrid } from "@photosnap/components/StoriesGrid/StoriesGrid";

export const HomeView = () => {
    return (
        <>
            <Header />
            <StoriesGrid />
            <FeaturesGrid />
        </>
    );
};