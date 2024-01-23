"use client"

import { DecBall } from "@/components/Icons"
import Link from "next/link"
import React, { useRef } from "react"

import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { projects } from "@/utils"
import Footer from "@/components/Footer"
import useLanguage from "@/context/LanguangeContext"

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

const MotionImage = motion(Image)

const WorksPage = () => {
  const { language, setChangeLanguage } = useLanguage()

  const ref = useRef<HTMLDivElement | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x)
  const ySpring = useSpring(y)

  const top = useTransform(ySpring, [0.5, -0.5], ["40%", "60%"])
  const left = useTransform(xSpring, [0.5, -0.5], ["30%", "60%"])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPercentage = Number(mouseX) / width - 0.7
    const yPercentage = Number(mouseY) / height - 0.4

    x.set(xPercentage)
    y.set(yPercentage)
  }

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
      <section className="w-full flex mt-16 flex-col justify-center">
        <div className="flex items-center justify-end w-full">
          <div className="w-[380px] mt-14 lg:mr-28">
            <h1 className="text-3xl text-laranja">
              {language === "en" ? "Personal Projects" : "Projetos pessoais"}
            </h1>
            <p className="text-cinza lg:text-xl">
              {language === "en"
                ? "With great satisfaction, I share that I had the pleasure of participating in the development of significant personal projects over the past year, contributing significantly to my growth and maturity as a fullstack developer. These projects were more than simple exercises, they represented valuable opportunities to apply and enhance my technical skills on both the frontend and backend fronts."
                : "Com grande satisfação, compartilho que tive o prazer de participar no desenvolvimento de projetos pessoais significativos ao longo do último ano, contribuindo significativamente para o meu crescimento e maturidade como desenvolvedor fullstack. Esses projetos foram mais do que simples exercícios, eles representaram oportunidades valiosas para aplicar e aprimorar minhas habilidades técnicas em ambas as frentes, frontend e backend."}
            </p>
          </div>

          {/* <div className="hidden lg:block">
            <DecBall />
          </div> */}
        </div>

        {/**LINKS */}
        <ul className="mt-2 lg:gap-2 h-screen flex flex-col items-center justify-center">
          {projects.map((project, index) => (
            <motion.div
              ref={ref}
              onMouseMove={handleMouseMove}
              initial="initial"
              whileHover="whileHover"
              key={index}
              className="relative w-full h-[160px] cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300 border-b-2 border-cinza py-2 lg:py-0 flex items-center justify-between"
            >
              {/**TITLE */}
              <div className="flex space-x-4 lg:group">
                <div className="flex flex-col">
                  <div className="flex space-x-3">
                    <h1 className="text-[32px] lg:text-[45px] font-extrabold z-10 text-laranja">
                      {project.id}
                    </h1>
                    <h1 className="text-[32px] lg:text-[45px] font-extrabold z-10 text-cinza">
                      {project.title}
                    </h1>
                  </div>
                  {/**DESC */}
                  <div className="lg:flex space-y-3 flex-col hidden z-10 text-cinza">
                    <p className="lg:text-[20px]">{project.desc}</p>

                    <ul className="flex space-x-2">
                      {project.techs.map((tech, index) => (
                        <li className="text-center" key={index}>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/**IMAGE */}

                <MotionImage
                  variants={{
                    initial: { scale: 0, rotate: "-12deg" },
                    whileHover: {
                      scale: 1,
                      rotate: "12deg",
                    },
                  }}
                  style={{
                    //@ts-ignore
                    top,
                    //@ts-ignore
                    left,
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                  transition={{
                    type: "spring",
                  }}
                  alt="project-image"
                  src={project.image}
                  width={500}
                  quality={80}
                  height={500}
                  className="h-52 w-64 rounded-lg absolute z-30 object-cover"
                />
              </div>

              {/**LINKS */}
              <motion.div
                variants={{
                  initial: { opacity: 0, x: "25%" },
                  whileHover: { opacity: 1, x: "0%" },
                }}
                transition={{
                  duration: 0.5,
                  ease: "backInOut",
                  type: "spring",
                  stiffness: 120,
                }}
                className="flex space-x-4 z-10"
              >
                <ul className="flex space-x-3">
                  {project.links.map((link, index) => (
                    <Link
                      target="_blank"
                      href={"https://github.com/Paulods0/mern-recipe"}
                      className="text-cinza"
                      key={index}
                    >
                      {link}
                    </Link>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </ul>
      </section>
    </motion.main>
  )
}

export default WorksPage
