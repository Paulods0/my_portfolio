import imagePrev from "../public/3.jpg"
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
} from "./components/Icons"
import {
  DOCKER,
  FIGMA,
  GIT,
  INSOMNIA,
  INTELIJ,
  MongoDBIcon,
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
} from "./components/Icons"

export const projects = [
  {
    id: "01",
    title: "Recipe App",
    desc: "Fullstack Web App, for share recipes around the World.",
    techs: [<ReactIcon />, <NodeJsIcon />, <MongoDBIcon />],
    links: ["Github", <ArrowUpRightIcon size={24} />],
    image: imagePrev,
  },
  {
    id: "02",
    title: "Social App",
    desc: "Fullstack Web App, social media app.",
    techs: [<JAVA />, <SPRINGBOOT />, <PostgresIcon />],
    links: ["Github", <ArrowUpRightIcon size={24} />],
    image: imagePrev,
  },
  {
    id: "03",
    title: "NotePro",
    desc: "Fullstack web app to schedule your thoughts.",
    techs: [<NextJsIcon />, <SOCKET />, <GRAPH />],
    links: [<Github size={24} />, <ArrowUpRightIcon size={24} />],
    image: imagePrev,
  },
]
