"use client"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import React from "react"

type contentType = "about" | "hobbies" | "goals"
const MotionLink = motion(Link)

const AboutContent = ({
  content,
}: {
  content?: {
    id: string
    title: string
    text: string
    links?: { title: string; path: string }[]
  }
}) => {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-between ">
        <AnimatePresence mode="wait">
          <>
            <motion.h1
              key={content?.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="transition-all duration-300 text-left text-laranja text-[28px]"
            >
              {content?.title.toUpperCase()}
            </motion.h1>

            <motion.p
              key={content?.text}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="transition-all duration-300 lg:w-[420px] text-[12x] lg:text-base w-[340px] text-cinza"
            >
              {content?.text}
            </motion.p>
            <br />
            <br />
            {content?.id === "about" && (
              <div className="hidden lg:flex space-x-2">
                <p className="text-cinza underline font-semibold mr-4">
                  My links:{" "}
                </p>
                {content.links?.map((link, index) => (
                  <div key={index} className="hidden lg:flex space-x-2">
                    <MotionLink
                      whileHover={{
                        opacity: 0.5,
                      }}
                      transition={{ duration: 0.3 }}
                      target="_blank"
                      href={link.path}
                      className="text-laranja "
                    >
                      {link.title}
                    </MotionLink>
                  </div>
                ))}
              </div>
            )}
          </>
        </AnimatePresence>
        {/* <motion.h1 className="transition-all duration-300 text-left text-laranja text-[28px] ">
          {content?.title.toUpperCase()}
        </motion.h1>
        <p className="transition-all duration-300 w-[420px] text-cinza">
          {content?.text}
        </p> */}
      </div>
    </>
  )
}

export default AboutContent
