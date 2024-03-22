"use client"
import React, { useEffect } from 'react'
import Image from "next/image";

import Button from '../button'

import logo from '../../../../public/images/logo.png'
import colored_logo from '../../../../public/images/colored_logo.png'

export default function Navbar() {
    useEffect(() => {
        const handleScroll = () => {
            const navbar: any = document.querySelector('.navbar');
            const showWhiteBgButton: any = document.getElementById('show-white-bg');
            const showPrimaryBgButton: any = document.getElementById('show-primary-bg');
            const logo: any = document.getElementById('logo');
            const colored_logo: any = document.getElementById('colored_logo');

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
        <div style={{ position: 'sticky', top: '0', zIndex: '1' }} className="navbar pt-5">
            <nav
                className="flex items-center justify-between px-20">
                <div className="flex items-center gap-1 ">
                    <Image id='logo' src={logo} alt="logo" />
                    <Image style={{ display: 'none' }} id='colored_logo' src={colored_logo} alt="logo" />
                    <h5>Nexus Creative</h5>
                </div>

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
                    <Button id="show-primary-bg" bgColor="bg-primary" textColor="text-white" label="Inestor Sign In" />

                </div>
            </nav>
        </div>
    )
}
