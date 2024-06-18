"use client";
import React from "react";
import { HoverEffect } from "@/app/components/ui/card-hover-effect";

import { Audiowide } from "next/font/google";

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

export default function Projects() {
  const projects = [
    {
      title: "Baja Lovers - (In Progress)",
      description:
        "Website where local events in Los Cabos, Mexico are promoted. Users will have access to discounts, event information, and more as well as personalized suggestions based on their interests.",
      link: "https://baja-lovers.vercel.app/",
    },
    {
      title: "Mental State Coffee - (In Progress)",
      description:
        "Coffee company based in Los Angles that sources the best coffee from Mexico. The website will have an e-commerce store, blog, and subscription service.",
      link: "https://www.mentalstatecoffee.com/",
    },
    {
      title: "Fujikast",
      description:
        "A manufacturing brokerage company I built with my cousin that helps companies who need custom parts and hardware find manufacturers in Mexico.",
      link: "https://fujikast.com",
    },
    {
      title: "Cristina Maya Realty",
      description:
        `Real estate website that helps people find homes through current listings or sell their homes. Different services such as mortgage calculators, 
        loan options, home value estimators, and more are also provided.`,
      link: "https://www.cristinamaya.com/",
    },
    {
      title: "Fujixsan",
      description:
        "This is my personal webpage I created to promote my music, share my digital press kit and list upcoming events.",
      link: "https://fujixsan.com",
    },
    {
      title: "Rabble Rabble",
      description:
        "Raffle style game where friends can wager an NFT in either a private or public lobby. A winner is chosen at random and the NFTs are transferred to the winner.",
      link: "https://www.rabblerabble.xyz/  ",
    },
    {
      title: "SWOP",
      description:
        "A free NFT swapping portal. Users can swap NFTs with each other privately or create a listing where anyone looking to trade can do so. Trades can be 1 to 1 or 1 to many (up to 6) and counter offers can be made.",
      link: "https://www.byquokkas.xyz/",
    },
    {
      title: "Minimal NYC",
      description:
        "This is a website for a tattoo shop in New York. There is also an admin panel where the shop owner can update the website with new or visiting artists as well as handle all their bookings, inquiries, collect deposits and email reminders.",
      link: "https://minimalnyc.com",
    },
    {
      title: "Scorpion Home",
      description:
        "A suite of applications for clients in the home services space. The applications include a CRM, a mobile app for technicians, lead management portal, communication suite, and much more.",
      link: "https://www.scorpion.co/home-services/",
    },
    {
      title: "SMPL Rounding",
      description:
        "Mobile app gaging patient experience and satisfaction during their hospital visit. The app is used by hospital staff to collect data and improve patient care.",
      link: "https://apps.apple.com/us/app/smpl-rounding/id1173700028",
    },
    {
      title: "OurGroup.io",
      description:
        "Internal collaboration and communication application for hospitals. Events, communication, etc. is done through a custom filtering algorithm which only allows certain users with specific roles access to certain posts.",
      link: "",
    },
    {
      title: "Opel Ireland",
      description:
        "For this project I created shared components that could be used internally for the Opel brand. The components were used by web designers in Ireland to create a new website for Opel Ireland accordingly for the country's target audience.",
      link: "https://www.opel.ie/",
    },
  ];

  return (
    <div id="projects" className="max-w-5xl mx-auto mt-40 mb-20">
      <div className="flex items-center">
        <h1 className="text-xl lg:text-3xl"><span className={`${audiowide.className} text-[#62f5d6]`}>03.</span> Some Things I’ve Built</h1>
        <hr className="ml-4 w-72 h-[1px] bg-gray-100 border-0 dark:bg-gray-700 hidden lg:block" />
      </div>
      <br />
      <HoverEffect items={projects} />
    </div>
  );
}
