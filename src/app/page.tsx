"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

import BorderButton from "./components/borderButton";
import Button from "./components/button";
import PlainCard from "./components/plainCard";
import ImageCard from "./components/imgCard";
import BgImgCard from "./components/bgImgCard";

import header_fg from '../../public/images/header_fg.png'
import desk from '../../public/images/desk.png'
import office from '../../public/images/office.png'
import paypal from '../../public/images/paypal.png'
import stripe from '../../public/images/stripe.png'
import quotes from '../../public/images/quotes.png'
import stars from '../../public/images/stars.png'
import avatar from '../../public/images/avatar.png'
import arrow_left from '../../public/images/arrow_left.png'
import arrow_right from '../../public/images/arrow_right.png'
import full_logo from '../../public/images/full_logo.png'
import logo from '../../public/images/logo.png'
import nexus_creative from '../../public/images/nexus_creative.png'




export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  const cards = [
    {
      cardBorder: "",
      title: "The First Card",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      cardBg: "bg-primary",
      textColor: "text-white",
      btnBg: "bg-white",
      btnTextColor: "text-textDark",
      label: "Learn More"
    },
    {
      cardBorder: "border-gradient",
      title: "Yet another one",
      text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
      cardBg: "bg-white",
      textColor: "text-textDark",
      btnBg: "bg-primary",
      btnTextColor: "text-white",
      label: "Learn More"
    },
    {
      cardBorder: "border-gradient",
      title: "We really like these",
      text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
      cardBg: "bg-white",
      textColor: "text-textDark",
      btnBg: "bg-primary",
      btnTextColor: "text-white",
      label: "Learn More"
    }
  ]

  const imgCards = [
    { title: 'Increase Value for Startup', text: 'Abusus enim multitudine hominum quam tran quillis in rebus diutius rexit, ex agrestibus habi itudine hominum' },
    { title: 'Increase Value for Startup', text: 'Abusus enim multitudine hominum quam tran quillis in rebus diutius rexit, ex agrestibus habi itudine hominum' },
    { title: 'Increase Value for Startup', text: 'Abusus enim multitudine hominum quam tran quillis in rebus diutius rexit, ex agrestibus habi itudine hominum' },
    { title: 'Increase Value for Startup', text: 'Abusus enim multitudine hominum quam tran quillis in rebus diutius rexit, ex agrestibus habi itudine hominum' }
  ]

  const stats = [
    '10K',
    '5K',
    '10K',
    '6K',

  ]

  const payment_methods = [
    stripe,
    paypal,
    stripe,
    paypal,
    stripe,
    paypal,
  ]


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

      <div style={{ height: '12rem' }} className="spacer" />

      <section className="story-section px-20 mb-10">
        <div className="story-imgs w-1/2 story-imgs-fade relavent">
          <Image className="desk-img" src={desk} alt="desk" />
          <div className="big-border"></div>
          <div className="small-border"></div>
        </div>

        <Image className="mobile-desk-img text-fade-in" src={desk} alt="desk" />

        <div className="story-text w-1/2 text-fade-in">
          <h2 className="story-h2 title mb-8 text-textDark">
            Join a team where innovation is an expectation
          </h2>
          <h6 className="h6-text mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type specimen book.
          </h6>
          <h6 className="h6-text mb-8">
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
          </h6>

          <Button textColor="text-white" label="Get Started" bgColor="bg-primary" />
        </div>
      </section>


      <section className="mt-20 pb-20 slide-right">
        <div style={{ height: '15rem' }} className="spacer" />

        <h2 className="title text-textDark text-center mb-20">
          Cards are an essential<br />Element of a clear User Interface
        </h2>
        <div className="cards-div hide-scroll flex flex-row gap-5 px-5 md:px-20 ">
          {cards.map((card, index) => {
            return (
              <div key={index}>
                <PlainCard title={card.title}
                  text={card.text}
                  cardBg={card.cardBg}
                  textColor={card.textColor}
                  btnBg={card.btnBg}
                  btnTextColor={card.btnTextColor}
                  label={card.label}
                  cardBorder={card.cardBorder}
                />
              </div>

            )
          })}
        </div>

      </section>

      <div style={{ height: '10rem' }} className="spacer" />

      <section className="startup-section bg-primary pt-10 pb-0 px-5 lg:px-20">
        <div className="slide-left">
          <h2 className="title text-white">Get started on your startup<br />journey with the right investments</h2>

          <div className="flex flex-row gap-0 mt-20">
            <h1 className="rotate-90 hidden lg:block flex-none">
              Nexus Creative
            </h1>
            <div className="img-cards hide-scroll grid grid-cols-2 gap-5 grow">
              {imgCards.map((card, index) => {
                return (
                  <div key={index}>
                    <ImageCard title={card.title} text={card.text} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: '7rem' }} className="spacer" />

      <section className="stats-section text-fade-in slide-right flex justify-evenly flex-wrap mt-20 gap-5 lg:gap-20">

        {stats.map((item, index) => {
          return (
            <div className="stat-item" key={index}>
              <h4 className="text-textDark">{item}</h4>
              <span className="text-textDark">Launched Startups <br />Investment</span>
            </div>
          )
        })}

      </section>

      <div style={{ height: '7rem' }} className="spacer" />

      <section className="discover-section pb-0 py-10 px-0 md:px-20">
        <div className="grid lg:grid-cols-2 mb-5 text-fade-in">
          <h2 className="title text-textDark text-center lg:text-left">
            Discover the Rising<br />Stars We've Backed
          </h2>

          <div className="flex justify-center px-5 md:px-0 lg:justify-end">
            <h6 className="text-textDark w-full lg:w-3/5 pt-4 text-center lg:text-left h6-text">
              Abusus enim multitudine hominum quam tran quillis in rebus diutius rexiti ex agrestibus habi itudine homnum busus enim multitudine hominum quam tran quillisin re bus diutius rexit ex agres
            </h6>
          </div>
        </div>

        <div className="story-imgs-fade overflow-hidden mt-20 md:mt-0">
          <Image src={office} alt="office" className="scale-150 md:scale-100" />
        </div>
      </section>

      <section className="payment-section text-fade-in flex items-center justify-center flex-wrap gap-5 px-2 md:px-20 mt-5 gap-5 lg:gap-20">
        {payment_methods.map((item, index) => {
          return (
            <div key={index}>
              <Image src={item} alt="payment_method" className="opacity-50 hover:opacity-100" />
            </div>
          )
        })}


      </section>

      <div style={{ height: '4rem' }} className="spacer" />


      <section className="investors-section px-0 md:px-20 mt-20 slide-right">
        <div className="grid lg:grid-cols-2 mb-10 text-fade-in">
          <h2 className="title text-textDark text-center lg:text-left">
            What our Investors <br /> are saying
          </h2>

          <div className="flex justify-center px-5 md:px-0 lg:justify-end">
            <h6 className="text-textDark w-full lg:w-3/5 pt-4 text-center lg:text-left h6-text">
              Abusus enim multitudine hominum quam tran quillis in rebus diutius rexiti ex agrestibus habi itudine homnum bus diutius rexit ex agres            </h6>
          </div>
        </div>

        <div className="flex justify-between px-10 md:px-20">
          <div className="flex flex-col md:flex-row items-start gap-0 md:gap-5">
            <Image src={quotes} alt="qoutes" />
            <div className="flex items-center gap-3">
              <Image src={stars} alt="stars" className="mt-4" />
              <h6 className="small-bold mt-5 block md:hidden">5.0</h6>
            </div>
            <h6 className="small-bold mt-4 hidden md:block">5.0</h6>
          </div>

          <div className="flex items-start md:items-center mt-4 md:mt-0 gap-5">
            <div className="bg-primary p-3 rounded-full">
              <Image src={arrow_left} alt="arrow-left" />
            </div>

            <div className="bg-secondary p-3 rounded-full">
              <Image src={arrow_right} alt="arrow-right" />
            </div>
          </div>
        </div>

        <div className="text-textDark px-10 mb-10 md:px-20">
          <h5 className="px-0 md:px-20  quote-text">
            “With <span className="text-primary quote-text">Nexus Creative</span> the results are very satisfying. Wrapped with Hight quality and innovative design that makes a surge of visitors on my Start Up”
          </h5>

          <div className="flex justify-start items-center gap-5 px-10 md:px-20 mt-10">
            <Image src={avatar} alt="avatar" />

            <div className="flex flex-col gap-1">
              <span className="small-bold">
                Moss Smith
              </span>

              <span className="">
                Business Manager
              </span>
            </div>




          </div>
        </div>
      </section>

      <div style={{ height: '4rem' }} className="spacer" />

      <section>
        <div>
          <h2 className="title text-textDark text-center">
            Join Our Network<br />of Forward-Thinking Investors
          </h2>
          <div className="flex justify-center flex-wrap md:flex-nowrap gap-5 px-0 lg:px-20 mt-20">
            <div className="slide-right">
              <BgImgCard title='Investor Startups'
                text='Nexus Creative provides exclusive investment forindividuals and institutions looking to diversify their . By our network, you gain access to a curated selection of high-potential startups seeking funding.'
                cardBg='bg-secondary'
                textColor='text-white'
                btnBg='bg-white'
                btnTextColor='text-primary'
                label='Learn More'
                bgImg="object-nested-bg"
              />

            </div>

            <div className="slide-left">
              <BgImgCard title='Business Scaling'
                text='Nexus Creative provides exclusive investment forindividuals and institutions looking to diversify their . By our network, you gain access to a curated selection of high-potential startups seeking funding.'
                cardBg='bg-secondary'
                textColor='text-white'
                btnBg='bg-white'
                btnTextColor='text-primary'
                label='Learn More'
                bgImg="object-bg"
              />
            </div>


          </div>


        </div>
      </section>

      <div style={{ height: '4rem' }} className="spacer" />

      <section className="contact-section mt-20 lg:mt-0 px-5 lg:px-20">
        <div className="bg-secondaryLight py-10 flex flex-col gap-5 items-center justify-center">
          <h3 className="contact-title text-white text-center mb-5">
            Let’s Get in Touch
          </h3>

          <div className="flex flex-col gap-5 md:items-start justify-center w-9/12">
            <div className="flex flex-wrap md:flex-nowrap gap-5 items-center justify-between w-full">
              <input className="w-full" placeholder="Full Name" />
              <input className="w-full" placeholder="Email Address" />
            </div>
            <select className="w-full">
              <option value="" disabled selected>What are you intersted in?</option>
            </select>
            <textarea placeholder="Message" rows={6} className="w-full" />
            <Button textColor="text-secondaryLight" label="SEND" bgColor="bg-white" px="px-10" />
          </div>
        </div>
      </section>

      <footer className="footer hidden md:flex bg-secondary px-5 lg:px-20 justify-start pb-10">

        <div className="flex flex-col gap-2">
          <Image src={full_logo} alt="logo" />

          <span className="text-white extra-small-text w-1/2">
            Non ergo erunt homines deliciis diffluentesendi si quando de amicitia, quam nec usu ntioneha rum fidem atque hominu
          </span>

          <span className="text-white extra-small-text">
            © 2024 Nexus Creative All rights reserved
          </span>


        </div>

        <div style={{ columnGap: '6rem' }} className="flex">

          <div className="flex flex-col gap-2">
            <h6 className="footer-title text-white mb-2">
              HOME
            </h6>

            <span className="footer-link text-white">Home</span>
            <span className="footer-link text-white">About</span>
            <span className="footer-link text-white">Blog</span>
            <span className="footer-link text-white">Contact</span>
            <span className="footer-link text-white">FAQ</span>

          </div>

          <div className="flex flex-col gap-2">
            <h6 className="footer-title text-white mb-2">
              ABOUT
            </h6>

            <span className="footer-link text-white">FAQ</span>
            <span className="footer-link text-white">Terms & conditions</span>
            <span className="footer-link text-white">Privacy policy</span>
            <span className="footer-link text-white">Cookies</span>

          </div>

          <div className="flex flex-col gap-2">
            <h6 className="footer-title text-white mb-2">
              CONTACT US
            </h6>

            <span className="footer-link text-white">+5 654 789 321</span>
            <span className="footer-link text-primary">Nexus@creative.com</span>

          </div>

        </div>

      </footer>

      <section className="mobile-footer bg-secondary flex flex-col gap-5 items-center px-5 pb-10">
        <Image src={logo} alt="logo" />
        <Image src={nexus_creative} alt="website-name" />
        <span className="text-white extra-small-text">
          © 2024 Nexus Creative All rights reserved
        </span>
      </section>
    </main>
  );
}
