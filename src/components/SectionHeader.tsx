import { motion } from "framer-motion";

type SectionHeaderProps = {
  name: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ name }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex items-center gap-4"
    >
      <div className="flex items-center gap-4 flex-1">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {name}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent" />
      </div>
      {/* Decorative dot */}
      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
    </motion.div>
  );
};

export default SectionHeader;
