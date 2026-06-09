import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // SVG Icons
  const GithubIcon = () => (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );

  const LinkedinIcon = () => (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.364c.425-.654 1.185-1.586 2.882-1.586 2.105 0 3.685 1.375 3.685 4.331v5.537zM5.337 9.433c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.954-1.715 1.184 0 1.915.76 1.915 1.715 0 .953-.731 1.715-1.954 1.715zm1.946 11.019H3.39V9.807h3.893v10.645zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
    </svg>
  );

  const MailIcon = () => (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );

  const socialLinks = [
    {
      icon: GithubIcon,
      href: "https://github.com/arthur-da-1205",
      label: "GitHub",
    },
    {
      icon: LinkedinIcon,
      href: "https://linkedin.com/in/arthur-darwanto",
      label: "LinkedIn",
    },
    {
      icon: InstagramIcon,
      href: "https://www.instagram.com/arthurdarwanto",
      label: "Instagram",
    },
    {
      icon: MailIcon,
      href: "https://api.whatsapp.com/send/?phone=6281913581675",
      label: "WhatsApp",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="border-t border-gray-200/50 dark:border-gray-800/50 mt-12 lg:mt-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-screen-xl mx-auto px-4 py-12"
      >
        <div className="grid md:grid-cols-3 gap-8 mb-8 items-center">
          {/* Left - Branding */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Arthur Darwanto
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Full-stack Developer | Indonesia
            </p>
          </motion.div>

          {/* Center - Quick Links */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex justify-center gap-6">
              {[
                { label: "About", href: "#about" },
                { label: "Work", href: "#portfolio" },
                { label: "Clients", href: "#clients" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-end gap-3"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700/50 transition-all"
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-6"
        />

        {/* Bottom - Copyright */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-xs text-gray-500 dark:text-gray-600">
            © {currentYear} Arthur Darwanto. Made with passion and code.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
