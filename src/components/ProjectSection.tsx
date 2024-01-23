"use client"

import Image from "next/image"
import React, { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCoverflow } from "swiper/modules"

import "swiper/css"
// import "swiper/css/effect-fade"import 'swiper/css';
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import Link from "next/link"
import { motion } from "framer-motion"

const projectImages = [
  {
    imageSrc: "/projects/mockup-pronote2.png",
  },
  {
    imageSrc: "/projects/filepsphere-1.png",
  },
  {
    imageSrc: "/projects/pic-blend.png",
  },
]

const ProjectSection = () => {
  return (
    <main className="h-screen lg:border-none border-t-2 border-cinza mt-56 lg:mt-0 flex px-8 lg:px-0 items-center justify-center lg:justify-center lg:items-center bg-black">
      <motion.section className="hidden lg:relative lg:block">
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={"auto"}
          modules={[Autoplay, EffectCoverflow]}
          autoplay
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          className="relative w-full flex lg:items-center lg:justify-center rounded-md bg-preta backdrop-blur-md h-screen"
        >
          {projectImages.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center rounded-lg "
            >
              <Link href="/works" className="cursor-pointer">
                <Image
                  width={1892}
                  height={948}
                  alt="project-image"
                  quality={80}
                  src={image.imageSrc}
                  className=" w-full h-[85vh] rounded-lg object-contain "
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/** FOR MOBILE */}
      <section className="lg:hidden w-full h-full flex items-center justify-center flex-col py-12">
        <Link
          href="/works"
          className="text-[26px] text-center mb-12 underline text-laranja"
        >
          Works
        </Link>

        <div className="gap-4 place-items-center mt-6 grid grid-cols-1 h-full w-full ">
          <Swiper
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={"auto"}
            modules={[Autoplay, EffectCoverflow]}
            autoplay
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            className="relative w-full flex lg:items-center lg:justify-center rounded-md bg-preta backdrop-blur-md h-full"
          >
            {projectImages.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center rounded-lg "
              >
                <Link href="/works" className="cursor-pointer">
                  <Image
                    width={1892}
                    height={948}
                    alt="project-image"
                    quality={80}
                    src={image.imageSrc}
                    className=" w-full h-full rounded-lg object-contain "
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* {projectImages.map((image, index) => (
            <div
              key={index}
              className="h-full rounded-lg w-full bg-transparent relative"
            >
              <Link href="/works" className="cursor-pointer">
                <Image
                  src={image.imageSrc}
                  alt="project image"
                  width={1892}
                  height={948}
                  className="absolute rounded-lg inset-0 w-full h-full object-contain"
                />
              </Link>
            </div>
          ))} */}
        </div>
      </section>
    </main>
  )
}

export default ProjectSection
