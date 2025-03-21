import BackgroundSection from "../../components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "../../components/BgGlassmorphism/BgGlassmorphism";
import SectionClientSay from "../../components/SectionClientSay/SectionClientSay";
import SectionGridCategoryBox from "../../components/SectionGridCategoryBox/SectionGridCategoryBox";
import SectionHero2 from "../../components/SectionHero2/SectionHero2";
import SectionOurFeatures from "../../components/SectionOurFeatures/SectionOurFeatures";
import SectionSliderNewCategories from "../../components/SectionSliderNewCategories/SectionSliderNewCategories";
import { TaxonomyType } from "../../data/types";
import SectionGridFeaturePlaces from "./SectionGridFeaturePlaces";


const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay",
    name: "Enjoy the great cold",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://picsum.photos/200/300",
  },
  {
    id: "222",
    href: "/listing-stay",
    name: "Sleep in a floating way",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://picsum.photos/200/300",
  },
  {
    id: "3",
    href: "/listing-stay",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://picsum.photos/200/300",
  },
  {
    id: "4",
    href: "/listing-stay",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://picsum.photos/200/300",
  },
  {
    id: "5",
    href: "/listing-stay",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://picsum.photos/200/300",
  },
];

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />
      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero2 className="pt-10 lg:pt-16 lg:pb-16" />

 {/* SECTION 1 */}
 <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionSliderNewCategories
            categories={DEMO_CATS_2}
            categoryCardType="card4"
            itemPerRow={4}
            heading="Suggestions for discovery"
            subHeading="Popular places to stay that Chisfis recommends for you"
            sliderStyle="style2"
            uniqueClassName="PageHome_s2"
          />
        </div>
        {/* SECTION2 */}
        <SectionOurFeatures />
  {/* SECTION */}
  <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay uniqueClassName="PageHome_" />
        </div>
        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionGridFeaturePlaces />
        </div>
        {/* SECTION */}
        <SectionGridCategoryBox />

        {/* SECTION 1 */}
        <SectionSliderNewCategories
          heading="Explore by types of stays"
          subHeading="Explore houses based on 10 types of stays"
          categoryCardType="card5"
          itemPerRow={5}
          uniqueClassName="PageHome_s3"
        />

      </div>
    </div>
  );
}

export default PageHome;
