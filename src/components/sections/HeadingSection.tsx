import Signature from "@components/SIgnature";

import GithubSVG from "@assets/github-svg";
import InstagramSVG from "@assets/instagram-svg";
import LinkedInSVG from "@assets/linkedin-svg";
import photo from "@assets/photo_profile.png";
import LinkButton from "@components/LlinkButton";

const HeadingSection = () => {
  return (
    <div className="flex gap-1 sm:flex-col md:flex-col lg:flex-row">
      <div className="sm:w-fit">
        <div className="flex gap-2">
          <div className="sm:h-1/2 sm:w-[120px]">
            <img src={photo.src} alt="Profile" width={200} />
          </div>
          <div className="flex flex-col">
            <span className="relative inline-block mb-2 md:mb-3 lg:mb-5">
              <Signature className="w-40 text-neutral-500" />
            </span>
            <h1 className="text-3xl font-medium leading-7 text-gray-900">Hello! I'm Arthur Darwanto</h1>
          </div>
        </div>

        <div className="mt-8">
          <p className="mt-4 max-w-screen-lg leading-relaxed text-gray-500">
            an Software Developer specialized in React, Node and Typescript. Passionate in programming. I enjoy writing clean
            and maintainable code and staying up to date with the latest technology standards and best practices.
          </p>
          <div className="flex flex-row gap-x-1 mt-4">
            <div className="p-1 rounded-lg border-2 flex items-center justify-center border-slate-500 w-fit cursor-pointer hover:border-slate-600">
              <a href="https://github.com/arthur-da-1205">
                <GithubSVG />
              </a>
            </div>
            <div className="p-1 rounded-lg border-2 flex items-center justify-center border-slate-500 w-fit cursor-pointer hover:border-slate-600">
              <a href="https://linkedin.com/in/arthur-darwanto">
                <LinkedInSVG />
              </a>
            </div>
            <div className="p-1 rounded-lg border-2 flex items-center justify-center border-slate-500 w-fit cursor-pointer hover:border-slate-600">
              <a href="https://www.instagram.com/arthurdarwanto">
                <InstagramSVG />
              </a>
            </div>
            <div className="ml-1 px-1 border-dotted border-b-2 border-slate-500 w-fit cursor-pointer hover:border-slate-600">
              <LinkButton
                className="text-sm lg:text-base"
                text="Download CV"
                href="https://drive.google.com/file/d/10jn4wV7o_lxqAdI5bU38CFzs2X3CSu-r/view?usp=sharing"
              />
            </div>
            <div className="ml-1 px-1 border-dotted border-b-2 border-slate-500 w-fit cursor-pointer hover:border-slate-600">
              <LinkButton
                className="text-sm lg:text-base"
                text="Contact Me"
                href="https://api.whatsapp.com/send/?phone=6281913581675&text&type=phone_number&app_absent=0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingSection;
