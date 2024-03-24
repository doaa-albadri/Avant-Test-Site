"use client"
import React, { useEffect } from 'react'
import Image from "next/image";

import Button from '../button'

import logo from '../../../../public/images/logo.png'
import colored_logo from '../../../../public/images/colored_logo.png'

export default function Navbar() {
    useEffect(() => {
        const handleScroll = () => {
            const navbar: HTMLElement | null = document.querySelector('.navbar') as HTMLElement;
            const showWhiteBgButton: HTMLElement | null = document.getElementById('show-white-bg') as HTMLElement;
            const showPrimaryBgButton: HTMLElement | null = document.getElementById('show-primary-bg') as HTMLElement;
            const logo: HTMLElement | null = document.getElementById('logo') as HTMLElement;
            const colored_logo: HTMLElement | null = document.getElementById('colored_logo') as HTMLElement;

            if (window.scrollY > 900) {
                navbar.classList.add('scrolled-past-900');
                showWhiteBgButton.style.display = 'none';
                showPrimaryBgButton.style.display = 'block';
                logo.style.display = 'none';
                colored_logo.style.display = 'block';
            } else if (window.scrollY > 140) {
                navbar.classList.add('scrolled');
                navbar.classList.remove('scrolled-past-900');
                showWhiteBgButton.style.display = 'block';
                showPrimaryBgButton.style.display = 'none';
                logo.style.display = 'block';
                colored_logo.style.display = 'none';
            } else {
                navbar.classList.remove('scrolled');
                navbar.classList.remove('scrolled-past-900');
                showWhiteBgButton.style.display = 'block';
                showPrimaryBgButton.style.display = 'none';
                logo.style.display = 'block';
                colored_logo.style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ position: 'sticky', top: '0', zIndex: '1' }} className="navbar text-white bg-secondary font-l pt-5">
            <nav
                className="flex items-center justify-between px-20">
                <a href='#home'>
                    <div className="flex items-center gap-1 ">
                        <Image id='logo' src={logo} alt="logo" />
                        <Image style={{ display: 'none' }} id='colored_logo' src={colored_logo} alt="logo" />
                        <h5>Nexus Creative</h5>
                    </div>
                </a>


                <div className="flex gap-10">
                    <ul className="flex items-center gap-10">
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
                    </ul>
                    <Button id="show-white-bg" bgColor="bg-white" textColor="text-primary" label="Inestor Sign In" />
                    <Button display='hidden' id="show-primary-bg" bgColor="bg-primary" textColor="text-white" label="Inestor Sign In" />

                </div>
            </nav>
        </div>
    )
}
