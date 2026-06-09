import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Clients", id: "clients" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    // Get the section element
    let element: HTMLElement | null = null;

    if (sectionId === "heading") {
      element = document.querySelector("[data-section='heading']");
    } else if (sectionId === "about") {
      element = document.querySelector("[data-section='about']");
    } else {
      element = document.querySelector(`[data-section='${sectionId}']`);
    }

    if (element) {
      // Get the element's position and subtract header height
      const headerHeight = 80; // Approximate header height
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        let element: HTMLElement | null = null;
        if (item.id === "about") {
          element = document.querySelector("[data-section='about']");
        } else {
          element = document.querySelector(`[data-section='${item.id}']`);
        }
        return {
          id: item.id,
          element,
        };
      });

      const headerHeight = 100;
      const scrollPosition = window.scrollY + headerHeight;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop =
            section.element.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= sectionTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50"
      >
        <div className="max-w-screen-xl mx-auto px-4 py-4 lg:py-6 flex items-center justify-between">
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("heading")}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">AD</span>
            </div>
            <span className="font-bold text-gray-900 dark:text-white hidden sm:inline">
              Arthur Darwanto
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900 dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md"
            >
              <div className="px-4 py-4 flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeSection === item.id
                        ? "bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer */}
      <div className="h-20 lg:h-28" />
    </>
  );
};

export default Navigation;
