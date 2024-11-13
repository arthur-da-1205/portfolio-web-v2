/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as addAttribute, d as renderHead, e as renderSlot, b as createAstro, f as renderComponent } from '../chunks/astro/server_Q8hiwXqQ.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import classNames from 'classnames';
export { renderers } from '../renderers.mjs';

const Divider = () => {
  return /* @__PURE__ */ jsx("div", { className: "relative mx-0 py-8 lg:-mx-10", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center", "aria-hidden": "true", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { duration: 0.8, delay: 0.8 },
      viewport: { once: true },
      className: "w-full border-t border-dashed border-gray-300"
    }
  ) }) });
};

const Signature = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    height: "30",
    viewBox: "1.3200000524520874 15.960000038146973 164.67999267578125 27.15999984741211",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M14.32 38.44L14.32 38.44Q14.16 38.60 13.68 38.92Q13.20 39.24 12.92 39.44L12.92 39.44Q12.64 39.52 10.96 40.24L10.96 40.24Q9.76 40.76 8.80 40.76L8.80 40.76Q8.64 40.76 8.16 40.68L8.16 40.68L7.92 40.36Q7.60 39.96 7.60 39.32L7.60 39.32Q7.64 38.72 7.64 38.48L7.64 38.48Q7.64 38.32 7.56 38.08L7.56 38.08Q6.64 38.92 6.20 39.32Q5.76 39.72 5.24 40.36L5.24 40.36Q4.52 40.88 3.80 41.44L3.80 41.44Q2.92 42.04 2.08 42.04L2.08 42.04L1.64 41.80Q1.32 41.20 1.32 40.40L1.32 40.40Q1.32 39.64 1.52 38.82Q1.72 38 1.92 37.20L1.92 37.20Q2 37.08 2.08 36.92L2.08 36.92Q2.52 36.08 2.96 35.24L2.96 35.24Q3.48 34.40 4.12 33.80L4.12 33.80Q4.28 33.20 4.84 32.60L4.84 32.60Q5.16 32.28 6 31.60L6 31.60Q6.72 31.20 7.44 30.92Q8.16 30.64 8.88 30.64L8.88 30.64Q9.20 30.64 9.36 30.68L9.36 30.68Q10.40 30.92 10.80 31.76L10.80 31.76Q11.20 32.28 11.20 33L11.20 33Q11.20 33.88 10.68 34.60L10.68 34.60L10.24 34.76Q10 35.04 9.60 35.80Q9.20 36.56 8.84 37.52L8.84 37.52L8.76 38.40Q8.76 39.12 8.96 39.44L8.96 39.44Q9.48 39.72 10.04 39.72L10.04 39.72Q10.76 39.72 12.22 39.10Q13.68 38.48 14.32 38.44ZM9.96 33.72L9.96 33.72Q9.96 33.12 9.32 32.32L9.32 32.32Q9.24 32.20 8.96 31.96L8.96 31.96Q8.52 31.68 8 31.68L8 31.68Q7.48 31.68 6.80 31.98Q6.12 32.28 5.80 32.44L5.80 32.44Q5.28 33.12 4.74 33.82Q4.20 34.52 3.88 35.28L3.88 35.28Q3.72 35.48 3.52 36.02Q3.32 36.56 3.16 36.68L3.16 36.68Q3.16 37.12 2.86 37.68Q2.56 38.24 2.56 38.60L2.56 38.60Q2.36 39.16 2.36 39.92L2.36 39.92Q2.36 40.60 2.52 41.04L2.52 41.04L3.84 40.88Q4.04 40.64 6 38.96L6 38.96Q7.40 37.72 7.92 36.68L7.92 36.68L8.40 35.72Q8.68 35.24 9.32 34.56Q9.96 33.88 9.96 33.72ZM26.52 39.28L26.52 39.28Q26.52 39.52 25.08 40.68L25.08 40.68Q24.60 41.04 23.60 41.84L23.60 41.84Q20.76 42.72 19.80 42.92Q18.84 43.12 17.68 43.12L17.68 43.12Q17.12 42.80 16.64 42.40L16.64 42.40Q16 41.88 15.76 41.44L15.76 41.44Q15.68 41.24 15.68 40.76L15.68 40.76Q15.68 40.12 16.12 38.92Q16.56 37.72 16.64 37.12L16.64 37.12Q16.88 37.08 16.96 36.78Q17.04 36.48 17.04 36.08L17.04 36.08L16 35.12Q15.52 36.36 14.40 37.56L14.40 37.56Q13.04 39 11.72 40.40L11.72 40.40L10.44 40.92L10.52 39.92Q12.04 38.80 12.28 38.28L12.28 38.28Q14.24 36.20 14.52 35.84L14.52 35.84Q15.64 34.36 15.64 32.80L15.64 32.80Q15.64 32.60 15.56 32.04L15.56 32.04Q15.76 31.80 16.40 31.28L16.40 31.28Q16.60 31.12 17 30.84L17 30.84L17.28 31.28Q17.20 31.52 17.12 31.56L17.12 31.56Q17.12 32.76 17.52 33.56Q17.92 34.36 18.72 35.12L18.72 35.12Q18.08 37.56 17.48 39.96L17.48 39.96Q17.48 40.32 17.52 40.44Q17.56 40.56 17.88 40.82Q18.20 41.08 18.36 41.28L18.36 41.28Q19.20 41.52 20.04 41.52L20.04 41.52Q21.08 41.52 22.14 41.24Q23.20 40.96 24.40 40.48L24.40 40.48Q24.44 40.28 25.42 39.66Q26.40 39.04 26.52 39.28ZM30.32 30.48L37.40 29.52Q37.04 30.04 36.30 30.28Q35.56 30.52 34.68 30.52L34.68 30.52Q33.68 30.88 31.76 31.22Q29.84 31.56 29.08 31.80L29.08 31.80L29.04 32.24L28.56 32.88Q28.56 33.20 28.30 33.56Q28.04 33.92 27.92 34.12L27.92 34.12Q27.32 35.12 26.72 35.84L26.72 35.84Q26.00 36.72 25.24 37.32L25.24 37.32Q25.04 37.52 25.04 37.96L25.04 37.96Q25.32 39.44 25.72 40.06Q26.12 40.68 26.72 40.96L26.72 40.96L29.08 40.92Q28.64 41.12 28.10 41.40Q27.56 41.68 27.08 41.88L27.08 41.88L26.20 42Q24.80 42 24.00 40.96L24.00 40.96L23.44 39.04Q23.32 38.88 23.28 38.76Q23.24 38.64 23.24 38.56L23.24 38.56Q23.76 38.04 23.94 36.76Q24.12 35.48 24.36 33.92L24.36 33.92L24.52 33.80L25.00 32.72L24.92 32.56L23.60 32.56L23.48 32.36Q24.08 31.20 25.40 31.20L25.40 31.20Q25.92 30.24 27.72 26.44L27.72 26.44Q28.40 25 29.08 23.72L29.08 23.72L31.24 22.72Q31.48 23.36 31.58 23.86Q31.68 24.36 31.68 25L31.68 25Q31.68 25.60 31.60 25.92L31.60 25.92Q31.60 26.68 31.28 27.60L31.28 27.60Q30.36 30.28 30.32 30.48L30.32 30.48ZM30.12 28.28L30.36 25.08L28.92 26.76L27.32 30.60Q27.40 30.80 27.56 30.76L27.56 30.76L29.08 30.36L29.52 29.88L30.12 28.28ZM27.44 33.88L28.36 32.20L26.68 32.44Q26.20 33.60 25.72 34.76L25.72 34.76Q25.72 34.88 25.58 35.44Q25.44 36 25.44 36.32L25.44 36.32L25.72 36.12L27.44 33.88ZM43.08 16.16L43.08 16.16Q42.68 17.96 42.28 19.72L42.28 19.72Q42.20 20.12 41.64 21.36L41.64 21.36Q41.48 21.76 41.08 22.60L41.08 22.60Q40.44 23.88 39.80 25.16L39.80 25.16Q39.24 26.56 38.28 27.92L38.28 27.92Q37.52 28.96 37.16 29.44L37.16 29.44L34 34.28L31.16 40.16L33.16 39L34.84 37.52L35.48 36.36L36.72 35.44Q36.88 35.56 36.92 35.76L36.92 35.76Q36.80 36.56 36.76 36.96L36.76 36.96Q36.60 38.16 36.60 38.92L36.60 38.92L36.72 40.16Q36.92 40.56 37.16 40.72L37.16 40.72Q37.72 41.08 38.24 41.08L38.24 41.08Q38.72 41.08 39.12 40.80L39.12 40.80Q40.20 40.32 41.28 39.88L41.28 39.88Q40.88 40.40 40 40.96L40 40.96Q38.80 41.72 38.48 42L38.48 42Q38.16 42.20 37.44 42.20L37.44 42.20Q36.76 42.20 36.34 42.14Q35.92 42.08 35.72 42L35.72 42Q35.24 41.40 35.06 40.54Q34.88 39.68 34.88 38.56L34.88 38.56Q34.44 38.76 33.84 39.18Q33.24 39.60 32.88 40L32.88 40Q32.68 40.12 32.32 40.40L32.32 40.40Q31.64 40.96 31.24 41.12L31.24 41.12Q30.92 41.16 30.28 41.54Q29.64 41.92 29.32 41.84L29.32 41.84L30.20 38.84L32.16 35.60Q31.60 35.72 31.12 36.10Q30.64 36.48 30.20 37.04L30.20 37.04Q30.24 36.96 30.16 36.84Q30.08 36.72 29.96 36.52L29.96 36.52Q31.40 35.20 31.72 34.92L31.72 34.92Q32.64 34.04 33.28 33.24L33.28 33.24Q34.16 31.92 35.10 30.46Q36.04 29 36.48 27.68L36.48 27.68L38.12 24.68L41.80 16.68L42.84 15.96Q42.96 15.96 43.08 16.16ZM41.80 18.84L41.80 18.84Q41.48 19.12 41.08 19.68L41.08 19.68Q40.84 20.56 39.88 22.60L39.88 22.60Q39.28 23.84 39.12 24.44L39.12 24.44Q38.28 25.76 38.16 25.96L38.16 25.96Q37.64 26.88 37.40 27.72L37.40 27.72Q38.12 27.32 39.20 25.08Q40.28 22.84 41.32 20.60L41.32 20.60Q41.60 20 41.66 19.78Q41.72 19.56 41.80 18.84ZM52.88 40.12L53.44 40.04Q53.32 40.32 53.32 40.48L53.32 40.48Q52.68 40.92 51.88 41.32L51.88 41.32Q51.44 41.52 50.24 42L50.24 42Q49.92 42.16 49.52 42.16L49.52 42.16Q48.60 42.16 48 41.28L48 41.28L47.60 39.04Q46.24 39.92 44.92 40.80L44.92 40.80Q44.12 41.12 43.62 41.30Q43.12 41.48 42.56 41.48L42.56 41.48Q42.04 41.48 41.68 41.28L41.68 41.28Q41.44 41.04 41.20 40.80L41.20 40.80L40.56 40.92L40.24 40.32L41.68 39.60L43.04 36.36Q43.32 35.88 43.38 35.68Q43.44 35.48 43.44 35.16L43.44 35.16Q44.20 33.88 45.28 33.40L45.28 33.40L45.60 33.44Q45.60 33.92 45.04 34.72Q44.48 35.52 44.48 36.08L44.48 36.08L43.24 38.72Q43.12 39.56 43.12 40L43.12 40Q43.12 40.16 43.20 40.48L43.20 40.48Q43.36 40.52 43.60 40.52L43.60 40.52Q44.16 40.52 45.04 40.04Q45.92 39.56 46.12 39.52L46.12 39.52Q46.72 39.20 47.52 38.40L47.52 38.40Q47.92 38 48.36 37.56L48.36 37.56Q48.52 37.16 48.86 36.58Q49.20 36 49.60 35.36L49.60 35.36L51.16 34.44Q51.24 34.64 51.16 35L51.16 35Q50.88 35.56 50.66 36.18Q50.44 36.80 50.24 37.56L50.24 37.56Q49.96 38 49.90 38.92Q49.84 39.84 49.76 40.12L49.76 40.12L50.24 40.96Q50.40 41.12 50.84 41.12L50.84 41.12Q51.36 41.04 51.90 40.76Q52.44 40.48 52.88 40.12L52.88 40.12ZM66.80 39.28L66.80 39.28Q66.80 39.52 65.36 40.68L65.36 40.68Q64.88 41.04 63.88 41.84L63.88 41.84Q61.04 42.72 60.08 42.92Q59.12 43.12 57.96 43.12L57.96 43.12Q57.40 42.80 56.92 42.40L56.92 42.40Q56.28 41.88 56.04 41.44L56.04 41.44Q55.96 41.24 55.96 40.76L55.96 40.76Q55.96 40.12 56.40 38.92Q56.84 37.72 56.92 37.12L56.92 37.12Q57.16 37.08 57.24 36.78Q57.32 36.48 57.32 36.08L57.32 36.08L56.28 35.12Q55.80 36.36 54.68 37.56L54.68 37.56Q53.32 39 52.00 40.40L52.00 40.40L50.72 40.92L50.80 39.92Q52.32 38.80 52.56 38.28L52.56 38.28Q54.52 36.20 54.80 35.84L54.80 35.84Q55.92 34.36 55.92 32.80L55.92 32.80Q55.92 32.60 55.84 32.04L55.84 32.04Q56.04 31.80 56.68 31.28L56.68 31.28Q56.88 31.12 57.28 30.84L57.28 30.84L57.56 31.28Q57.48 31.52 57.40 31.56L57.40 31.56Q57.40 32.76 57.80 33.56Q58.20 34.36 59.00 35.12L59.00 35.12Q58.36 37.56 57.76 39.96L57.76 39.96Q57.76 40.32 57.80 40.44Q57.84 40.56 58.16 40.82Q58.48 41.08 58.64 41.28L58.64 41.28Q59.48 41.52 60.32 41.52L60.32 41.52Q61.36 41.52 62.42 41.24Q63.48 40.96 64.68 40.48L64.68 40.48Q64.72 40.28 65.70 39.66Q66.68 39.04 66.80 39.28ZM90.48 22L90.48 22Q90.48 22.52 90.24 23.42Q90 24.32 89.96 24.44Q89.92 24.56 89.16 26.88Q88.40 29.20 87.56 30.36L87.56 30.36Q87.52 30.40 87.36 30.76Q87.20 31.12 87.04 31.52L87.04 31.52Q86.88 31.52 86.78 31.60Q86.68 31.68 86.64 31.72L86.64 31.72Q84.76 34.60 81.76 37.12L81.76 37.12L81.68 38.68Q81.68 39.32 81.76 39.82Q81.84 40.32 82.12 40.68L82.12 40.68Q82.12 40.72 82.38 41.02Q82.64 41.32 82.64 41.56L82.64 41.56Q82.20 41.72 82.06 41.94Q81.92 42.16 81.76 42.20L81.76 42.20Q81.24 42.20 81.04 41.88L81.04 41.88Q80.40 41.44 80.24 40.28L80.24 40.28Q80.16 39.32 80.08 38.36L80.08 38.36L79.20 38.80Q78.76 39.24 77.88 39.84L77.88 39.84Q75.72 41.32 75.44 41.56L75.44 41.56L73.92 42.12Q73.88 42.04 73.72 41.88Q73.56 41.72 73.40 41.56L73.40 41.56Q73.20 41.04 73.20 40.60L73.20 40.60Q73.20 39.88 73.62 39.04Q74.04 38.20 74.44 37.40L74.44 37.40Q75.28 35.88 76.76 34.40L76.76 34.40Q77.96 33.20 79.76 32L79.76 32L80 32.04Q80.20 31.92 80.32 31.88L80.32 31.88Q80.72 31.72 81.04 31.72L81.04 31.72Q81.60 31.60 82.12 31.92L82.12 31.92Q82.48 32.24 82.84 32.56L82.84 32.56L84.36 28.88L85.80 25.64Q86.24 24.80 86.46 24.32Q86.68 23.84 86.80 23.32L86.80 23.32Q86.92 23.16 87.72 21.84L87.72 21.84Q88.24 20.96 88.80 20.56L88.80 20.56Q89.12 20.32 89.48 20.06Q89.84 19.80 90.12 19.96L90.12 19.96L90.20 20.84Q90.48 21.40 90.48 22ZM89.36 23.04L89.36 23.04L89.36 22.56Q89.36 22.28 89.28 21.80L89.28 21.80Q89.28 21.64 89.28 21.44L89.28 21.44Q89.20 21.40 88.96 21.44L88.96 21.44L87.64 23.80Q87.32 24.56 87.24 24.76L87.24 24.76Q86.92 25.48 86.84 25.76L86.84 25.76L85.64 28.52L82.48 35.44L82.68 35.44Q84.08 34.24 85.12 32.96L85.12 32.96Q86.04 31.84 87.04 30.28L87.04 30.28Q88.12 28.20 88.64 26.76L88.64 26.76Q89.36 24.76 89.36 23.04ZM81.16 34.12L81.16 34.12Q81.16 33.84 80.84 33.76L80.84 33.76L79.48 33.44Q79 33.72 78.52 33.96L78.52 33.96Q77.64 34.52 77.16 35.36L77.16 35.36Q76.64 35.72 76.06 36.46Q75.48 37.20 74.96 37.84L74.96 37.84L74.64 39.84L74.72 40.12Q75.48 40.12 76.90 39.24Q78.32 38.36 79.32 37.40L79.32 37.40Q79.36 37.28 79.56 37.26Q79.76 37.24 79.76 37.12L79.76 37.12L80.64 35.56Q80.72 35.28 80.94 34.82Q81.16 34.36 81.16 34.12ZM99.60 38.44L99.60 38.44Q99.44 38.60 98.96 38.92Q98.48 39.24 98.20 39.44L98.20 39.44Q97.92 39.52 96.24 40.24L96.24 40.24Q95.04 40.76 94.08 40.76L94.08 40.76Q93.92 40.76 93.44 40.68L93.44 40.68L93.20 40.36Q92.88 39.96 92.88 39.32L92.88 39.32Q92.92 38.72 92.92 38.48L92.92 38.48Q92.92 38.32 92.84 38.08L92.84 38.08Q91.92 38.92 91.48 39.32Q91.04 39.72 90.52 40.36L90.52 40.36Q89.80 40.88 89.08 41.44L89.08 41.44Q88.20 42.04 87.36 42.04L87.36 42.04L86.92 41.80Q86.60 41.20 86.60 40.40L86.60 40.40Q86.60 39.64 86.80 38.82Q87 38 87.20 37.20L87.20 37.20Q87.28 37.08 87.36 36.92L87.36 36.92Q87.80 36.08 88.24 35.24L88.24 35.24Q88.76 34.40 89.40 33.80L89.40 33.80Q89.56 33.20 90.12 32.60L90.12 32.60Q90.44 32.28 91.28 31.60L91.28 31.60Q92 31.20 92.72 30.92Q93.44 30.64 94.16 30.64L94.16 30.64Q94.48 30.64 94.64 30.68L94.64 30.68Q95.68 30.92 96.08 31.76L96.08 31.76Q96.48 32.28 96.48 33L96.48 33Q96.48 33.88 95.96 34.60L95.96 34.60L95.52 34.76Q95.28 35.04 94.88 35.80Q94.48 36.56 94.12 37.52L94.12 37.52L94.04 38.40Q94.04 39.12 94.24 39.44L94.24 39.44Q94.76 39.72 95.32 39.72L95.32 39.72Q96.04 39.72 97.50 39.10Q98.96 38.48 99.60 38.44ZM95.24 33.72L95.24 33.72Q95.24 33.12 94.60 32.32L94.60 32.32Q94.52 32.20 94.24 31.96L94.24 31.96Q93.80 31.68 93.28 31.68L93.28 31.68Q92.76 31.68 92.08 31.98Q91.40 32.28 91.08 32.44L91.08 32.44Q90.56 33.12 90.02 33.82Q89.48 34.52 89.16 35.28L89.16 35.28Q89 35.48 88.80 36.02Q88.60 36.56 88.44 36.68L88.44 36.68Q88.44 37.12 88.14 37.68Q87.84 38.24 87.84 38.60L87.84 38.60Q87.64 39.16 87.64 39.92L87.64 39.92Q87.64 40.60 87.80 41.04L87.80 41.04L89.12 40.88Q89.32 40.64 91.28 38.96L91.28 38.96Q92.68 37.72 93.20 36.68L93.20 36.68L93.68 35.72Q93.96 35.24 94.60 34.56Q95.24 33.88 95.24 33.72ZM111.80 39.28L111.80 39.28Q111.80 39.52 110.36 40.68L110.36 40.68Q109.88 41.04 108.88 41.84L108.88 41.84Q106.04 42.72 105.08 42.92Q104.12 43.12 102.96 43.12L102.96 43.12Q102.40 42.80 101.92 42.40L101.92 42.40Q101.28 41.88 101.04 41.44L101.04 41.44Q100.96 41.24 100.96 40.76L100.96 40.76Q100.96 40.12 101.40 38.92Q101.84 37.72 101.92 37.12L101.92 37.12Q102.16 37.08 102.24 36.78Q102.32 36.48 102.32 36.08L102.32 36.08L101.28 35.12Q100.80 36.36 99.68 37.56L99.68 37.56Q98.32 39 97 40.40L97 40.40L95.72 40.92L95.80 39.92Q97.32 38.80 97.56 38.28L97.56 38.28Q99.52 36.20 99.80 35.84L99.80 35.84Q100.92 34.36 100.92 32.80L100.92 32.80Q100.92 32.60 100.84 32.04L100.84 32.04Q101.04 31.80 101.68 31.28L101.68 31.28Q101.88 31.12 102.28 30.84L102.28 30.84L102.56 31.28Q102.48 31.52 102.40 31.56L102.40 31.56Q102.40 32.76 102.80 33.56Q103.20 34.36 104 35.12L104 35.12Q103.36 37.56 102.76 39.96L102.76 39.96Q102.76 40.32 102.80 40.44Q102.84 40.56 103.16 40.82Q103.48 41.08 103.64 41.28L103.64 41.28Q104.48 41.52 105.32 41.52L105.32 41.52Q106.36 41.52 107.42 41.24Q108.48 40.96 109.68 40.48L109.68 40.48Q109.72 40.28 110.70 39.66Q111.68 39.04 111.80 39.28ZM122.68 36.24L122.68 37.04Q122.48 37.28 122.32 38.08Q122.16 38.88 121.84 39.32L121.84 39.32Q121.24 40.20 120.68 40.72L120.68 40.72Q119.84 41.56 119.08 41.68L119.08 41.68Q118.56 42.40 117.62 42.76Q116.68 43.12 115.72 43.12L115.72 43.12L114.92 42.88L114.44 41.88Q114.20 41.60 114.08 41.14Q113.96 40.68 113.96 40.28L113.96 40.28L114.04 39.44L113.76 39.44L111.04 41.20Q110.72 41.20 110.04 41.48Q109.36 41.76 109.04 41.64L109.04 41.64Q108.84 41.12 108.84 40.68L108.84 40.68Q108.84 40.12 109.36 38.56L109.36 38.56Q109.64 37.72 109.64 37.32L109.64 37.32Q110.12 36.40 110.62 35.52Q111.12 34.64 111.46 34.34Q111.80 34.04 112.32 33.88L112.32 33.88L112.48 33.96L111.36 36.92Q111.04 37.16 110.82 37.64Q110.60 38.12 110.40 38.84L110.40 38.84Q110.40 39.04 110.36 39.20L110.36 39.20Q110.20 39.88 110.20 40L110.20 40Q110.20 40.40 110.40 40.56L110.40 40.56Q110.80 40.52 111 40.50Q111.20 40.48 111.40 40.40L111.40 40.40Q112.40 39.84 113.14 39.32Q113.88 38.80 114.60 38.28L114.60 38.28L115.04 37.56L115.72 37.12L115.88 36.88L116.44 36.56Q116.64 36.52 116.88 36.84L116.88 36.84L116.88 37.04Q116.72 37.28 116.60 37.40L116.60 37.40Q116.28 38.12 116.14 38.66Q116 39.20 116 39.80L116 39.80Q116 40.72 116.44 41.56L116.44 41.56Q116.56 42 116.96 42L116.96 42Q117.52 42.08 118.06 41.84Q118.60 41.60 119.32 41.12L119.32 41.12Q120.36 40.52 120.84 39.28L120.84 39.28Q121.28 37.80 121.48 37.12L121.48 37.12L121.48 36.36Q121.20 34.80 121.04 34.12L121.04 34.12Q120.76 32.96 120.24 32.24L120.24 32.24Q120.20 32.12 119.92 32.12L119.92 32.12Q119.64 32.12 119.60 32L119.60 32L119.68 30.96L121.08 30.16L121.24 30.16L121.88 31.56L121.84 31.80Q122.36 32.64 122.52 33.68Q122.68 34.72 122.68 36.24L122.68 36.24ZM138.40 38.44L138.40 38.44Q138.24 38.60 137.76 38.92Q137.28 39.24 137 39.44L137 39.44Q136.72 39.52 135.04 40.24L135.04 40.24Q133.84 40.76 132.88 40.76L132.88 40.76Q132.72 40.76 132.24 40.68L132.24 40.68L132 40.36Q131.68 39.96 131.68 39.32L131.68 39.32Q131.72 38.72 131.72 38.48L131.72 38.48Q131.72 38.32 131.64 38.08L131.64 38.08Q130.72 38.92 130.28 39.32Q129.84 39.72 129.32 40.36L129.32 40.36Q128.60 40.88 127.88 41.44L127.88 41.44Q127.00 42.04 126.16 42.04L126.16 42.04L125.72 41.80Q125.40 41.20 125.40 40.40L125.40 40.40Q125.40 39.64 125.60 38.82Q125.80 38 126.00 37.20L126.00 37.20Q126.08 37.08 126.16 36.92L126.16 36.92Q126.60 36.08 127.04 35.24L127.04 35.24Q127.56 34.40 128.20 33.80L128.20 33.80Q128.36 33.20 128.92 32.60L128.92 32.60Q129.24 32.28 130.08 31.60L130.08 31.60Q130.80 31.20 131.52 30.92Q132.24 30.64 132.96 30.64L132.96 30.64Q133.28 30.64 133.44 30.68L133.44 30.68Q134.48 30.92 134.88 31.76L134.88 31.76Q135.28 32.28 135.28 33L135.28 33Q135.28 33.88 134.76 34.60L134.76 34.60L134.32 34.76Q134.08 35.04 133.68 35.80Q133.28 36.56 132.92 37.52L132.92 37.52L132.84 38.40Q132.84 39.12 133.04 39.44L133.04 39.44Q133.56 39.72 134.12 39.72L134.12 39.72Q134.84 39.72 136.30 39.10Q137.76 38.48 138.40 38.44ZM134.04 33.72L134.04 33.72Q134.04 33.12 133.40 32.32L133.40 32.32Q133.32 32.20 133.04 31.96L133.04 31.96Q132.60 31.68 132.08 31.68L132.08 31.68Q131.56 31.68 130.88 31.98Q130.20 32.28 129.88 32.44L129.88 32.44Q129.36 33.12 128.82 33.82Q128.28 34.52 127.96 35.28L127.96 35.28Q127.80 35.48 127.60 36.02Q127.40 36.56 127.24 36.68L127.24 36.68Q127.24 37.12 126.94 37.68Q126.64 38.24 126.64 38.60L126.64 38.60Q126.44 39.16 126.44 39.92L126.44 39.92Q126.44 40.60 126.60 41.04L126.60 41.04L127.92 40.88Q128.12 40.64 130.08 38.96L130.08 38.96Q131.48 37.72 132 36.68L132 36.68L132.48 35.72Q132.76 35.24 133.40 34.56Q134.04 33.88 134.04 33.72ZM148.32 31.48L148.32 31.48Q148.40 31.92 148.16 32.44Q147.92 32.96 147.68 33.44L147.68 33.44Q147.44 33.68 147.08 34.76L147.08 34.76Q146.88 35.36 146.68 35.60L146.68 35.60Q146.52 35.96 145.94 37.02Q145.36 38.08 145.20 38.66Q145.04 39.24 144.96 39.66Q144.88 40.08 144.88 40.28L144.88 40.28Q144.88 40.80 145.16 41.12L145.16 41.12L145.48 41.64L146.84 41.84Q146.88 41.96 146.80 42.02Q146.72 42.08 146.56 42.16L146.56 42.16L145.36 42.28Q144.52 42.28 143.86 42.06Q143.20 41.84 142.76 41.28L142.76 41.28L142.80 39.32Q143.00 39.08 143.20 38.72L143.20 38.72Q143.80 37.52 143.92 37.36L143.92 37.36Q144.60 36.24 145.24 34.64L145.24 34.64Q145.24 34.52 145.12 34.44L145.12 34.44L142.76 36.36Q142.52 36.52 139.88 38.88L139.88 38.88Q138.80 39.84 138.08 40.16L138.08 40.16L138.68 37.28L138.40 37.28Q138.12 37.92 137.84 38.32Q137.56 38.72 137.00 39.28L137.00 39.28L137.32 38.36L138.84 34.76Q138.88 34.52 139.16 34.22Q139.44 33.92 139.68 33.88L139.68 33.88Q140.00 34.48 140.00 35.20L140.00 35.20Q140.00 35.68 139.88 36.32L139.88 36.32Q139.60 37.84 139.60 38.16L139.60 38.16Q140.40 37.56 141.10 36.92Q141.80 36.28 142.28 35.60L142.28 35.60L143.52 34.76Q143.76 34.52 144.00 34.28L144.00 34.28L147.28 31.56Q147.44 31.36 147.88 31.36L147.88 31.36Q148.12 31.36 148.32 31.48ZM156.20 30.48L163.28 29.52Q162.92 30.04 162.18 30.28Q161.44 30.52 160.56 30.52L160.56 30.52Q159.56 30.88 157.64 31.22Q155.72 31.56 154.96 31.80L154.96 31.80L154.92 32.24L154.44 32.88Q154.44 33.20 154.18 33.56Q153.92 33.92 153.80 34.12L153.80 34.12Q153.20 35.12 152.60 35.84L152.60 35.84Q151.88 36.72 151.12 37.32L151.12 37.32Q150.92 37.52 150.92 37.96L150.92 37.96Q151.20 39.44 151.60 40.06Q152 40.68 152.60 40.96L152.60 40.96L154.96 40.92Q154.52 41.12 153.98 41.40Q153.44 41.68 152.96 41.88L152.96 41.88L152.08 42Q150.68 42 149.88 40.96L149.88 40.96L149.32 39.04Q149.20 38.88 149.16 38.76Q149.12 38.64 149.12 38.56L149.12 38.56Q149.64 38.04 149.82 36.76Q150 35.48 150.24 33.92L150.24 33.92L150.40 33.80L150.88 32.72L150.80 32.56L149.48 32.56L149.36 32.36Q149.96 31.20 151.28 31.20L151.28 31.20Q151.80 30.24 153.60 26.44L153.60 26.44Q154.28 25 154.96 23.72L154.96 23.72L157.12 22.72Q157.36 23.36 157.46 23.86Q157.56 24.36 157.56 25L157.56 25Q157.56 25.60 157.48 25.92L157.48 25.92Q157.48 26.68 157.16 27.60L157.16 27.60Q156.24 30.28 156.20 30.48L156.20 30.48ZM156 28.28L156.24 25.08L154.80 26.76L153.20 30.60Q153.28 30.80 153.44 30.76L153.44 30.76L154.96 30.36L155.40 29.88L156 28.28ZM153.32 33.88L154.24 32.20L152.56 32.44Q152.08 33.60 151.60 34.76L151.60 34.76Q151.60 34.88 151.46 35.44Q151.32 36 151.32 36.32L151.32 36.32L151.60 36.12L153.32 33.88ZM165.88 34.40L166 36.16Q166 37.48 165.70 38.58Q165.40 39.68 164.72 40.52L164.72 40.52L164.28 40.48Q163.64 40.96 163.08 41.24Q162.52 41.52 161.72 41.88L161.72 41.88Q160.76 42.16 160.10 42.34Q159.44 42.52 158.96 42.44L158.96 42.44Q158.76 42.16 158.64 42.04L158.64 42.04Q158.28 41.64 158 41.68L158 41.68Q157.76 41.24 157.76 40.84L157.76 40.84Q157.76 40.64 157.96 39.72L157.96 39.72Q158.04 39.36 158.04 39L158.04 39Q158.88 37.40 159.16 36.84L159.16 36.84Q159.76 35.72 160.36 34.84L160.36 34.84Q160.92 34.20 161.28 33.80L161.28 33.80Q161.88 33.16 162.36 32.72L162.36 32.72L162.36 32.04Q162.64 31.44 163.16 31.02Q163.68 30.60 164.36 30.60L164.36 30.60L165.24 31.76Q165.20 32.20 165.54 33.02Q165.88 33.84 165.88 34.40L165.88 34.40ZM164.36 36.12L164.36 36.12Q164.36 34.36 163.80 32.68L163.80 32.68Q163.16 33.32 162.44 34.24L162.44 34.24Q161.88 34.96 161.12 36.08L161.12 36.08Q161 36.28 160.68 36.66Q160.36 37.04 160.28 37.32L160.28 37.32Q160.32 37.40 160.18 37.58Q160.04 37.76 159.88 37.96L159.88 37.96L159.48 40.52Q159.48 40.84 159.72 41Q159.96 41.16 160.28 41.16L160.28 41.16L161.68 41.20L163.40 40.40Q164.36 38.52 164.36 36.12Z",
        fill: "black"
      }
    )
  }
);

const GithubSVG = (props) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.2em", height: "1.2em", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx(
  "path",
  {
    fill: "black",
    d: "M12 0a12 12 0 1 0 0 24a12 12 0 0 0 0-24m3.163 21.783h-.093a.5.5 0 0 1-.382-.14a.5.5 0 0 1-.14-.372v-1.406q.01-.701.01-1.416a3.7 3.7 0 0 0-.151-1.028a1.83 1.83 0 0 0-.542-.875a8 8 0 0 0 2.038-.471a4.05 4.05 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.8 6.8 0 0 0 .3-2.13a4.1 4.1 0 0 0-.26-1.476a3.9 3.9 0 0 0-.795-1.284a2.8 2.8 0 0 0 .162-.582q.05-.3.05-.604q0-.392-.09-.773a5 5 0 0 0-.221-.763a.3.3 0 0 0-.111-.02h-.11q-.346.004-.674.111a5 5 0 0 0-.703.26a7 7 0 0 0-.661.343q-.322.191-.573.362a9.6 9.6 0 0 0-5.143 0a14 14 0 0 0-.572-.362a6 6 0 0 0-.672-.342a4.5 4.5 0 0 0-.705-.261a2.2 2.2 0 0 0-.662-.111h-.11a.3.3 0 0 0-.11.02a6 6 0 0 0-.23.763q-.08.382-.081.773q0 .304.051.604t.16.582A3.9 3.9 0 0 0 5.702 10a4.1 4.1 0 0 0-.263 1.476a6.9 6.9 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516c.415.422.915.75 1.466.964c.653.25 1.337.41 2.033.476a1.8 1.8 0 0 0-.452.633a3 3 0 0 0-.2.744a2.75 2.75 0 0 1-1.175.27a1.8 1.8 0 0 1-1.065-.3a2.9 2.9 0 0 1-.752-.824a3 3 0 0 0-.292-.382a2.7 2.7 0 0 0-.372-.343a1.8 1.8 0 0 0-.432-.24a1.2 1.2 0 0 0-.481-.101q-.06.002-.12.01a.7.7 0 0 0-.162.02a.4.4 0 0 0-.13.06a.12.12 0 0 0-.06.1a.33.33 0 0 0 .14.242q.14.111.232.171l.03.021q.2.155.382.333q.169.148.3.33q.136.178.231.381q.11.2.231.463c.188.474.522.875.954 1.145c.453.243.961.364 1.476.351q.262 0 .522-.03q.258-.041.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0z"
  }
) });

const InstagramSVG = (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.2em", height: "1.2em", viewBox: "0 0 512 512", children: [
  /* @__PURE__ */ jsx(
    "path",
    {
      fill: "black",
      d: "M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34zm0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      fill: "black",
      d: "M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28M256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112"
    }
  )
] });

const LinkedInSVG = (props) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.2em", height: "1.2em", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx(
  "path",
  {
    fill: "black",
    "fill-rule": "evenodd",
    d: "M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.57 2.57 0 0 1-1.82.748a2.6 2.6 0 0 1-1.818-.747A2.55 2.55 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.58 2.58 0 0 1 4.571 2c.682 0 1.336.269 1.819.747s.753 1.126.753 1.803",
    "clip-rule": "evenodd"
  }
) });

const photo = new Proxy({"src":"/_astro/photo_profile.k4ZM8JUJ.png","width":1643,"height":1742,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbookpro/Documents/Code/Project/Pribadi/portfolio-web-v2/src/assets/photo_profile.png";
							}
							
							return target[name];
						}
					});

const LinkButton = ({ className, text, href }) => {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href,
      className: classNames(
        className,
        "group inline-flex items-center text-base font-medium leading-6 text-gray-900 hover:text-gray-700 sm:text-sm sm:leading-5"
      ),
      children: [
        text,
        /* @__PURE__ */ jsx(ArrowIcon, { className: "ml-1 h-4 w-4 transform text-gray-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gray-700" })
      ]
    }
  );
};
const ArrowIcon = (props) => /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 16 16", fill: "currentColor", ...props, children: [
  /* @__PURE__ */ jsx("g", { clipPath: "url(#a)", children: /* @__PURE__ */ jsx("path", { d: "M4.23 4.23v1.33h5.26L3.76 11.3l.94.94 5.74-5.73v5.26h1.33V4.23H4.23Z", fill: "currentColor" }) }),
  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "a", children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M0 0h16v16H0z" }) }) })
] });

const HeadingSection = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { className: "relative inline-block", children: /* @__PURE__ */ jsx(Signature, { className: "w-40 text-neutral-500" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-medium leading-7 text-gray-900", children: "Hello! I'm Arthur Darwanto" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-screen-lg leading-relaxed text-gray-500", children: "an Software Developer specialized in React, Node and Typescript. Passionate in programming. I enjoy writing clean and maintainable code and staying up to date with the latest technology standards and best practices." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-x-1 mt-4", children: [
          /* @__PURE__ */ jsx("div", { className: "p-1 rounded-lg border-2 border-slate-500 w-fit cursor-pointer hover:border-slate-600", children: /* @__PURE__ */ jsx("a", { href: "https://github.com/arthur-da-1205", children: /* @__PURE__ */ jsx(GithubSVG, {}) }) }),
          /* @__PURE__ */ jsx("div", { className: "p-1 rounded-lg border-2 border-slate-500 w-fit cursor-pointer hover:border-slate-600", children: /* @__PURE__ */ jsx("a", { href: "https://linkedin.com/in/arthur-darwanto", children: /* @__PURE__ */ jsx(LinkedInSVG, {}) }) }),
          /* @__PURE__ */ jsx("div", { className: "p-1 rounded-lg border-2 border-slate-500 w-fit cursor-pointer hover:border-slate-600", children: /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/arthurdarwanto", children: /* @__PURE__ */ jsx(InstagramSVG, {}) }) }),
          /* @__PURE__ */ jsx("div", { className: "ml-1 px-1 border-dotted border-b-2 border-slate-500 w-fit cursor-pointer hover:border-slate-600", children: /* @__PURE__ */ jsx(
            LinkButton,
            {
              className: "text-base",
              text: "Download CV as PDF",
              href: "https://drive.google.com/file/d/1BHuNayOLBZ8-ldZ1m6qtdzHU4IRRxhEO/view?usp=drive_link"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "ml-1 px-1 border-dotted border-b-2 border-slate-500 w-fit cursor-pointer hover:border-slate-600", children: /* @__PURE__ */ jsx(
            LinkButton,
            {
              className: "text-base",
              text: "Contact Me",
              href: "https://api.whatsapp.com/send/?phone=6281913581675&text&type=phone_number&app_absent=0"
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: photo.src, alt: "Profile", width: 430, height: 430 }) })
  ] });
};

const SectionHeader = ({ name }) => {
  return /* @__PURE__ */ jsx(
    motion.h2,
    {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { duration: 0.8, delay: 0.2 },
      viewport: { once: true },
      className: "text-base font-medium uppercase tracking-widest text-gray-400",
      children: name
    }
  );
};

const wrapper$1 = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.22
    }
  }
};
const text$1 = {
  offscreen: {
    opacity: 0,
    x: -10
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.22
    }
  }
};
const WorkExperience = () => {
  return /* @__PURE__ */ jsxs("div", { className: "my-8", children: [
    /* @__PURE__ */ jsx(SectionHeader, { name: "work experience" }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-8 sm:mt-4", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: wrapper$1,
        initial: "offscreen",
        whileInView: "onscreen",
        className: "grid gap-2",
        viewport: { once: true, amount: 0.5 },
        children: [
          /* @__PURE__ */ jsx(motion.span, { variants: text$1, className: "text-sm font-normal leading-5 text-gray-500", children: "August 2022 ― Present" }),
          /* @__PURE__ */ jsxs(motion.h4, { variants: text$1, className: "text-lg font-medium leading-6 text-gray-900", children: [
            "Frontend Developer @",
            /* @__PURE__ */ jsx(
              "a",
              {
                target: "_blank",
                href: "https://www.surge.co.id/",
                className: "group underline decoration-gray-400 decoration-dotted underline-offset-4 transition-colors hover:text-gray-500",
                children: "PT Solusi Sinergi Digital Tbk (SURGE)"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(motion.p, { variants: text$1, className: "max-w-lg text-base font-normal leading-6 text-gray-500", children: "Build some digital rpoduct with React, NestJS and TypeScript. Work with team and mostly in Frontend." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-8 sm:mt-4", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: wrapper$1,
        initial: "offscreen",
        whileInView: "onscreen",
        className: "grid gap-2",
        viewport: { once: true, amount: 0.5 },
        children: [
          /* @__PURE__ */ jsx(motion.span, { variants: text$1, className: "text-sm font-normal leading-5 text-gray-500", children: "May 2021 ― Present" }),
          /* @__PURE__ */ jsxs(motion.h4, { variants: text$1, className: "text-lg font-medium leading-6 text-gray-900", children: [
            "Software Developer (Freelancer) @",
            /* @__PURE__ */ jsx(
              "a",
              {
                target: "_blank",
                href: "",
                className: "group underline decoration-gray-400 decoration-dotted underline-offset-4 transition-colors hover:text-gray-500",
                children: "Devoluiton"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(motion.p, { variants: text$1, className: "max-w-lg text-base font-normal leading-6 text-gray-500", children: "Build web app, web portfolio, mobile app as the client requests. Help client to solve their problem with digital solutions." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-8 sm:mt-4", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: wrapper$1,
        initial: "offscreen",
        whileInView: "onscreen",
        className: "grid gap-2",
        viewport: { once: true, amount: 0.5 },
        children: [
          /* @__PURE__ */ jsx(motion.span, { variants: text$1, className: "text-sm font-normal leading-5 text-gray-500", children: "October 2019 ― May 2021" }),
          /* @__PURE__ */ jsxs(motion.h4, { variants: text$1, className: "text-lg font-medium leading-6 text-gray-900", children: [
            "IT Developer @",
            /* @__PURE__ */ jsx(
              "a",
              {
                target: "_blank",
                href: "https://thinkindonesia.co.id",
                className: "group underline decoration-gray-400 decoration-dotted underline-offset-4 transition-colors hover:text-gray-500",
                children: "PT. Tokoh Indonesia Muda Eksekutif (TIME)"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(motion.p, { variants: text$1, className: "max-w-lg text-base font-normal leading-6 text-gray-500", children: "Contributed to build internal software and maintenance them. Help team to process and maintenance digital ads easily." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-8 sm:mt-4", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: wrapper$1,
        initial: "offscreen",
        whileInView: "onscreen",
        className: "grid gap-2",
        viewport: { once: true, amount: 0.5 },
        children: [
          /* @__PURE__ */ jsx(motion.span, { variants: text$1, className: "text-sm font-normal leading-5 text-gray-500", children: "June 2018 ― September 2019" }),
          /* @__PURE__ */ jsxs(motion.h4, { variants: text$1, className: "text-lg font-medium leading-6 text-gray-900", children: [
            "Expert (Contract) @",
            /* @__PURE__ */ jsx(
              "a",
              {
                target: "_blank",
                href: "https://www.dpr.go.id/",
                className: "group underline decoration-gray-400 decoration-dotted underline-offset-4 transition-colors hover:text-gray-500",
                children: "4th Commission of Representatives of the Republic of Indonesia (DPR-RI)"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(motion.p, { variants: text$1, className: "max-w-lg text-base font-normal leading-6 text-gray-500", children: "Contribute to proccess and present data to make decission for some case in agricultural field." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-8 sm:mt-4", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: wrapper$1,
        initial: "offscreen",
        whileInView: "onscreen",
        className: "grid gap-2",
        viewport: { once: true, amount: 0.5 },
        children: [
          /* @__PURE__ */ jsx(motion.span, { variants: text$1, className: "text-sm font-normal leading-5 text-gray-500", children: "October 2016 ― Juli 2017" }),
          /* @__PURE__ */ jsxs(motion.h4, { variants: text$1, className: "text-lg font-medium leading-6 text-gray-900", children: [
            "Technical Consultant @",
            /* @__PURE__ */ jsx(
              "a",
              {
                target: "_blank",
                href: "http://dev.omegasoft.co.id/",
                className: "group underline decoration-gray-400 decoration-dotted underline-offset-4 transition-colors hover:text-gray-500",
                children: "PT. Omega Teknologi Indonesia (Omega Software)"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(motion.p, { variants: text$1, className: "max-w-lg text-base font-normal leading-6 text-gray-500", children: "Training client how to use the apps. Maintenance it, and fixing some bug and problem for client." })
        ]
      }
    ) })
  ] });
};

const Badge = ({ value }) => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800", children: value }) });
};

const wrapper = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.22
    }
  }
};
const image = {
  offscreen: {
    opacity: 0,
    y: 10
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.22
    }
  }
};
const text = {
  offscreen: {
    opacity: 0,
    x: -10
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.22
    }
  }
};
const PersonalWorkCard = ({ children, datespan, name, description, links, tags }) => {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      variants: wrapper,
      className: "grid gap-8 sm:grid-cols-2 sm:gap-4",
      initial: "offscreen",
      whileInView: "onscreen",
      viewport: { once: true, amount: 0.2 },
      children: [
        /* @__PURE__ */ jsxs(motion.div, { variants: text, children: [
          /* @__PURE__ */ jsx(motion.span, { variants: text, className: "mt-2 text-sm font-normal leading-5 text-gray-500", children: datespan }),
          /* @__PURE__ */ jsx(motion.h4, { variants: text, className: "mt-2 text-lg font-medium leading-6 text-gray-900", children: name }),
          /* @__PURE__ */ jsx(motion.p, { variants: text, className: "mt-2 text-base font-normal leading-6 text-gray-500 ", children: description }),
          /* @__PURE__ */ jsx("div", { className: "flex space-x-4", children: links?.map((link) => /* @__PURE__ */ jsx(motion.div, { variants: text, children: /* @__PURE__ */ jsx(LinkButton, { className: "mt-2", text: link.text, href: link.href }) }, link.text)) }),
          /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: tags.map((tag) => /* @__PURE__ */ jsx(Badge, { value: tag }, tag)) }) })
        ] }),
        /* @__PURE__ */ jsx(motion.div, { variants: image, className: "order-first sm:order-last sm:place-self-end", children })
      ]
    }
  );
};

const linistore = new Proxy({"src":"/_astro/linistore.C6QU-3qQ.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbookpro/Documents/Code/Project/Pribadi/portfolio-web-v2/src/assets/linistore.png";
							}
							
							return target[name];
						}
					});

const linimitra = new Proxy({"src":"/_astro/linimitra.JUkf9fKm.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbookpro/Documents/Code/Project/Pribadi/portfolio-web-v2/src/assets/linimitra.png";
							}
							
							return target[name];
						}
					});

const liniseller1 = new Proxy({"src":"/_astro/liniseller1.DMscD6kr.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbookpro/Documents/Code/Project/Pribadi/portfolio-web-v2/src/assets/liniseller1.png";
							}
							
							return target[name];
						}
					});

const sobatTani = new Proxy({"src":"/_astro/sobat_tani.BRpUY6qg.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbookpro/Documents/Code/Project/Pribadi/portfolio-web-v2/src/assets/sobat_tani.png";
							}
							
							return target[name];
						}
					});

const ProfessionalPortfolio = () => {
  return /* @__PURE__ */ jsxs("div", { className: "my-8 flex flex-col gap-4", children: [
    /* @__PURE__ */ jsx(SectionHeader, { name: "professional work" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 grid gap-8", children: [
      /* @__PURE__ */ jsx(
        PersonalWorkCard,
        {
          datespan: "",
          name: "Lini Store",
          description: "E-commerce with social commerce concept (group buying). B2C Platform for display product from UMKM/SME.",
          links: [
            {
              text: "Lini Store",
              href: "https://linistore.id"
            }
          ],
          tags: ["React", "Typescript", "Vite", "Ant Design", "Tailwind CSS", "GraphQL", "Less"],
          children: /* @__PURE__ */ jsx("a", { href: "", children: /* @__PURE__ */ jsx("div", { className: "flex h-full w-full overflow-hidden rounded-2xl bg-gray-100 hover:bg-gray-50 sm:w-52 lg:w-full", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-[150px] h-[150px] transition-transform group-hover:z-20 group-hover:scale-110 sm:w-28 lg:w-full",
              src: linistore.src,
              alt: "ping4gitlab iphone screenshot 1"
            }
          ) }) })
        }
      ),
      /* @__PURE__ */ jsx(
        PersonalWorkCard,
        {
          datespan: "",
          name: "Lini Mitra",
          description: "Freelance Canvasser App is a versatile tool designed to streamline the canvassing process for freelance workers.",
          links: [
            {
              text: "Lini Mitra Web",
              href: "https://mitra.linistore.id"
            },
            {
              text: "Play Store",
              href: "https://play.google.com/store/apps/details?id=id.lini.mitra"
            }
          ],
          tags: ["React", "Typescript", "Vite", "Chakra UI", "SCSS", "GraphQL", "PWA", "Capacitor by Ionic"],
          children: /* @__PURE__ */ jsx("a", { href: "", children: /* @__PURE__ */ jsx("div", { className: "flex h-full w-full overflow-hidden rounded-2xl bg-gray-100 hover:bg-gray-50 sm:w-52 lg:w-full", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-[200px] h-[200px] transition-transform group-hover:z-20 group-hover:scale-110 sm:w-28 lg:w-full",
              src: linimitra.src,
              alt: "ping4gitlab iphone screenshot 1"
            }
          ) }) })
        }
      ),
      /* @__PURE__ */ jsx(
        PersonalWorkCard,
        {
          datespan: "",
          name: "Lini Seller",
          description: "Seller Center for UMKM/SME to manage their product and order. The product will be displayed in Lini Store and Lini Mitra",
          links: [
            {
              text: "Lini Seller",
              href: "https://seller.linistore.id"
            },
            {
              text: "Play Store",
              href: "https://drive.google.com/file/d/1K0zdrp0ZRBmgHRAhDiao-tDJnyKEgJZw/view?usp=share_link"
            }
          ],
          tags: ["Angular", "Typescript", "Ant Design", "SCSS", "GraphQL", "PWA", "Capacitor by Ionic"],
          children: /* @__PURE__ */ jsx("a", { href: "", children: /* @__PURE__ */ jsx("div", { className: "flex h-full w-full overflow-hidden rounded-2xl bg-gray-100 hover:bg-gray-50 sm:w-52 lg:w-full", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-[150px] h-[150px] transition-transform group-hover:z-20 group-hover:scale-110 sm:w-28 lg:w-full",
              src: liniseller1.src,
              alt: "ping4gitlab iphone screenshot 1"
            }
          ) }) })
        }
      ),
      /* @__PURE__ */ jsx(
        PersonalWorkCard,
        {
          datespan: "",
          name: "Sobat Tani App",
          description: "An application that helps farmers to meet their garden needs. Farmers can also consult with argonomists to get the best harvest results.",
          tags: ["React", "Typescript", "Chakra UI", "SCSS", "Restful API", "PWA", "Capacitor by Ionic"],
          children: /* @__PURE__ */ jsx("a", { href: "", children: /* @__PURE__ */ jsx("div", { className: "flex h-full w-full overflow-hidden rounded-2xl bg-gray-100 hover:bg-gray-50 sm:w-52 lg:w-full", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-[200px] h-[200px] transition-transform group-hover:z-20 group-hover:scale-110 sm:w-28 lg:w-full",
              src: sobatTani.src,
              alt: "ping4gitlab iphone screenshot 1"
            }
          ) }) })
        }
      )
    ] })
  ] });
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="/favicon.ico"><link rel="sitemap" href="/sitemap-index.xml"><link rel="canonical" href=""><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Arthur Darwanto</title><meta name="description" content="Hello there! I'm Arthur Darwwanto, a software engineer based in Indonesia and I love programming."><meta name="keywords" content="Arthur Darwanto, Darwanto Arthur, software engineer, web developer, front-end developer, full-stack developer, software developer, react developer, react native developer, nodejs, nestjs">${renderHead()}</head> <body class="h-full antialiased" data-astro-cid-sckkx6r4> <div class="mx-auto mt-8 max-w-screen-lg w-full px-4 py-12 lg:pt-16 lg:pb-28" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/Users/macbookpro/Documents/Code/Project/Pribadi/portfolio-web-v2/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Arthur Darwanto" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeadingSection", HeadingSection, {})} ${renderComponent($$result2, "Divider", Divider, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Divider", "client:component-export": "default" })} ${renderComponent($$result2, "WorkExperience", WorkExperience, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/sections/WorkExpSection", "client:component-export": "default" })} ${renderComponent($$result2, "Divider", Divider, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Divider", "client:component-export": "default" })} ${renderComponent($$result2, "ProfessionalPortfolio", ProfessionalPortfolio, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/sections/ProfessionalPortoSection", "client:component-export": "default" })} ` })}`;
}, "/Users/macbookpro/Documents/Code/Project/Pribadi/portfolio-web-v2/src/pages/index.astro", void 0);

const $$file = "/Users/macbookpro/Documents/Code/Project/Pribadi/portfolio-web-v2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
