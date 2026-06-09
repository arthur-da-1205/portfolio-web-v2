import { motion } from "framer-motion";

type Link = {
  text: string;
  href: string;
};

type PersonalWorkCardProps = {
  children?: React.ReactNode;
  datespan: string;
  name: string;
  description: string;
  links?: Link[];
  tags: string[];
};

const PersonalWorkCard: React.FC<PersonalWorkCardProps> = ({ children, datespan, name, description, links, tags }) => {
  return (
    <motion.div
      className="group relative overflow-hidden"
      whileHover={{
        y: -5,
        transition: { duration: 0.3 }
      }}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200/50" />

      {/* Hover glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

      <div className="relative h-full flex flex-col">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          {children}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Date if available */}
          {datespan && (
            <div className="text-sm font-medium text-blue-600 mb-2">
              {datespan}
            </div>
          )}

          {/* Title */}
          <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {name}
          </h4>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-4 flex-1">
            {description}
          </p>

          {/* Links */}
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-4">
              {links.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {link.text}
                  <span className="text-xs">↗</span>
                </a>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full border border-gray-200/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalWorkCard;
