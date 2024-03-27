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
                <Link href={'/'}>
                    <Image src={'/assets/shared/desktop/logo.svg'} width={170} height={16} alt="Logo" />
                </Link>
                <HeaderOptions isOpen={openMenu}>
                    <CustomLink headerLink={true} route="/stories">STORIES</CustomLink>
                    <CustomLink headerLink={true} route="/features">FEATURES</CustomLink>
                    <CustomLink headerLink={true} route="/pricing">PRICING</CustomLink>
                    <hr />
                    <MainButton>Get an invite</MainButton>
                </HeaderOptions>
                <MainButton>Get an invite</MainButton>
                <Image onClick={() => setIsOpen(!openMenu)} id="burger" src={openMenu ? '/assets/shared/mobile/close.svg' : '/assets/shared/mobile/menu.svg'} width={openMenu ? 16 : 20} height={openMenu ? 15 : 6} alt="Menu icon" />
            </HeaderContainer>
        </>
        
    );
};