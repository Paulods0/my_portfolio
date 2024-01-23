"use client"
import React from "react"
import "./hero.css"
import { ContactDec, GITHUB, LINKEDIN } from "../components/Icons"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { GithubIcon, Github, Linkedin, LinkedinIcon } from "lucide-react"
import useLanguage from "@/context/LanguangeContext"
import { TEXTS } from "@/constants"

const paragraphVariant = {
  initial: {
    scale: 0.7,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 1.4,
      ease: "easeInOut",
    },
  },
}
const nameVariant = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.6,
      ease: "easeInOut",
    },
  },
}
const occupationVariant = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: -0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.9,
      ease: "easeInOut",
    },
  },
}
const mediasVariant = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay: 0.8,
    },
  },
}
const recentProjectVariant = {
  animate: {
    scaleY: 1.1,
  },
}
const recentProjectVariantAnim = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

const ImageLink = motion(Image)

const HeroSection = () => {
  const { language } = useLanguage()

  return (
    <main
      id="hero"
      className="h-screen relative flex flex-col-reverse lg:flex-col items-center bg-preta px-8 justify-center lg:justify-end w-full"
    >
      {/* <ContactDec className="absolute top-0 right-0" /> */}
      <motion.div
        variants={mediasVariant}
        initial="initial"
        animate="animate"
        className="absolute hidden lg:block top-28 left-10"
      >
        <CROSSDEC />
      </motion.div>
      <motion.div
        variants={mediasVariant}
        initial="initial"
        animate="animate"
        className="absolute hidden lg:block bottom-14 right-10 "
      >
        <CROSSDEC2 />
      </motion.div>

      <motion.div
        variants={paragraphVariant}
        initial="initial"
        animate="animate"
        className="w-[308px] lg:w-[400px] leading-8 lg:absolute text-white/60 lg:top-80 lg:right-64 mt-8 lg:mt-0 text-[22px] lg:text-[18px] font-light"
      >
        <div className="absolute -top-24 -left-36  ">
          <BALLS />
        </div>
        {language === "en" ? TEXTS.heroTexts.en.hero : TEXTS.heroTexts.pt.hero}
      </motion.div>
      <div className="lg:self-start c lg:mt-32 flex justify-between lg:w-full items-end">
        <div className="mb-8">
          <motion.h3
            variants={occupationVariant}
            initial="initial"
            animate="animate"
            className="text-laranja text-[24px] text-center lg:text-left lg:text-[18px] uppercase"
          >
            {language === "en"
              ? TEXTS.heroTexts.en.ocupation
              : TEXTS.heroTexts.pt.opcupation}
            <br />
            <span className="text-cinza">
              {language === "en"
                ? TEXTS.heroTexts.en.location
                : TEXTS.heroTexts.pt.location}
            </span>
          </motion.h3>
          <motion.h1
            variants={nameVariant}
            initial="initial"
            animate="animate"
            className="text-cinza text-center text-[70px] lg:text-left lg:text-[100px] leading-none "
          >
            PAULO
            <br />
            LUGUENDA
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="lg:block hidden absolute bottom-24 right-[390px] "
          >
            <Link
              href="/works"
              className="rounded-full bg-white flex items-center justify-center overflow-hidden w-44 h-24"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 0, filter: "0" }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="h-full w-full blur-sm"
              >
                <Image
                  src="/projects/news-app-1.png"
                  alt="recente project photo"
                  height={500}
                  width={500}
                  className=" h-full w-full object-cover "
                />
              </motion.div>
            </Link>

            <p className="mt-2 uppercase text-[12px] text-center">
              {language === "en" ? "recent project" : "projecto recente"}
            </p>
          </motion.div>
        </div>
      </div>
      <div className="absolute hidden justify-center lg:flex lg:flex-col lg:justify-between items-center right-6 bottom-1/2 lg:space-x-0 lg:space-y-3 space-x-6 ">
        <Link target="_blank" href="https://github.com/PauloDs0">
          <GithubIcon size={28} color="grey" />
        </Link>
        <Link target="_blank" href="https://linkedin.com/in/paulods-dev/">
          <LinkedinIcon size={28} color="grey" />
        </Link>
      </div>

      {/**FOR MOBILE */}
      <div className="absolute lg:hidden items-center justify-between w-[300px] flex px-12 bottom-4 ">
        <p className="text-cinza  text-[16px]">&copy;All Rights Reserved</p>
        <div className=" flex space-x-4">
          <GithubIcon size={28} color="grey" />
          <LinkedinIcon size={28} color="grey" />
        </div>
      </div>
    </main>
  )
}

export default HeroSection

export const CROSSDEC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={221}
      height={170}
      fill="none"
    >
      <path
        fill="#4E4E4E"
        fillOpacity={0.4}
        fillRule="evenodd"
        d="M45.551 21.363V.056h2v21.306h173.296v2H47.551v145.759h-2V23.363H0v-2h45.551Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export const CROSSDEC2 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={222}
      height={170}
      fill="none"
    >
      <path
        fill="#4E4E4E"
        fillOpacity={0.4}
        fillRule="evenodd"
        d="M175.872 148.069v21.307h-2v-21.307H.576v-2h173.296V.311h2V146.07h45.552v2h-45.552Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export const BALLS = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={212}
      height={168}
      fill="none"
    >
      <path
        fill="#4E4E4E"
        fillOpacity={0.4}
        fillRule="evenodd"
        d="M16.084 9.226a7.142 7.142 0 1 1-14.285 0 7.142 7.142 0 0 1 14.285 0Zm1.786 0a8.928 8.928 0 1 1-17.857 0 8.928 8.928 0 0 1 17.857 0Zm-1.786 49.929a7.142 7.142 0 1 1-14.285 0 7.142 7.142 0 0 1 14.285 0Zm1.786 0a8.928 8.928 0 1 1-17.856 0 8.928 8.928 0 0 1 17.856 0Zm-8.928 57.071a7.143 7.143 0 1 0 0-14.285 7.143 7.143 0 0 0 0 14.285Zm0 1.786a8.928 8.928 0 1 0 0-17.856 8.928 8.928 0 1 0 0 17.856Zm7.142 41.001a7.143 7.143 0 1 1-14.285-.001 7.143 7.143 0 0 1 14.285.001Zm1.786 0a8.929 8.929 0 1 1-17.857-.001 8.929 8.929 0 0 1 17.857.001ZM57.407 16.368a7.142 7.142 0 1 0 0-14.285 7.142 7.142 0 0 0 0 14.285Zm0 1.786a8.928 8.928 0 1 0 0-17.856 8.928 8.928 0 0 0 0 17.856Zm7.142 41a7.142 7.142 0 1 1-14.285 0 7.142 7.142 0 0 1 14.285 0Zm1.786 0a8.928 8.928 0 1 1-17.856 0 8.928 8.928 0 0 1 17.856 0Zm-8.928 57.072a7.143 7.143 0 1 0 0-14.285 7.143 7.143 0 0 0 0 14.285Zm0 1.786a8.928 8.928 0 1 0 0-17.856 8.928 8.928 0 1 0 0 17.856Zm7.142 41.001a7.143 7.143 0 1 1-14.285-.001 7.143 7.143 0 0 1 14.285.001Zm1.786 0a8.929 8.929 0 1 1-17.857-.001 8.929 8.929 0 0 1 17.857.001Zm39.537-142.645a7.142 7.142 0 0 0 7.142-7.142 7.142 7.142 0 1 0-14.284 0 7.142 7.142 0 0 0 7.142 7.142Zm0 1.786a8.928 8.928 0 0 0 8.928-8.928 8.928 8.928 0 1 0-17.856 0 8.928 8.928 0 0 0 8.928 8.928Zm0 49.929a8.928 8.928 0 0 0 8.928-8.928 8.928 8.928 0 1 0-17.856 0 8.928 8.928 0 0 0 8.928 8.928Zm8.928 41.001a8.928 8.928 0 0 1-8.928 8.928 8.928 8.928 0 0 1-8.928-8.928 8.928 8.928 0 0 1 8.928-8.928 8.928 8.928 0 0 1 8.928 8.928Zm-8.928 58.857a8.929 8.929 0 1 0-.001-17.857 8.929 8.929 0 0 0 .001 17.857Zm48.465-151.573a7.143 7.143 0 1 0 0-14.285 7.143 7.143 0 0 0 0 14.285Zm0 1.786a8.928 8.928 0 0 0 8.928-8.928 8.928 8.928 0 1 0-17.856 0 8.928 8.928 0 0 0 8.928 8.928Zm0 49.929a8.928 8.928 0 0 0 8.928-8.928 8.928 8.928 0 1 0-17.856 0 8.928 8.928 0 0 0 8.928 8.928Zm48.465-51.715a7.143 7.143 0 1 0 0-14.285 7.143 7.143 0 0 0 0 14.285Zm0 1.786a8.928 8.928 0 0 0 8.928-8.928 8.928 8.928 0 1 0-17.856 0 8.928 8.928 0 0 0 8.928 8.928Zm0 49.929a8.928 8.928 0 0 0 8.928-8.928 8.928 8.928 0 1 0-17.856 0 8.928 8.928 0 0 0 8.928 8.928Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
