"use client"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { FaUserAstronaut } from "react-icons/fa"

export default function About() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="flex items-center mb-6">
        <FaUserAstronaut className="text-[#64ffda] mr-4" size={30} />
        <h2 className="text-3xl font-bold font-poppins text-gray-100">About Me</h2>
      </div>
      <motion.p
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
        className="text-lg text-gray-400 leading-relaxed"
      >
        I am a Software Engineer proficient in the MERN stack, with emerging expertise in machine learning, deep
        learning, and computer vision. I aim to combine full-stack development skills with AI to create innovative
        solutions and impactful applications.
      </motion.p>
    </motion.section>
  )
}

