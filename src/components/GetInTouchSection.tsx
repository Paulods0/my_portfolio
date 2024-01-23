"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { TEXTS } from "../constants"
import useLanguage from "@/context/LanguangeContext"

const MotionLink = motion(Link)

const GetInTouchSection = () => {
  const { language } = useLanguage()

  return (
    <section
      id="contact"
      className="relative min-h-screen border-t-2 lg:border-none border-cinza bg-preta p-4 mb-8 mt-8 flex w-full flex-col space-y-28 items-center justify-center"
    >
      <h1 className="text-2xl text-laranja block lg:hidden">
        {language === "en" ? "Contact" : "Contactar"}{" "}
      </h1>
      <div className="flex flex-col leading-none text-laranja">
        <h1 className="text-[78px] flex lg:text-[120px]">
          {language === "en"
            ? TEXTS.contactTexts.en.title1
            : TEXTS.contactTexts.pt.title1}
        </h1>
        <h1 className="text-[78px] lg:ml-64 lg:text-[120px]">
          {language === "en"
            ? TEXTS.contactTexts.en.title2
            : TEXTS.contactTexts.pt.title2}
        </h1>
      </div>

      <div className="grid w-full grid-cols-1 gap-28 lg:gap-0 lg:grid-cols-2 relative place-items-center">
        {/** INFOS */}

        <h3 className="text-cinza text-[24px]">
          {language === "en"
            ? TEXTS.contactTexts.en.text.text1
            : TEXTS.contactTexts.pt.text.text1}
          <br />
          {language === "en"
            ? TEXTS.contactTexts.en.text.text2
            : TEXTS.contactTexts.pt.text.text2}
          <br />
          {language === "en"
            ? TEXTS.contactTexts.en.text.text3
            : TEXTS.contactTexts.pt.text.text3}
        </h3>

        {/**BUTTON */}
        <div>
          <MotionLink
            href="mailto:paulo.luguenda.dev@gmail.com"
            whileHover={{
              scale: 1.2,
              rotate: "45deg",
            }}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 120,
            }}
            className="z-10 bg-white text-preta w-36 h-36 rounded-full flex items-center justify-center"
          >
            {language === "en" ? "SEND MESSAGE" : "ENVIAR MENSAGEM"}
          </MotionLink>
        </div>
      </div>
    </section>
  )
}

export default GetInTouchSection
