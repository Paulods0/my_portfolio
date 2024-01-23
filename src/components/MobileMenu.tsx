"use client"
import React, { useState } from "react"
import { MenuIcon, XIcon } from "lucide-react"
import Link from "next/link"
import useLanguage from "@/context/LanguangeContext"

const nav_links = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "works",
    path: "/works",
  },
  {
    title: "contact",
    path: "/contact",
  },
]
const MobileMenu = () => {
  const { language, setChangeLanguage } = useLanguage()
  const handleClick = () => {
    document.getElementById("about-section")!.scrollIntoView()
  }

  const [isOpen, setIsOpen] = useState(false)
  return (
    <main className="block lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-md bg-laranja"
      >
        <MenuIcon color="#000 " size={20} />
      </button>

      {isOpen && (
        <main>
          <div className="absolute inset-0 bg-black/80 w-full h-screen z-20" />
          <div className="absolute flex items-center bg-laranja justify-center transition-all duration-300 ease-linear z-40 rounded-tl-md rounded-bl-md right-0 top-0 min-h-screen w-full">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 absolute right-10 top-6 rounded-full bg-black w-12 h-12 flex items-center justify-center"
            >
              <XIcon color="white" size={18} />
            </button>
            <div className="w-full h-full flex items-center justify-center">
              <ul className="gap-16 flex flex-col justify-around items-center">
                {nav_links.map((link, index) => (
                  <li key={index}>
                    <Link
                      className="text-[38px] font-semibold text-preta"
                      onClick={() => setIsOpen(false)}
                      href={link.path}
                    >
                      {link.title.toUpperCase()}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    className="text-[38px] font-semibold text-preta"
                    onClick={() => {
                      setIsOpen(false)
                      handleClick()
                    }}
                  >
                    ME
                  </button>
                </li>
                <button
                  className={`text-preta uppercase text-[38px] font-semibold`}
                  onClick={setChangeLanguage}
                >
                  {language === "en" ? "PT" : "EN"}
                </button>
              </ul>
            </div>
          </div>
        </main>
      )}
    </main>
  )
}

export default MobileMenu
