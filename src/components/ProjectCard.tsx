"use client"

import Image, { StaticImageData } from "next/image"
import React, { useRef } from "react"
import { useMotionValue, useSpring, useTransform } from "framer-motion"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRightIcon, GithubIcon } from "lucide-react"

interface ProjectCardType {
  project: {
    id: string
    idn: number
    title: string
    desc: string
    techs: React.JSX.Element[]
    links: { github_link: string; live_link: string }
    image: StaticImageData
  }
}

const MotionImage = motion(Image)

const ProjectCard: React.FC<ProjectCardType> = ({ project }) => {
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
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      key={project.idn}
      className="relative w-full h-[160px] opacity-60 hover:opacity-100 transition-opacity duration-300 border-b-2 border-cinza py-2 lg:py-8 flex items-center justify-between "
    >
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

          {/** DESC */}
          <div className="lg:flex space-y-3 flex-col hidden z-10 text-cinza">
            {/* <p className="lg:text-[20px]">{project.desc}</p> */}
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
          className="h-52 w-64 rounded-lg absolute z-30 object-contain"
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
        <ul className="flex space-x-3 text-cinza">
          <Link
            target="_blank"
            href={project.links.github_link}
            className="hover:text-laranja"
          >
            <GithubIcon size={36} />
          </Link>

          {project.links.live_link != "" && (
            <Link
              target="_blank"
              href={project.links.live_link}
              className="hover:text-laranja cursor-pointer"
            >
              <ArrowUpRightIcon size={36} />
            </Link>
          )}
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard
