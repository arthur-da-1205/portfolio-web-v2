import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const highlights = [
    { number: "5+", label: "Years of Experience" },
    { number: "15+", label: "Projects Completed" },
    { number: "8+", label: "Clients Served" },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative"
    >
      {/* Background decoration */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-blue-100 to-transparent dark:from-blue-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-tl from-purple-100 to-transparent dark:from-purple-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <motion.div className="flex flex-col gap-6" variants={itemVariants}>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
          </div>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            I'm a <span className="font-semibold text-gray-900 dark:text-white">Full-stack Developer</span> with over <span className="font-semibold text-gray-900 dark:text-white">5 years of experience</span> building end-to-end digital solutions. My journey spans across backend systems, modern web applications, and mobile development—delivering robust, scalable solutions that solve real-world problems.
          </motion.p>

          <motion.div className="space-y-4" variants={itemVariants}>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Backend Expertise
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Specialized in Node.js, Express.js, and NestJS with strong database design skills using PostgreSQL and MySQL. I build scalable, maintainable backend systems that handle complex business logic efficiently.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Frontend Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Expert in React.js, Next.js, and modern web frameworks. I create intuitive, performant user interfaces with attention to responsive design and user experience best practices.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                TypeScript & Best Practices
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Proficient in TypeScript ecosystem across the entire stack. I emphasize clean code, testing, and architectural patterns to ensure maintainability and long-term code quality.
              </p>
            </div>
          </motion.div>

          <motion.a
            href="https://api.whatsapp.com/send/?phone=6281913581675&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 w-fit px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 transition-all duration-300 hover:shadow-lg group"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Right: Statistics */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          variants={itemVariants}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              {/* Background gradient */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-300" />

              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50">
                <motion.div
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: index * 0.1 }}
                >
                  {item.number}
                </motion.div>
                <p className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-400">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
