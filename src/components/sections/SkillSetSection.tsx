import SectionHeader from "@components/SectionHeader";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript/TypeScript", level: "advanced" },
  { name: "ReactJS/NextJS", level: "advanced" },
  { name: "NodeJS/Express/NestJS", level: "intermediate" },
  { name: "CSS/SASS/LESS", level: "intermediate" },
  { name: "REST API/GraphQL", level: "intermediate" },
  { name: "Tailwind CSS", level: "advanced" },
  { name: "PostgreSQL", level: "intermediate" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const SkillSetSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 w-full mt-8">
      <SectionHeader name="my skill sets" />

      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="group relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl opacity-100 group-hover:opacity-100 transition-opacity" />

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-200/50 to-purple-200/50 dark:from-blue-500/20 dark:to-purple-500/20 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative p-4 border border-gray-200/50 dark:border-gray-600/50 rounded-xl hover:border-blue-300/50 dark:hover:border-blue-400/50 transition-colors">
                <div className="flex flex-col items-center text-center">
                  <span className="text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </span>

                  {/* Skill level indicator */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          level <=
                          (skill.level === "advanced"
                            ? 5
                            : skill.level === "intermediate"
                              ? 3
                              : 2)
                            ? "bg-blue-500"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      />
                    ))}
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

export default SkillSetSection;
