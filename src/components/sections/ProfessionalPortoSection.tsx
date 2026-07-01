import SectionHeader from "@components/SectionHeader";
import { motion } from "framer-motion";
import PersonalWorkCard from "../PersonalWorkCard";
import linistore from "@assets/linistore.png";
import linimitra from "@assets/linimitra.png";
import liniseller1 from "@assets/liniseller1.png";
import sobatTani from "@assets/sobat_tani.png";
import julo from "@assets/all_julo.png";
import fika from "@assets/all_fika.png";
import opero from "@assets/all_opero.png";
import archviz from "@assets/all_archviz.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProfessionalPortfolio = () => {
  return (
    <div className="mt-8 flex flex-col gap-8">
      <SectionHeader name="professional work" />

      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <PersonalWorkCard
            datespan=""
            name="ArchViz AI"
            description="AI-powered architecture visualization tool. Turn design ideas into polished architectural concepts.
            Describe an interior, facade, room mood, or spatial concept. ArchViz AI generates visual references you can review, refine, and save into a persistent project gallery."
            tags={[
              "Next.js",
              "Typescript",
              "Tailwind CSS",
              "Shadcn UI",
              "REST API",
              "SQLite",
              "Pollinations.ai",
            ]}
          >
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300">
              <img
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                src={archviz.src}
                alt="Archviz"
              />
            </div>
          </PersonalWorkCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <PersonalWorkCard
            datespan=""
            name="Opero"
            description="Retail Operation Platform"
            tags={[
              "React",
              "Typescript",
              "Tailwind CSS",
              "Shadcn UI",
              "GraphQL",
              "Apollo",
              "NestJS",
              "Prisma",
              "React Query",
            ]}
          >
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300">
              <img
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                src={opero.src}
                alt="Opero"
              />
            </div>
          </PersonalWorkCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <PersonalWorkCard
            datespan=""
            name="Julo"
            description="Easy booking of bicycle service. Find professional bike repair shops near you"
            links={[
              {
                text: "Julo",
                href: "https://julo.se",
              },
            ]}
            tags={[
              "Next.js",
              "Typescript",
              "Tailwind CSS",
              "Shadcn UI",
              "REST API",
              "NestJS",
              "Prisma",
              "React Query",
            ]}
          >
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300">
              <img
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                src={julo.src}
                alt="Julo"
              />
            </div>
          </PersonalWorkCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <PersonalWorkCard
            datespan=""
            name="Fika"
            description="Fika is a Social Membership Club for people who’d rather meet in real life. We organise your first meeting — you just show up."
            links={[
              {
                text: "Fika Connects",
                href: "https://fikaconnects.com",
              },
            ]}
            tags={["Next.js", "Typescript", "Tailwind CSS"]}
          >
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300">
              <img
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                src={fika.src}
                alt="Fika Connects"
              />
            </div>
          </PersonalWorkCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <PersonalWorkCard
            datespan=""
            name="Lini Store"
            description="E-commerce with social commerce concept (group buying). B2C Platform for display product from UMKM/SME."
            links={[
              {
                text: "Lini Store",
                href: "https://linistore.id",
              },
            ]}
            tags={[
              "React",
              "Typescript",
              "Vite",
              "Ant Design",
              "Tailwind CSS",
              "GraphQL",
              "Less",
            ]}
          >
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300">
              <img
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                src={linistore.src}
                alt="Lini Store"
              />
            </div>
          </PersonalWorkCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <PersonalWorkCard
            datespan=""
            name="Lini Mitra"
            description="Freelance Canvasser App is a versatile tool designed to streamline the canvassing process for freelance workers."
            links={[
              {
                text: "Lini Mitra Web",
                href: "https://mitra.linistore.id",
              },
              {
                text: "Play Store",
                href: "https://play.google.com/store/apps/details?id=id.lini.mitra",
              },
            ]}
            tags={[
              "React",
              "Typescript",
              "Vite",
              "Chakra UI",
              "SCSS",
              "GraphQL",
              "PWA",
              "Capacitor by Ionic",
            ]}
          >
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 hover:from-green-100 hover:to-blue-100 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300">
              <img
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                src={linimitra.src}
                alt="Lini Mitra"
              />
            </div>
          </PersonalWorkCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <PersonalWorkCard
            datespan=""
            name="Lini Seller"
            description="Seller Center for UMKM/SME to manage their product and order. The product will be displayed in Lini Store and Lini Mitra"
            links={[
              {
                text: "Lini Seller",
                href: "https://seller.linistore.id",
              },
              {
                text: "Play Store",
                href: "https://drive.google.com/file/d/1K0zdrp0ZRBmgHRAhDiao-tDJnyKEgJZw/view?usp=share_link",
              },
            ]}
            tags={[
              "Angular",
              "Typescript",
              "Ant Design",
              "SCSS",
              "GraphQL",
              "PWA",
              "Capacitor by Ionic",
            ]}
          >
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 hover:from-purple-100 hover:to-pink-100 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300">
              <img
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                src={liniseller1.src}
                alt="Lini Seller"
              />
            </div>
          </PersonalWorkCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <PersonalWorkCard
            datespan=""
            name="Sobat Tani App"
            description="An application that helps farmers to meet their garden needs. Farmers can also consult with argonomists to get the best harvest results."
            tags={[
              "React",
              "Typescript",
              "Chakra UI",
              "SCSS",
              "Restful API",
              "PWA",
              "Capacitor by Ionic",
            ]}
          >
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-50 to-green-50 dark:from-gray-800 dark:to-gray-900 hover:from-yellow-100 hover:to-green-100 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300">
              <img
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                src={sobatTani.src}
                alt="Sobat Tani App"
              />
            </div>
          </PersonalWorkCard>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfessionalPortfolio;
