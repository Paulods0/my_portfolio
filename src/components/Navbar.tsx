"use client"

import React from "react"
import Emoji from "./Emoji"
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import { motion } from "framer-motion"
import { getHours } from "./utils"
import useLanguage from "@/context/LanguangeContext"
import { TEXTS } from "@/constants"

export const nav_links = [
  {
    title: "works",
    path: "/works",
  },
  {
    title: "contact",
  },
]
const emojiVariant = {
  initial: {
    scale: 0.4,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffnes: 120,
      duration: 1,
      delay: 0.8,
      ease: "easeInOut",
    },
  },
}
const linksVariant = {
  initial: { x: 40, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: "0.2",
      delay: 0.6,
      // ease: "easeInOut",
    },
  },
}
const hoverLinksVariant = {
  animate: {
    width: "100%",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
}

interface NavbarProp {
  section: "skills" | "works" | "about" | "contact" | null
}

const MotionLink = motion(Link)

const Navbar: React.FC<NavbarProp> = ({ section }) => {
  const { language, setChangeLanguage } = useLanguage()

  // const changeLanguage = () => {
  //   if (language === "en") {
  //     setChangeLanguage()
  //   } else {
  //     setChangeLanguage()
  //   }
  // }

  const goToAboutSection = () => {
    document.getElementById("about-section")!.scrollIntoView()
  }
  const hours = getHours()
  return (
    <nav className="fixed lg:h-[40px] h-[50px] py-8 z-20 inset-0 lg:bg-transparent bg-black w-full mx-auto justify-around items-center lg:justify-center lg:items-center flex px-4 lg:p-12">
      <Link
        href="/"
        className="text-amarela text-3xl lg:hidden block font-semibold"
      >
        Paulo <span className="text-laranja font-bold text-[70px]">.</span>
      </Link>

      {section && (
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={`text-2xl ${
            section ? "text-laranja" : "text-white"
          } hidden lg:block absolute top-8 left-10 uppercase font-medium text-laranja akshar `}
        >
          {section}
        </motion.h1>
      )}
      <motion.div
        className={`${
          section ? "w-[400px]" : "w-full"
        } h-full lg:flex hidden items-center  transition-all duration-300 ease-in justify-between`}
      >
        <MotionLink
          href="/"
          variants={emojiVariant}
          initial="initial"
          animate="animate"
          className={`hidden  ${
            section === "works" ? "lg:hidden" : "lg:block "
          } transition-all duration-200`}
        >
          <Emoji />
        </MotionLink>

        <div className="w-full flex space-x-12 items-center justify-center">
          {language === "en" ? (
            <MotionLink
              initial={{ opacity: 0, y: -30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4,
                },
              }}
              href="RESUME.pdf"
              download
              target="_blank"
              className={`ml-24 lg:self-center bg-black/20 backdrop-blur-lg hover:text-laranja/50 transition-all duration-300 uppercase hidden text-xl font-bold text-laranja px-4 py-2 rounded-full ${
                section ? "lg:hidden" : "lg:block"
              }`}
            >
              RESUME
            </MotionLink>
          ) : (
            <MotionLink
              initial={{ opacity: 0, y: -30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4,
                },
              }}
              href="RESUME.pdf"
              download
              target="_blank"
              className={`ml-24 lg:self-center bg-black/20 backdrop-blur-lg hover:text-laranja/50 transition-all duration-300 uppercase hidden text-xl font-bold text-laranja px-4 py-2 rounded-full ${
                section ? "lg:hidden" : "lg:block"
              }`}
            >
              CV
            </MotionLink>
          )}
          <div className="mr-24 flex gap-4 relative">
            <button
              className={`text-[18px] border-r border-cinza pr-4 ${
                language === "pt" ? "text-laranja/40" : "text-laranja"
              }  uppercase`}
              onClick={setChangeLanguage}
            >
              EN
            </button>
            <button
              className={`text-[18px] ${
                language === "en" ? "text-laranja/40" : "text-laranja"
              } uppercase`}
              onClick={setChangeLanguage}
            >
              PT
            </button>
          </div>
        </div>

        <motion.ul
          variants={linksVariant}
          initial="initial"
          animate="animate"
          className={`hidden gap-4 z-30 bg-preta/10 py-2 px-4 ${
            section === "works" ? "lg:hidden" : "lg:flex"
          } rounded-full backdrop-blur-2xl transition-all duration-200"
          }`}
        >
          {language === "en"
            ? TEXTS.nav_links.en.map((link, index) => (
                <li key={index}>
                  <MotionLink
                    onClick={
                      link.title === "contact"
                        ? () =>
                            document.getElementById("contact")!.scrollIntoView()
                        : undefined
                    }
                    whileHover="animate"
                    whileTap={{
                      opacity: 0.5,
                    }}
                    href={link.path || ""}
                    className={`akshar  ${
                      section
                        ? "text-[12px] font-bold"
                        : " text-[14px] font-normal"
                    } ${
                      section === "skills" ? "text-white" : "text-white"
                    } relative z-10`}
                  >
                    {link.title.toUpperCase()}
                    <motion.div
                      variants={hoverLinksVariant}
                      className={`abolute bottom-0 w-0 font-semibold h-[1px] bg-laranja `}
                    />
                  </MotionLink>
                </li>
              ))
            : TEXTS.nav_links.pt.map((link, index) => (
                <li key={index}>
                  <MotionLink
                    onClick={
                      link.title === "contact"
                        ? () =>
                            document.getElementById("contact")!.scrollIntoView()
                        : undefined
                    }
                    whileHover="animate"
                    whileTap={{
                      opacity: 0.5,
                    }}
                    href={link.path || ""}
                    className={`akshar  ${
                      section
                        ? "text-[12px] font-bold"
                        : " text-[14px] font-normal"
                    } ${
                      section === "skills" ? "text-white" : "text-white"
                    } relative z-10`}
                  >
                    {link.title.toUpperCase()}
                    <motion.div
                      variants={hoverLinksVariant}
                      className={`abolute bottom-0 w-0 font-semibold h-[1px] bg-laranja `}
                    />
                  </MotionLink>
                </li>
              ))}
          <button className="text-laranja uppercase" onClick={goToAboutSection}>
            Me
          </button>
        </motion.ul>
        {section && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className={`text-base ${
              section === "skills" ? "text-white" : "text-white"
            } hidden absolute top-8 right-24 font-light lg:flex flex-col gap-2:`}
          >
            <h1>Luanda,AO</h1>
            <h2 className="self-center">{hours}</h2>
          </motion.div>
        )}
      </motion.div>

      <MobileMenu />
    </nav>
  )
}

export default Navbar
