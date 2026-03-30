// src/data/projects.js

import { g } from "framer-motion/client";

const projects = [
   {
    id: 1,
    title: "Interactive E-Commerce Product Page",
    image: "/dev-ecommerce.png",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Context API"],
    github: "https://github.com/victoriaonuoha/devtoria_ecommerce",
    live: "https://devtoria-ecommerce.vercel.app/"
  },
  {
    id: 2,
    title: "URL Shortener",
    image: "/url_shortener_pic.png",
    tech: ["React", "Tailwind", "API"],
    github: "https://github.com/victoriaonuoha/devtoria_url_shortener",
    live: "https://devtoria-url-shortener.vercel.app/"
  },
  {
    id: 3,
    title: "Weather App",
    image: "/weather_short_pic.png",
    tech: ["React", "Real world API", "Tailwind"],
    github: "https://github.com/victoriaonuoha/devtoria-weather-app",
    live: "https://devtoria-weather-app.vercel.app/"
  },
  {
    id: 4,
    title: "CredScore: A Credit Score Generator",
    image: "/credscore.png",
    tech: ["NextJs", "Tailwind"],
    github: "https://github.com/victoriaonuoha/hackathon-app",
    live: "https://credscore.vercel.app/"
  },


  
];

export default projects;