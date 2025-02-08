"use client"
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative z-10"
      >
        <h1 className="text-5xl font-bold font-poppins mb-4 text-[#58a6ff]">Ibadullah Riaz</h1>
        <p className="text-2xl text-gray-400 mb-6">Software Engineer | AI Enthusiast</p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center space-x-4"
        >
          <a
            href="https://linkedin.com/in/ibadullah-riaz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0d1117] text-[#58a6ff] p-3 rounded-full border border-[#58a6ff] hover:bg-[#58a6ff] hover:text-[#0d1117] transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Ibadullah5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0d1117] text-[#58a6ff] p-3 rounded-full border border-[#58a6ff] hover:bg-[#58a6ff] hover:text-[#0d1117] transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://leetcode.com/u/Ibadullah5/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0d1117] text-[#58a6ff] p-3 rounded-full border border-[#58a6ff] hover:bg-[#58a6ff] hover:text-[#0d1117] transition duration-300"
          >
            <SiLeetcode size={24} />
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

