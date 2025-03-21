import React, { FC } from "react";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionHeroArchivePage from "components/SectionHeroArchivePage/SectionHeroArchivePage";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionGridHasMap from "./SectionGridHasMap";
import { Helmet } from "react-helmet-async";

export interface ListingStayMapPageProps {
  className?: string;
}

const ListingStayMapPage: FC<ListingStayMapPageProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-ListingStayMapPage relative ${className}`}
      data-nc-id="ListingStayMapPage"
    >
      <Helmet>
        <title>Chisfis || Booking React Template</title>
      </Helmet>
      <BgGlassmorphism />

      {/* SECTION HERO */}
      <div className="container pt-10 pb-24 lg:pt-16 lg:pb-28">
        <SectionHeroArchivePage currentPage="Stays" currentTab="Stays" />
      </div>

      {/* SECTION */}
      <div className="container pb-24 lg:pb-28 2xl:pl-10 xl:pr-0 xl:max-w-none">
        <SectionGridHasMap />
      </div>

      <div className="container overflow-hidden">
        {/* SECTION 1 */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewCategories
            heading="Explore by types of stays"
            subHeading="Explore houses based on 10 types of stays"
            categoryCardType="card5"
            itemPerRow={5}
            sliderStyle="style2"
            uniqueClassName="ListingStayMapPage"
          />
        </div>
      </div>
    </div>
  );
};

export default ListingStayMapPage;
