"use client"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { FaBriefcase } from "react-icons/fa"

const experiences = [
  {
    title: "Junior AI Engineer",
    company: "NCSAEL",
    location: "Rawalpindi, Pakistan",
    date: "July 2024 – Sept 2024",
    description: [
      "Had some experience working with .NET Framework and C#.",
      "Gained experience in computer vision using tools such as Deepface, Open CV, YOLO and FastAPI",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "Incendio Solutions",
    location: "Lahore, Pakistan (Remote)",
    date: "Dec 2023 – Feb 2024",
    description: [
      "Developed a plant species classifier using YOLO V8 trained on custom dataset and annotations.",
      "Gained skills in image recognition.",
      "Studied neural networks and their implementations using TensorFlow.",
    ],
  },
  {
    title: "MERN Stack Intern",
    company: "Military College of Signals, NUST",
    location: "Rawalpindi, Pakistan",
    date: "June 2021 - Aug 2021",
    description: [
      "Understand core React.js concepts: components, state, props, and lifecycle methods.",
      "Create reusable and efficient UI components.",
      "Explore state management with React Context API or Redux.",
      "Fetch data from external APIs using Fetch or Axios.",
      "Handle asynchronous operations with async/await or promises.",
    ],
  },
]

export default function Experience() {
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
        <FaBriefcase className="text-[#58a6ff] mr-4" size={30} />
        <h2 className="text-3xl font-bold font-poppins text-gray-100">Work Experience</h2>
      </div>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ delay: index * 0.1 }}
          className="mb-8 bg-[#161b22] p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold text-[#58a6ff]">{exp.title}</h3>
          <p className="text-gray-400">
            {exp.company} | {exp.location}
          </p>
          <p className="text-gray-500 mb-2">{exp.date}</p>
          <ul className="list-disc list-inside text-gray-300">
            {exp.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.section>
  )
}

