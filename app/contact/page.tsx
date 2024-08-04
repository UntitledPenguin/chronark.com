"use client";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import Particles from "../components/particles";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/jiaqi-wang-ramis",
		label: "Linkedin",
		handle: "JiaqiWang",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:jiaqiwang097@gmail.com",
		label: "Email",
		handle: "jiaqiwang097@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/UntitledPenguin",
		label: "Github",
		handle: "UntitledPenguin",
	},
];
export default function Example() {
	return (
	  <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
		<Navigation />
		<div className="container px-4 mx-auto min-h-screen">
		  <div className="flex flex-col items-center justify-center mt-16 sm:mt-32 md:mt-40 lg:mt-48">
			{/* Introduction Text */}
			<p className="text-sm text-zinc-100 max-w-xl" style={{ marginLeft: '10%' }}>
			  Hi, I'm Jiaqi, the creator of PeclicanFlow. I'm glad you're here! Feel free to reach out to me through any of the social platforms below if you are interest in this project. I'd love to connect and hear from you.
			</p>
			<Particles
        		className="absolute inset-0 -z-10 animate-fade-in"
       		 	quantity={500}
     		 />
  
			{/* Social Icons */}
			<div className="mt-8 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
			  {socials.map((s) => (
				<div key={s.handle} className="flex items-center justify-center">
				  <Link
					href={s.href}
					target="_blank"
					className="relative flex flex-col items-center gap-4 p-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16 bg-transparent border-none"
				  >
					<span
					  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
					  aria-hidden="true"
					/>
					<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
					  {s.icon}
					</span>{" "}
					<div className="z-10 flex flex-col items-center">
					  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
						{s.handle}
					  </span>
					  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
						{s.label}
					  </span>
					</div>
				  </Link>
				</div>
			  ))}
			</div>
		  </div>
		</div>

		<footer className="bg-transparent text-gray-300 text-sm py-4 w-full text-center">
        <p>
          Based on Vercel Template by Chronark &bull; © {new Date().getFullYear()} &bull; PelicanFlow All rights reserved.
        </p>
      </footer>


	  </div>
	
	);
	
  }