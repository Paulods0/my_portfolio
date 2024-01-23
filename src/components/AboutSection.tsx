"use client"
import { useEffect, useState } from "react"
import AboutContent from "./AboutContent"
import { BigEmoji } from "./Icons"
// import { motion, useAnimation, useInView } from "framer-motion"
import Link from "next/link"
import useLanguage from "@/context/LanguangeContext"
import { TEXTS } from "@/constants"

// type contentType = "about" | "hobbies" | "goals"

const AboutSection = () => {
  const { language } = useLanguage()
  const CONTENT = [
    {
      id: "about",
      title:
        language === "en"
          ? TEXTS.meTexts.en.whoAmI.title
          : TEXTS.meTexts.pt.whoAmI.title,
      text:
        language === "en"
          ? TEXTS.meTexts.en.whoAmI.text
          : TEXTS.meTexts.pt.whoAmI.text,
      links: [
        { title: "Github", path: "https://github.com/PauloDs0" },
        {
          title: "LinkedIn",
          path: "www.linkedin.com/in/paulods-dev/",
        },
        { title: "X", path: "https://x.com/" },
      ],
    },
    {
      id: "hobbies",
      title:
        language === "en"
          ? TEXTS.meTexts.en.hobbies.title
          : TEXTS.meTexts.pt.hobbies.title,
      text:
        language === "en"
          ? TEXTS.meTexts.en.whoAmI.text
          : TEXTS.meTexts.pt.whoAmI.text,
    },
    {
      id: "goals",
      title:
        language === "en"
          ? TEXTS.meTexts.en.goals.title
          : TEXTS.meTexts.pt.goals.title,
      text:
        language === "en"
          ? TEXTS.meTexts.en.goals.text
          : TEXTS.meTexts.pt.goals.text,
    },
  ]
  const buttons = [
    {
      id: "about",
      display: language === "en" ? "01 who am I" : "01 quem sou eu",
    },
    {
      id: "hobbies",
      display: "02 hobbies",
    },
    {
      id: "goals",
      display: language === "en" ? "03 goals" : "03 objectivos",
    },
  ]
  const [contentId, setContent] = useState("about")
  const [contentObj, setContentObj] = useState<
    | {
        id: string
        title: string
        text: string
        links?: { title: string; path: string }[]
      }
    | undefined
  >(CONTENT[0])

  const handleClick = (contentId: string) => {
    setContent(contentId)
  }

  const handleChange = () => {
    const obj = CONTENT.find((cont) => cont.id === contentId)
    setContentObj(obj)
  }

  useEffect(() => {
    handleChange()
  }, [contentId])

  return (
    <main
      id="about-section"
      className="relative h-screen bg-preta w-full px-8 p-4 mt-12 lg:border-none border-t-2 border-cinza flex flex-col justify-center items-center"
    >
      <h1 className="text-2xl text-laranja text-center lg:hidden block">
        About{" "}
      </h1>

      <section className="relative mt-24 items-center justify-center lg:mt-0 h-full bg-preta flex lg:items-center lg:justify-center">
        <div className="w-full h-[420px] lg:h-[480px] flex flex-col-reverse justify-between lg:grid lg:grid-cols-2 lg:place-items-center gap-4">
          <div className="lg:relative w-full flex flex-col items-start mt-12 lg:items-center lg:justify-end h-full">
            <div className="hidden lg:block absolute bottom-56 ">
              <BigEmoji />
            </div>

            <ul className="flex items-start flex-col">
              {buttons.map((button) => (
                <button
                  className={`cursor-pointer text-[24px] ${
                    contentId === button.id ? "text-laranja" : "text-cinza"
                  }`}
                  onClick={() => handleClick(button.id)}
                >
                  {button.display}
                </button>
              ))}
              <Link
                href="RESUME.pdf"
                target="_blank"
                download
                className="text-[24px] hidden lg:block text-laranja uppercase mt-4"
              >
                dowload resume
              </Link>
            </ul>
          </div>

          <AboutContent content={contentObj} />
        </div>
      </section>
    </main>
  )
}

export default AboutSection
