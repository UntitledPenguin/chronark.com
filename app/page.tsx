import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Features", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-400 hover:text-zinc-100"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={500}
      />
      <h1 className="flex items-center gap-2 py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        <img 
          src="/images/icon.png" 
          alt="Icon" 
          className="h-9 w-9 sm:h-[60px] sm:w-[60px] md:h-[112px] md:w-[112px]" 
        /> 
        <span className="inline-block align-middle">
          PelicanFlow
        </span>
      </h1>
 
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      {/* Link around h2 */}
      <a 
        href="https://pelicanflow.vercel.app/projects" 
        className="my-16 text-center animate-fade-in"
      >
        <h2 className="text-sm text-zinc-200">
          An Ultimate Toolbox for Urban Planners and Designers.
        </h2>
      </a>


      <footer className="bg-transparent text-zinc-400 text-sm py-4 w-full text-center animate-fade-in">
        <p>
          Based on Vercel Template by Chronark &bull; © {new Date().getFullYear()} &bull; PelicanFlow All rights reserved.
        </p>
      </footer>

    </div>
  );

}

