import Image from "next/image";
import { CustomLink } from "../CustomLink/CustomLink";

import { HeaderContainer, HeaderOptions, MainButton } from './Header.styles';
import Link from "next/link";
import { useState } from "react";

export const Header = ({ isHome }) => {
    const [openMenu, setIsOpen] = useState(false);

    return (
        <>
            <HeaderContainer isHome={isHome}>
                <Image onClick={() => setIsOpen(!openMenu)} id="burger" src='/assets/shared/mobile/menu.svg' width={20} height={20} alt="Menu icon" />
                <Link href={'/'}>
                    <Image src={'/assets/shared/desktop/logo.svg'} width={170} height={16} alt="Logo" />
                </Link>
                <HeaderOptions isOpen={openMenu}>
                    <CustomLink headerLink={true} route="/stories">STORIES</CustomLink>
                    <CustomLink headerLink={true} route="/features">FEATURES</CustomLink>
                    <CustomLink headerLink={true} route="/pricing">PRICING</CustomLink>
                </HeaderOptions>
                <MainButton>Get an invite</MainButton>
            </HeaderContainer>
        </>
        
    );
};