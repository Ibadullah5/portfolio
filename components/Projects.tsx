"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FaCode } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "Work Ease (Online Job Portal App)",
    description: [
      "Utilized MERN Stack for a responsive frontend and robust backend.",
      "Designed layouts with Tailwind.",
      "Implemented front-end routing using React Router.",
      "Integrated custom and Google authentication.",
      "Enabled users to search, apply for jobs, and receive application updates.",
      "Allowed companies to post jobs and view applicants.",
    ],
    links: {
      source: "https://workease-bese27c.vercel.app/",
      demo: "https://github.com/Ibadullah5/JobPortal-with-MERN",
    },
    image: "/images/workease.png",
  },
  {
    title: "Horizon (Banking App)",
    description: [
      "Used Next JS for Client and Server Side Rendering and file based routing.",
      "Used shadcn library for completely customizable UI elements.",
      "Used plaid for getting bank account information and Dwolla as payment processor.",
      "Sentry as a BaaS for database, authentication and session storage.",
    ],
    links: {
      source: "https://github.com/Ibadullah5/NextJS_Banking_App",
      demo: "https://banking-next-js.vercel.app/",
    },
    image: "/images/horizon.png",
  },
  {
    title: "Pulsse (Measure business analytics and ensure security)",
    description: [
      "A web app that measures the incomings and outgoings of a shopping store/showroom.",
      "Keep track of gender ratio and churn rate.",
      "Uses YOLO and Deepface for people and facial recognition.",
    ],
    links: {
      source: "#",
      demo: "#",
    },
    image: "/images/pulsse.png",
  },
  {
    title: "Medlar Media (Website for IG Influencers)",
    description: [
      "Fully responsive website for all types of devices.",
      "React Router for routing.",
      "Advanced CSS techniques.",
    ],
    links: {
      source: "https://github.com/Ibadullah5/medlar-media",
      demo: "https://medlar-media.vercel.app/",
    },
    image: "/images/medlarmedia.png",
  },
];

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
        <FaCode className="text-[#64ffda] mr-4" size={30} />
        <h2 className="text-3xl font-bold font-poppins text-gray-100">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={500}
              height={200}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#64ffda]">
              {project.title}
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-400">
              {project.description.map((item, i) => (
                <li key={i} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
            {project.links.source !== "#" && (
              <div className="flex space-x-4">
                <a
                  href={project.links.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64ffda] hover:text-[#4cd7b4] transition duration-300"
                >
                  Source Code
                </a>
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64ffda] hover:text-[#4cd7b4] transition duration-300"
                >
                  Live Demo
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
