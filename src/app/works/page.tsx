"use client"

import Link from "next/link"

import { motion} from "framer-motion"
import { projects } from "@/data/utils"

import useLanguage from "@/context/LanguangeContext"
import ProjectCard from "@/components/ProjectCard"

const nav_links = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "contact",
    path: "/contact",
  },
]
const variants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
}

const WorksPage = () => {
  const { language, setChangeLanguage } = useLanguage()

  return (
    <motion.main
      variants={variants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 0.5,
        delay: 0.25,
      }}
      className="h-screen w-full px-8"
    >
      <header className="w-full h-[50px] flex items-center justify-between py-12">
        <h1 className="text-laranja uppercase text-4xl">works</h1>
        <nav className="self-center w-full flex items-center justify-center">
          <ul className="flex space-x-4 items-center">
            <button
              className={`text-[18px] text-laranja uppercase`}
              onClick={setChangeLanguage}
            >
              {language === "en" ? "EN" : "PT"}
            </button>
            {nav_links.map((link, index) => (
              <motion.li
                whileTap={{
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.5,
                }}
                key={index}
              >
                <Link
                  className="uppercase hover:text-laranja transition-colors duration-200s text-white text-base"
                  href={link.path}
                >
                  {link.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>

      {/** BODY */}
      <section className="w-full flex mt-16 flex-col justify-center pb-24">
        <div className="flex items-center justify-end w-full">
          <div className="w-[390px] mb-36 mt-14 lg:mr-28">
            <h1 className="text-3xl text-laranja">
              {language === "en" ? "Personal Projects" : "Projetos pessoais"}
            </h1>
            <p className="text-cinza lg:text-xl">
              {language === "en"
                ? "These projects were more than simple exercises, they represented valuable opportunities to apply and enhance my technical skills on both the frontend and backend fronts."
                : "Esses projetos foram mais do que simples exercícios, eles representaram oportunidades valiosas para aplicar e aprimorar minhas habilidades técnicas em ambas as frentes, frontend e backend."}
            </p>
          </div>

          {/* <div className="hidden lg:block">
            <DecBall />
          </div> */}
        </div>

        {/**LINKS */}
        <ul className="mt-10 lg:gap-2 h-screen flex flex-col items-center justify-center ">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </ul>
      </section>
    </motion.main>
  )
}

export default WorksPage
