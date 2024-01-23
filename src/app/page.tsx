"use client"
import AboutSection from "@/components/AboutSection"
import Footer from "@/components/Footer"
import GetInTouchSection from "@/components/GetInTouchSection"
import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import ProjectSection from "@/components/ProjectSection"
import SkillsSection from "@/components/SkillsSection"
import React, { useState, useEffect } from "react"

export default function Home() {
  const [section, setSection] = useState<
    "skills" | "works" | "about" | "contact" | null
  >(null)

  const handleScroll = () => {
    let currScrollPosition = Number(window.scrollY.toFixed(0))

    if (currScrollPosition > 641 && currScrollPosition < 3030) {
      setSection("skills")
    } else if (currScrollPosition > 3031 && currScrollPosition < 3331) {
      setSection("works")
    } else if (currScrollPosition > 3332 && currScrollPosition < 4517) {
      setSection("about")
    } else if (currScrollPosition > 4518) {
      setSection("contact")
    } else {
      setSection(null)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <main className="w-full">
      <Navbar section={section} />
      <section className="w-full">
        <HeroSection />
        <SkillsSection />
        <ProjectSection />
        <AboutSection />
        <GetInTouchSection />
      </section>
      <Footer />
    </main>
  )
}
