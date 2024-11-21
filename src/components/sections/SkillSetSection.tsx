import SectionHeader from "@components/SectionHeader";
import React from "react";

const SkillSetSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader name="my skill sets" />
      <div className="w-full flex gap-2">
        <div className="p-1 rounded-lg border-2 flex items-center justify-center border-slate-300 w-fit cursor-pointer  bg-slate-100">
          <div className="group inline-flex items-center text-sm font-medium leading-6 text-gray-900 hover:text-gray-700 sm:text-xs sm:leading-5">
            Javasript/Typescript
          </div>
        </div>
        <div className="p-1 rounded-lg border-2 flex items-center justify-center border-slate-300 w-fit cursor-pointer  bg-slate-100">
          <div className="group inline-flex items-center text-sm font-medium leading-6 text-gray-900 hover:text-gray-700 sm:text-xs sm:leading-5">
            ReactJS/NextJS
          </div>
        </div>
        <div className="p-1 rounded-lg border-2 flex items-center justify-center border-slate-300 w-fit cursor-pointer  bg-slate-100">
          <div className="group inline-flex items-center text-sm font-medium leading-6 text-gray-900 hover:text-gray-700 sm:text-xs sm:leading-5">
            NodeJS/Express/NestJS
          </div>
        </div>
        <div className="p-1 rounded-lg border-2 flex items-center justify-center border-slate-300 w-fit cursor-pointer  bg-slate-100">
          <div className="group inline-flex items-center text-sm font-medium leading-6 text-gray-900 hover:text-gray-700 sm:text-xs sm:leading-5">
            CSS/SASS/LESS
          </div>
        </div>
        <div className="p-1 rounded-lg border-2 flex items-center justify-center border-slate-300 w-fit cursor-pointer  bg-slate-100">
          <div className="group inline-flex items-center text-sm font-medium leading-6 text-gray-900 hover:text-gray-700 sm:text-xs sm:leading-5">
            Rest API/Graphql
          </div>
        </div>
        <div className="p-1 rounded-lg border-2 flex items-center justify-center border-slate-300 w-fit cursor-pointer  bg-slate-100">
          <div className="group inline-flex items-center text-sm font-medium leading-6 text-gray-900 hover:text-gray-700 sm:text-xs sm:leading-5">
            Tailwind CSS
          </div>
        </div>
        <div className="p-1 rounded-lg border-2 flex items-center justify-center border-slate-300 w-fit cursor-pointer  bg-slate-100">
          <div className="group inline-flex items-center text-sm font-medium leading-6 text-gray-900 hover:text-gray-700 sm:text-xs sm:leading-5">
            PostgreSQL
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSetSection;
