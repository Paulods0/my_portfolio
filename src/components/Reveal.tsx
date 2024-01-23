"use client"
import React, { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

type RevealProps = {
  children: React.ReactNode
}

const Reveal: React.FC<RevealProps> = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
      slideControls.start("visible")
    }
  }, [isInView])

  return (
    <div
      ref={ref}
      className="hidden lg:block lg:w-full"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.5 }}
        className=""
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#ff2e00",
          zIndex: 20,
        }}
      />
    </div>
  )
}

export default Reveal
