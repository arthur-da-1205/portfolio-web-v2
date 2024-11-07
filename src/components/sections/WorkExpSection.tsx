import SectionHeader from "@components/SectionHeader";
import { motion, type Variants } from "framer-motion";

const wrapper: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.22,
    },
  },
};

const text: Variants = {
  offscreen: {
    opacity: 0,
    x: -10,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.22,
    },
  },
};

const WorkExperience = () => {
  return (
    <div className="my-8">
      <SectionHeader name="work experience" />
      <div className="mt-8 grid gap-8 sm:mt-4">
        <motion.div
          variants={wrapper}
          initial="offscreen"
          whileInView="onscreen"
          className="grid gap-2"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span variants={text} className="text-sm font-normal leading-5 text-gray-500">
            August 2022 ― Present
          </motion.span>
          <motion.h4 variants={text} className="text-lg font-medium leading-6 text-gray-900">
            Frontend Developer @
            <a
              target="_blank"
              href="https://www.surge.co.id/"
              className="group underline decoration-gray-400 decoration-dotted underline-offset-4 transition-colors hover:text-gray-500"
            >
              PT Solusi Sinergi Digital Tbk (SURGE)
            </a>
          </motion.h4>
          <motion.p variants={text} className="max-w-lg text-base font-normal leading-6 text-gray-500">
            Build some digital rpoduct with React, NestJS and TypeScript. Work with team and mostly in Frontend.
          </motion.p>
        </motion.div>
      </div>

      <div className="mt-8 grid gap-8 sm:mt-4">
        <motion.div
          variants={wrapper}
          initial="offscreen"
          whileInView="onscreen"
          className="grid gap-2"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span variants={text} className="text-sm font-normal leading-5 text-gray-500">
            May 2021 ― Present
          </motion.span>
          <motion.h4 variants={text} className="text-lg font-medium leading-6 text-gray-900">
            Software Developer (Freelancer) @
            <a
              target="_blank"
              href=""
              className="group underline decoration-gray-400 decoration-dotted underline-offset-4 transition-colors hover:text-gray-500"
            >
              Devoluiton
            </a>
          </motion.h4>
          <motion.p variants={text} className="max-w-lg text-base font-normal leading-6 text-gray-500">
            Build web app, web portfolio, mobile app as the client requests. Help client to solve their problem with digital
            solutions.
          </motion.p>
        </motion.div>
      </div>

      <div className="mt-8 grid gap-8 sm:mt-4">
        <motion.div
          variants={wrapper}
          initial="offscreen"
          whileInView="onscreen"
          className="grid gap-2"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span variants={text} className="text-sm font-normal leading-5 text-gray-500">
            October 2019 ― May 2021
          </motion.span>
          <motion.h4 variants={text} className="text-lg font-medium leading-6 text-gray-900">
            IT Developer @
            <a
              target="_blank"
              href="https://thinkindonesia.co.id"
              className="group underline decoration-gray-400 decoration-dotted underline-offset-4 transition-colors hover:text-gray-500"
            >
              PT. Tokoh Indonesia Muda Eksekutif (TIME)
            </a>
          </motion.h4>
          <motion.p variants={text} className="max-w-lg text-base font-normal leading-6 text-gray-500">
            Contributed to build internal software and maintenance them. Help team to process and maintenance digital ads
            easily.
          </motion.p>
        </motion.div>
      </div>
      <div className="mt-8 grid gap-8 sm:mt-4">
        <motion.div
          variants={wrapper}
          initial="offscreen"
          whileInView="onscreen"
          className="grid gap-2"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span variants={text} className="text-sm font-normal leading-5 text-gray-500">
            June 2018 ― September 2019
          </motion.span>
          <motion.h4 variants={text} className="text-lg font-medium leading-6 text-gray-900">
            Expert (Contract) @
            <a
              target="_blank"
              href="https://www.dpr.go.id/"
              className="group underline decoration-gray-400 decoration-dotted underline-offset-4 transition-colors hover:text-gray-500"
            >
              4th Commission of Representatives of the Republic of Indonesia (DPR-RI)
            </a>
          </motion.h4>
          <motion.p variants={text} className="max-w-lg text-base font-normal leading-6 text-gray-500">
            Contribute to proccess and present data to make decission for some case in agricultural field.
          </motion.p>
        </motion.div>
      </div>
      <div className="mt-8 grid gap-8 sm:mt-4">
        <motion.div
          variants={wrapper}
          initial="offscreen"
          whileInView="onscreen"
          className="grid gap-2"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span variants={text} className="text-sm font-normal leading-5 text-gray-500">
            October 2016 ― Juli 2017
          </motion.span>
          <motion.h4 variants={text} className="text-lg font-medium leading-6 text-gray-900">
            Technical Consultant @
            <a
              target="_blank"
              href="http://dev.omegasoft.co.id/"
              className="group underline decoration-gray-400 decoration-dotted underline-offset-4 transition-colors hover:text-gray-500"
            >
              PT. Omega Teknologi Indonesia (Omega Software)
            </a>
          </motion.h4>
          <motion.p variants={text} className="max-w-lg text-base font-normal leading-6 text-gray-500">
            Training client how to use the apps. Maintenance it, and fixing some bug and problem for client.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkExperience;
