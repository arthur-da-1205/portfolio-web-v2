import SectionHeader from "@components/SectionHeader";
import PersonalWorkCard from "../PersonalWorkCard";
import linistore from "@assets/linistore.png";
import linimitra from "@assets/linimitra.png";
import liniseller1 from "@assets/liniseller1.png";
import sobatTani from "@assets/sobat_tani.png";

const ProfessionalPortfolio = () => {
  return (
    <div className="my-8 flex flex-col gap-4">
      <SectionHeader name="professional work" />
      <div className="mt-4 grid gap-8">
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
          tags={["React", "Typescript", "Vite", "Ant Design", "Tailwind CSS", "GraphQL", "Less"]}
        >
          <a href="">
            <div className="overflow-hidden rounded-2xl bg-gray-100 hover:bg-gray-50 sm:w-1/2 md:w-full lg:w-full xl:w-full">
              <img
                className="lg:w-[250px] lg:h-[150px] transition-transform group-hover:z-20 group-hover:scale-110 sm:w-28 sm:h-28"
                src={linistore.src}
                alt="ping4gitlab iphone screenshot 1"
              />
            </div>
          </a>
        </PersonalWorkCard>

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
          tags={["React", "Typescript", "Vite", "Chakra UI", "SCSS", "GraphQL", "PWA", "Capacitor by Ionic"]}
        >
          <a href="">
            <div className="overflow-hidden rounded-2xl bg-gray-100 hover:bg-gray-50 sm:w-1/2 md:w-full lg:w-full xl:w-full">
              <img
                className="lg:w-[200px] lg:h-[200px] transition-transform group-hover:z-20 group-hover:scale-110"
                src={linimitra.src}
                alt="ping4gitlab iphone screenshot 1"
              />
            </div>
          </a>
        </PersonalWorkCard>
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
          tags={["Angular", "Typescript", "Ant Design", "SCSS", "GraphQL", "PWA", "Capacitor by Ionic"]}
        >
          <a href="">
            <div className="overflow-hidden rounded-2xl bg-gray-100 hover:bg-gray-50 sm:w-1/2 md:w-full lg:w-full xl:w-full">
              <img
                className="lg:w-[250px] lg:h-[150px] transition-transform group-hover:z-20 group-hover:scale-110 sm:w-28 sm:h-28"
                src={liniseller1.src}
                alt="ping4gitlab iphone screenshot 1"
              />
            </div>
          </a>
        </PersonalWorkCard>
        <PersonalWorkCard
          datespan=""
          name="Sobat Tani App"
          description="An application that helps farmers to meet their garden needs. Farmers can also consult with argonomists to get the best harvest results."
          // links={[
          //   {
          //     text: "Lini Seller",
          //     href: "https://seller.linistore.id",
          //   },
          //   {
          //     text: "Play Store",
          //     href: "https://drive.google.com/file/d/1K0zdrp0ZRBmgHRAhDiao-tDJnyKEgJZw/view?usp=share_link",
          //   },
          // ]}
          tags={["React", "Typescript", "Chakra UI", "SCSS", "Restful API", "PWA", "Capacitor by Ionic"]}
        >
          <a href="">
            <div className="overflow-hidden rounded-2xl bg-gray-100 hover:bg-gray-50 sm:w-1/2 md:w-full lg:w-full xl:w-full">
              <img
                className="lg:w-[200px] lg:h-[200px] transition-transform group-hover:z-20 group-hover:scale-110"
                src={sobatTani.src}
                alt="ping4gitlab iphone screenshot 1"
              />
            </div>
          </a>
        </PersonalWorkCard>
      </div>
    </div>
  );
};

export default ProfessionalPortfolio;
