"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

import BorderButton from "./components/borderButton";

import header_fg from '../../public/images/header_fg.png'
import desk from '../../public/images/desk.png'
import Button from "./components/button";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <main>
      <section className="welcome-section-wrapper">
        <div className="welcome-section">
          <Image
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            src={header_fg} alt="fg-image" className="fg" />

          <div className="welcome-text px-3 sm:pl-20">
            <h1 className="welcome-h1 mb-2 hidden md:block">Welcome<br /> To The Second <br /> Level of the process</h1>
            <h1 className="welcome-h1 mb-2 md:hidden">Welcome To <br /> The Second Level <br />  of the process</h1>
            <h6 className="welcome-h6 mb-7">Congratulations on Passing The Screening Interview</h6>
            <BorderButton label="Get Started" />
          </div>

        </div>
      </section>

      <div className="spacer" />

      <section className="story-section px-20">
        <div className="story-imgs w-1/2 story-imgs-fade relavent">
          <Image className="desk-img" src={desk} alt="desk" />
          <div className="big-border"></div>
          <div className="small-border"></div>
        </div>

        <Image className="mobile-desk-img text-fade-in" src={desk} alt="desk" />

        <div className="story-text w-1/2 text-fade-in">
          <h2 className="story-h2 title mb-8">
            Join a team where innovation is an expectation
          </h2>
          <h6 className="story-h6 mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type specimen book.
          </h6>
          <h6 className="story-h6 mb-8">
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
          </h6>

          <Button textColor="text-white" label="Get Started" bgColor="bg-primary" />
        </div>
      </section>
    </main>
  );
}
