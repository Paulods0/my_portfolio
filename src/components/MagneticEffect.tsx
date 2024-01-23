"use client"
import { motion } from "framer-motion"
import React, { useRef, useState } from "react"

const MagneticEffect = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const ref = useRef<HTMLDivElement>(null)

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    if (ref.current) {
      const { width, height, left, top } = ref.current.getBoundingClientRect()
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      setPosition({ x, y })
    }
  }
  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position
  return (
    <motion.div
      className="cursor-pointer z-10 bg-background/30 w-[50px] h-[50px] backdrop-blur-2xl p-2 flex items-center justify-center rounded-md"
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      {children}
    </motion.div>
  )
}

export default MagneticEffect
