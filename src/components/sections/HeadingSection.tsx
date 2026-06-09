import { motion } from "framer-motion";
import Signature from "@components/SIgnature";
import GithubSVG from "@assets/github-svg";
import InstagramSVG from "@assets/instagram-svg";
import LinkedInSVG from "@assets/linkedin-svg";
import photo from "@assets/photo_profile.png";

const HeadingSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  return (
    <motion.div
      className="relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background gradient decoration */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative z-10 lg:flex lg:items-center lg:gap-12">
        {/* Profile Image Section */}
        <motion.div className="mb-8 lg:mb-0 lg:w-2/5" variants={itemVariants}>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
            <img
              src={photo.src}
              alt="Arthur Darwanto"
              className="relative w-full max-w-[280px] mx-auto lg:max-w-[320px] rounded-2xl shadow-2xl object-cover aspect-square"
              width={320}
              height={320}
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div className="lg:w-3/5" variants={itemVariants}>
          {/* Signature */}
          <motion.div className="mb-4" variants={itemVariants}>
            <Signature className="w-48 text-neutral-600" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            variants={itemVariants}
          >
            <span className="text-gray-900">Hello! I'm</span>{" "}
            <br className="hidden md:block" />
            <span className="relative inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Arthur Darwanto
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl"
            variants={itemVariants}
          >
            I'm a{" "}
            <span className="font-semibold text-gray-900">
              Software Developer
            </span>{" "}
            focused on building scalable web applications with{" "}
            <span className="font-semibold text-gray-900">React</span> and{" "}
            <span className="font-semibold text-gray-900">Node.js</span>. I
            create clean, efficient code using modern technologies like
            TypeScript and follow best practices to deliver robust solutions.
          </motion.p>

          {/* Social Links and CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            variants={itemVariants}
          >
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/arthur-da-1205"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="GitHub"
              >
                <GithubSVG />
              </a>
              <a
                href="https://linkedin.com/in/arthur-darwanto"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <LinkedInSVG />
              </a>
              <a
                href="https://www.instagram.com/arthurdarwanto"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <InstagramSVG />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="https://drive.google.com/file/d/1PUfJ86RgjYb0_knn8Be-ZBhduwZAfSS1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Download CV
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=6281913581675&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeadingSection;
