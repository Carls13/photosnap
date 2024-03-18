import { Beta } from "@photosnap/components/Beta/Beta";
import { Header } from "@photosnap/components/Header/Header";
import { StoriesGrid } from "@photosnap/components/StoriesGrid/StoriesGrid";

export const StoriesView = () => {
    return (
        <>
            <Header />
            <StoriesGrid extended />
            <Beta/>
        </>
    );
};