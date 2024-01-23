import React, { useEffect, useRef } from "react"

import "./skills-section.css"
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
} from "./Icons"
import { motion, useTransform, useScroll } from "framer-motion"
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
} from "./Icons"
import useLanguage from "@/context/LanguangeContext"
import { TEXTS } from "@/constants"

const SkillsSection = () => {
  const { language } = useLanguage()
  const contents = [
    {
      title:
        language == "en"
          ? TEXTS.skillsTexts.en.languages
          : TEXTS.skillsTexts.pt.languages,

      icons: [
        <HTML />,
        <CSS />,
        <JavaScriptIcon />,
        <TypeScriptIcon />,
        <KOTLIN />,
        <JAVA />,
        <NodeJsIcon />,
        <PostgresIcon />,
        <MongoDBIcon />,
      ],
    },
    {
      title:
        language == "en"
          ? TEXTS.skillsTexts.en.frameworks
          : TEXTS.skillsTexts.pt.frameworks,

      icons: [
        <SPRINGBOOT />,
        <NextJsIcon />,
        <ReactIcon />,
        <REDUX />,
        <TAILWIND />,
        <EXPRESS />,
        <SCSS />,
        <FRAMER />,
        <BOOTSTRAP />,
      ],
    },
    {
      title:
        language == "en"
          ? TEXTS.skillsTexts.en.tools
          : TEXTS.skillsTexts.pt.tools,

      icons: [
        <POSTMAN />,
        <INSOMNIA />,
        <FIGMA />,
        <GIT />,
        <DOCKER />,
        <VSCODE />,
        <INTELIJ />,
        <YARN />,
        <NPM />,
      ],
    },
  ]
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
  })
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])

  return (
    <div
      ref={ref}
      className="lg:h-[2400px] min-h-screen px-8 lg:px-0 lg:border-none border-t-2 border-cinza"
    >
      <div className="sticky hidden lg:flex overflow-hidden w-full  items-center h-screen text-black top-0 bg-preta">
        <div className="absolute top-0 left-0">
          <SQUAREDECORATION1 />
        </div>
        <div className="absolute -bottom-20 -left-10">
          <SQUAREDECORATION2 />
        </div>
        <div className="absolute top-0 right-0">
          <SQUAREDECORATION3 />
        </div>

        <motion.section style={{ x }} className="flex  gap-8 p-2 ml-3">
          {contents.map((cont, index) => (
            <CARD key={index} content={cont} />
          ))}
        </motion.section>
      </div>

      {/**FOR MOBILE */}
      <div className="lg:hidden h-[100vh] flex w-full flex-col mt-36 gap-8 items-center justify-between">
        {contents.map((content, index) => (
          <div key={index} className="">
            <div className="w-full">
              <h1 className="text-center text-[24px] mb-9 text-laranja">
                {content.title}
              </h1>

              <div className="grid grid-cols-3 gap-8 place-items-center h-full">
                {content.icons.map((icon, index) => (
                  <div key={index}>{icon}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsSection

export const MeshGradient = () => {
  return (
    <div className="relative w-[300px] h-[300px] rotate-45 ">
      <div className="absolute top-0 right-0 bg-indigo-500  rounded-full w-[120px] h-[250px] blur-[90px] " />
      <div className="absolute top-0 bg-red-500 rounded-full w-[190px] h-[100px] blur-[90px] " />
      <div className="absolute bottom-0 left-0 bg-blue-800 rounded-full w-[160px] h-[190px] blur-[90px] " />
    </div>
  )
}

export const CARD = ({
  content,
}: {
  content: { title: string; icons: any[] }
}) => {
  return (
    <div className="w-[1100px] ml-10 px-8 h-[500px] place-content-center place-items-center grid grid-cols-2 text-white">
      <div className="w-[320px] ml-20 flex  items-center justify-center flex-col gap-6">
        <h1
          className={` text-transparent bg-clip-text bg-gradient-to-r from-laranja from to-preto/20 text-start text-[40px] font-normal`}
        >
          {content.title.toUpperCase()}
        </h1>
      </div>
      <div className="grid gap-14 grid-cols-3">
        {content.icons.map((ico, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-3xl p-2 rounded-md flex items-center justify-center"
          >
            {ico}
          </div>
        ))}
      </div>
    </div>
  )
}
