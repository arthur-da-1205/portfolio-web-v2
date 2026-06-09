import SectionHeader from "@components/SectionHeader";
import { motion, type Variants } from "framer-motion";

const experiences = [
  {
    period: "March 2025 ― May 2026",
    title: "Software Developer",
    company: "Abersoft Technologies",
    companyUrl: "https://abersoft.se/",
    description:
      "Collaborated with backend team to develop the Julo web application (https://julo.se). Built Dashboard App for Admin to manage all in Fika App and CS support. Handled both frontend and backend development. (abersoft.se / abersoft.id)",
  },
  {
    period: "August 2022 ― February 2025",
    title: "Frontend Developer",
    company: "PT Solusi Sinergi Digital Tbk (SURGE)",
    companyUrl: "https://www.surge.co.id/",
    description:
      "Build some digital product with React, NestJS and TypeScript. Work with team and mostly in Frontend.",
  },
  {
    period: "May 2021 ― Present",
    title: "Software Developer (Freelancer)",
    company: "Human Creative Solution (HaCS)",
    companyUrl: "https://www.humancreativesolution.id/",
    description:
      "Build web app, web portfolio, mobile app as the client requests. Help client to solve their problem with digital solutions.",
  },
  {
    period: "October 2019 ― May 2021",
    title: "IT Developer",
    company: "PT. Tokoh Indonesia Muda Eksekutif (TIME)",
    companyUrl: "https://thinkindonesia.co.id",
    description:
      "Contributed to build internal software and maintenance them. Help team to process and maintenance digital ads easily.",
  },
  {
    period: "June 2018 ― September 2019",
    title: "Expert (Contract)",
    company:
      "4th Commission of Representatives of the Republic of Indonesia (DPR-RI)",
    companyUrl: "https://www.dpr.go.id/",
    description:
      "Contribute to process and present data to make decision for some case in agricultural field.",
  },
  {
    period: "October 2016 ― July 2017",
    title: "Technical Consultant",
    company: "PT. Omega Teknologi Indonesia (Omega Software)",
    companyUrl: "http://dev.omegasoft.co.id/",
    description:
      "Training client how to use the apps. Maintenance it, and fixing some bug and problem for client.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const WorkExperience = () => {
  return (
    <div className="mt-8 w-full">
      <SectionHeader name="work experience" />

      <motion.div
        className="mt-12 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-500 dark:from-blue-500 dark:to-purple-600 opacity-30" />

        {/* Experience Items */}
        <div className="space-y-12 md:space-y-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-ping opacity-50" />
              </div>

              {/* Content Card */}
              <div
                className={`relative flex-1 ${index % 2 === 0 ? "md:ml-12" : "md:mr-12 ml-12 md:ml-0"}`}
              >
                <div className="relative group">
                  {/* Background gradient */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-25 dark:group-hover:opacity-15 transition duration-300" />

                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-200/50 dark:hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl">
                    {/* Date Badge */}
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                      {experience.period}
                    </div>

                    <div className="mt-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.title}
                      </h3>

                      {experience.companyUrl ? (
                        <a
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1 group/company"
                        >
                          {experience.company}
                          <svg
                            className="w-4 h-4 transition-transform group-hover/company:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-base font-semibold text-gray-600 dark:text-gray-300">
                          {experience.company}
                        </span>
                      )}

                      <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WorkExperience;
