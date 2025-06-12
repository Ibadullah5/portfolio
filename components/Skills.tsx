"use client"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { FaTools } from "react-icons/fa"

const skills = {
  Languages: ["JavaScript", "Python", "C++", "C#", "Java", "SQL", "Solidity", "HTML", "CSS", "TailwindCSS", "YAML", "HCL"],
  "Libraries/Frameworks/Databases": [
    "React",
    "Express",
    "Next",
    "FastAPI",
    "ShadCN",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Node",
    "SQL Server",
    "Cloud Computing",
    "Docker",
    "Kubernetes",
    "Numpy",
    "Scikit Learn",
    "TensorFlow",
    "YOLO V8",
    "Deepface",
  ],
  Tools: ["Amazon Web Services", "Git", "Vercel", "Docker", "Figma", "CVAT"],
  "Soft Skills": [
    "Communication",
    "Leadership",
    "Time Management",
    "Adaptability",
    "Problem Solving",
    "Teamwork",
    "Creativity",
  ],
}

export default function Skills() {
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
        <FaTools className="text-[#64ffda] mr-4" size={30} />
        <h2 className="text-3xl font-bold font-poppins text-gray-100">Skills</h2>
      </div>
      {Object.entries(skills).map(([category, skillList], index) => (
        <motion.div
          key={category}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ delay: index * 0.1 }}
          className="mb-6"
        >
          <h3 className="text-xl font-semibold mb-2 text-[#64ffda]">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skillList.map((skill, i) => (
              <span key={i} className="bg-[#233554] text-gray-300 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.section>
  )
}

