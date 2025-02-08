"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const education = {
  degree: "Bachelor's in software engineering",
  institution: "National University of Science and Technology (NUST), Pakistan",
  date: "Oct 2021 - Present",
  gpa: "3.48 CGPA",
};

const certifications = [
  {
    name: "Advanced React",
    provider: "Meta on Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/XBE5K23R8GYD?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    name: "Machine Learning Specialization",
    provider: "Andrew NG and DeepLearning AI",
    link: "https://coursera.org/share/a1f298e125bc50636796295af8ee5478",
  },
  {
    name: "Supervised Machine Learning",
    provider: "Andrew NG and DeepLearning AI",
    link: "https://www.coursera.org/account/accomplishments/verify/6J2EF43DLPJC?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    name: "Advanced Learning Algorithms",
    provider: "Andrew NG and DeepLearning AI",
    link: "https://coursera.org/share/bdc27bfed4d0d3d34cf30704a6fa8b81",
  },
  {
    name: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    provider: "Andrew NG and DeepLearning AI",
    link: "https://www.coursera.org/account/accomplishments/verify/GQK8YA4110IW?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
];

export default function Education() {
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
        <FaGraduationCap className="text-[#64ffda] mr-4" size={30} />
        <h2 className="text-3xl font-bold font-poppins text-gray-100">
          Education & Certifications
        </h2>
      </div>
      <motion.div
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
        transition={{ delay: 0.1 }}
        className="mb-8 bg-[#112240] p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-xl font-semibold text-[#64ffda]">
          {education.degree}
        </h3>
        <p className="text-gray-300">{education.institution}</p>
        <p className="text-gray-400">{education.date}</p>
        <p className="text-gray-400">{education.gpa}</p>
      </motion.div>
      <motion.div
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center mb-4">
          <FaCertificate className="text-[#64ffda] mr-4" size={24} />
          <h3 className="text-xl font-semibold text-gray-100">
            Certifications
          </h3>
        </div>
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="mb-2"
          >
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64ffda] hover:text-[#4cd7b4] transition duration-300"
            >
              {cert.name}
            </a>
            <p className="text-gray-400 text-sm">{cert.provider}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
