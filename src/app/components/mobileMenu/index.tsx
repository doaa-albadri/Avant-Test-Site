"use client"

import { useEffect, useState } from 'react';

import Image from 'next/image';

import burger_menu from '../../../../public/images/burger_menu.png'
import dark_burger_menu from '../../../../public/images/burger_menu_dark.png'
import logo from '../../../../public/images/logo.png'
import colored_logo from '../../../../public/images/colored_logo.png'

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu: () => void = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const menu_header: HTMLElement | null = document.querySelector('.mobile-header') as HTMLElement;
            const logo: HTMLElement | null = document.getElementById('mobile-logo') as HTMLElement;
            const colored_logo: HTMLElement | null = document.getElementById('mobile-colored-logo') as HTMLElement;
            const light_menu: HTMLElement | null = document.getElementById('menu-light') as HTMLElement;
            const dark_menu: HTMLElement | null = document.getElementById('menu-dark') as HTMLElement;

            if (window.scrollY > 491) {
                menu_header.style.backgroundColor = '#ffffff';
                menu_header.style.backgroundImage = 'none';
                logo.style.display = 'none';
                colored_logo.style.display = 'block';
                light_menu.style.display = 'none';
                dark_menu.style.display = 'block';
            } else {
                menu_header.style.backgroundColor = '#010521';
                menu_header.style.backgroundImage = 'url(/_next/static/media/header_bg.d929b4df.png)';
                logo.style.display = 'block';
                colored_logo.style.display = 'none';
                light_menu.style.display = 'block';
                dark_menu.style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='mobile-header w-full flex justify-between items-center p-3'>
            <div className="mobile-menu  w-full pl-5 flex justify-between items-center">
                <button className="burger-menu" onClick={toggleMenu}>
                    <Image id='menu-light' src={burger_menu} alt='menu-button' />
                    <Image style={{ display: 'none' }} id='menu-dark' src={dark_burger_menu} alt='menu-button' />
                </button>
                {isOpen && (
                    <div className="menu-items flex flex-col gap-5 ml-5 w-full">
                        <ul className="">
                            <li>
                                <a href="#investors">Investors</a>
                            </li>
                            <li>
                                <a href="#ourstory">Our Story</a>
                            </li>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                            <li>
                                <a href="#signin">Investors Sign In</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            <a href='#home'>
                <Image id='mobile-logo' src={logo} alt='menu-button' className='mr-5' />
                <Image style={{ display: 'none' }} id='mobile-colored-logo' src={colored_logo} alt='menu-button' className='mr-5' />
            </a>


        </div>




    );
};

export default MobileMenu;
