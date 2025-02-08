"use client"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { FaEnvelope } from "react-icons/fa"

export default function Contact() {
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
        <FaEnvelope className="text-[#58a6ff] mr-4" size={30} />
        <h2 className="text-3xl font-bold font-poppins text-gray-100">Contact</h2>
      </div>
      <motion.div
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
        transition={{ delay: 0.1 }}
        className="text-center"
      >
        <p className="text-lg mb-4 text-gray-300">Feel free to reach out to me for any inquiries or opportunities.</p>
        <a
          href="mailto:ibadullahriaz5@gmail.com"
          className="bg-[#58a6ff] text-[#0d1117] px-6 py-3 rounded-full font-semibold hover:bg-[#f0883e] transition duration-300"
        >
          ibadullahriaz5@gmail.com
        </a>
      </motion.div>
    </motion.section>
  )
}

