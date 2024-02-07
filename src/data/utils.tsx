import { ArrowUpRightIcon, Github } from "lucide-react"
import {
  HTML,
  CSS,
  JavaScriptIcon,
  TypeScriptIcon,
  KOTLIN,
  JAVA,
  NodeJsIcon,
  SPRINGBOOT,
  NextJsIcon,
  ReactIcon,
  TAILWIND,
  EXPRESS,
  FRAMER,
  BOOTSTRAP,
  SOCKET,
  GRAPH,
  GITHUB,
} from "../components/Icons"
import {
  DOCKER,
  FIGMA,
  GIT,
  INSOMNIA,
  INTELIJ,
  ANDROID_STUDIO,
  MongoDBIcon,
  FIREBASE,
  NPM,
  POSTMAN,
  PostgresIcon,
  REDUX,
  SCSS,
  SQUAREDECORATION1,
  SQUAREDECORATION2,
  SQUAREDECORATION3,
  VSCODE,
  YARN,
} from "../components/Icons"

import file_sphere from "../../public/projects/filepsphere-1.png"
import pic_blend from "../../public/projects/pic-blend.png"
import pronote from "../../public/projects/mockup-pronote2.png"
import blog from "../../public/projects/blog.png"
import news_app from "../../public/projects/news-app-1.png"
import health_app from "../../public/projects/health-app-2.png"
import food_app from "../../public/projects/food-app-1.png"
import React from "react"

export const projects = [
  {
    id: "01",
    idn: 1,
    title: "File Sphere",
    desc: "Web App",
    techs: [<ReactIcon />, <TypeScriptIcon />, <FIREBASE />, <MongoDBIcon />],
    links: {
      github_link: "https://github.com/Paulods0/file-sphere",
      live_link: "https://file-sphere.vercel.app/",
    },
    image: file_sphere,
  },
  {
    id: "02",
    idn: 2,
    title: "PicBlend",
    desc: "Web App",
    techs: [<TypeScriptIcon />, <NextJsIcon />, <MongoDBIcon />],
    links: {
      github_link: "https://github.com/Paulods0/pic-blend",
      live_link: "https://pic-blend.vercel.app/",
    },
    image: pic_blend,
  },
  {
    id: "03",
    idn: 3,
    title: "NotePro",
    desc: "Web App",
    techs: [<NextJsIcon />, <SOCKET />, <TypeScriptIcon />, <PostgresIcon />],
    links: {
      github_link: "https://github.com/Paulods0/notepro-saas",
      live_link: "https://notepro-saas-production.up.railway.app/",
    },
    image: pronote,
  },
  {
    id: "04",
    idn: 4,
    title: "Blog",
    desc: "Web Site",
    techs: [<NextJsIcon />, <JavaScriptIcon />, <FIREBASE />],
    links: {
      github_link: "https://github.com/Paulods0/fullstack-blog",
      live_link: "",
    },
    image: blog,
  },
  {
    id: "05",
    idn: 5,
    title: "Healthy App",
    desc: "Android Web App",
    techs: [<KOTLIN />, <ANDROID_STUDIO />],
    links: {
      github_link: "https://github.com/Paulods0/healthy-app",
      live_link: "",
    },
    image: health_app,
  },
  {
    id: "06",
    idn: 6,
    title: "News App",
    desc: "Android Web App",
    techs: [<JAVA />, <ANDROID_STUDIO />, <FIREBASE />],
    links: {
      github_link: "https://github.com/Paulods0/pulse-feed-news-app",
      live_link: "",
    },
    image: news_app,
  },
  {
    id: "07",
    idn: 7,
    title: "Food App",
    desc: "Mobile App",
    techs: [<ReactIcon />, <TAILWIND />, <FIREBASE />],
    links: {
      github_link: "https://github.com/Paulods0/food-app-RN",
      live_link: "",
    },
    image: food_app,
  },
]
