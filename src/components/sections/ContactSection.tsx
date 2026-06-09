import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Send email using FormSubmit API (no backend needed)
      const response = await fetch("https://formspree.io/f/xqvzpzyd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage(
          "Message sent successfully! I'll get back to you soon.",
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitMessage(""), 5000);
      } else {
        setSubmitMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative"
    >
      {/* Background decoration */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-blue-100 to-transparent dark:from-blue-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tl from-purple-100 to-transparent dark:from-purple-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Feel free to reach out to me through the
            form below or contact me directly.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project inquiry"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {/* Submit Message */}
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg text-sm font-medium ${
                  submitMessage.includes("successfully")
                    ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-900/50"
                    : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900/50"
                }`}
              >
                {submitMessage}
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Alternative Contact */}
        <motion.div
          variants={itemVariants}
          className="max-w-2xl mx-auto text-center border-t border-gray-200/50 dark:border-gray-800/50 pt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Or reach out directly via:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:arthur.darwanto@gmail.com"
              className="px-6 py-2 text-sm font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              Email
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=6281913581675&text=Hi%20Arthur,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-sm font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://linkedin.com/in/arthur-darwanto"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-sm font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
