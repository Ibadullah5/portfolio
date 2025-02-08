"use client"
import { motion } from "framer-motion"

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0d1117]">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="small-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1f2937" strokeWidth="0.5" opacity="0.3" />
          </pattern>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#small-grid)" />
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1f2937" strokeWidth="1" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <motion.div
        className="absolute inset-0"
        initial={{ backgroundPosition: "0 0" }}
        animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
        style={{
          background: "radial-gradient(circle, rgba(88,166,255,0.05) 0%, rgba(13,17,23,0) 70%)",
          backgroundSize: "100px 100px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1117] to-[#0d1117] opacity-90" />
    </div>
  )
}

export default BackgroundAnimation

