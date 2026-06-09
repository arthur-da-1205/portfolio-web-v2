import SectionHeader from "@components/SectionHeader";
import { motion } from "framer-motion";
import julo from "@assets/clients/julo.png";
import fika from "@assets/clients/fika.svg";
import alkautsar from "@assets/clients/alkautsar.png";
import hamparan from "@assets/clients/hamparan.png";
import sdmudaba from "@assets/clients/sdmudaba.png";
import azarine from "@assets/clients/azarine.png";

const clients = [
  {
    name: "Julo",
    logo: julo,
  },
  {
    name: "Fika Group",
    logo: fika,
  },
  {
    name: "Al-Kautsar Islamic Boarding School",
    logo: alkautsar,
  },
  {
    name: "Hamparan",
    logo: hamparan,
  },
  {
    name: "SD Muhammadiyah 2 Socah Bangkalan",
    logo: sdmudaba,
  },
  {
    name: "Azarine",
    logo: azarine,
  },
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

const ClientsSection = () => {
  return (
    <div className="flex flex-col gap-6 w-full mt-8">
      <SectionHeader name="clients" />

      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="group flex flex-col gap-2"
            >
              {/* Logo Card */}
              <div className="relative overflow-hidden">
                {/* Background - light gray for better contrast */}
                <div className="absolute inset-0 bg-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl opacity-100 transition-opacity" />

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-200/50 to-purple-200/50 dark:from-blue-500/20 dark:to-purple-500/20 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative p-4 md:p-6 border border-gray-200/50 dark:border-gray-600/50 rounded-xl hover:border-blue-300/50 dark:hover:border-blue-400/50 transition-colors flex items-center justify-center min-h-[120px] md:min-h-[140px]">
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      src={client.logo.src || client.logo || ""}
                      alt={client.name}
                      className="w-full h-auto max-h-[80px] md:max-h-[100px] object-contain filter dark:brightness-75 hover:dark:brightness-90 transition-all duration-300"
                      title={client.name}
                    />
                  </div>
                </div>
              </div>

              {/* Client Name Label */}
              <div className="text-center px-2">
                <p className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 line-clamp-2 leading-tight">
                  {client.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ClientsSection;
