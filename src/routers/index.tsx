import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import PageHome from "../containers/PageHome/PageHome";
import ListingStayPage from "../containers/ListingStayPage/ListingStayPage";
import ListingStayMapPage from "../containers/ListingStayPage/ListingStayMapPage";
import ListingStayDetailPage from "../containers/ListingDetailPage/listing-stay-detail/ListingStayDetailPage";
import CheckOutPagePageMain from "../containers/CheckOutPage/CheckOutPage";
import PayPage from "../containers/PayPage/PayPage";
import CommentListing from "../components/CommentListing/CommentListing";
import AuthorPage from "../containers/AuthorPage/AuthorPage";
import AccountPage from "../containers/AccountPage/AccountPage";
import PageSubcription from "../containers/PageSubcription/PageSubcription";
import PageLogin from "../containers/PageLogin/PageLogin";
import PageSignUp from "../containers/PageSignUp/PageSignUp";
import PageAbout from "../containers/PageAbout/PageAbout";
import PageContact from "../containers/PageContact/PageContact";
import BlogSingle from "../containers/BlogPage/BlogSingle";
import BlogPage from "../containers/BlogPage/BlogPage";
import AccountBilling from "../containers/AccountPage/AccountBilling";
import AccountSavelists from "../containers/AccountPage/AccountSavelists";
import AccountPass from "../containers/AccountPage/AccountPass";
import useWindowSize from "../hooks/useWindowResize";
import SiteHeader from "../containers/SiteHeader";
import Page404 from "../containers/Page404/Page404";
import FooterNav from "../components/FooterNav";
import Footer from "../shared/Footer/Footer";

export const pages: Page[] = [
  { path: "/", exact: true, component: PageHome },
  { path: "/#", exact: true, component: PageHome },
  { path: "/home-1-header-2", exact: true, component: PageHome },
  //
  { path: "/listing-stay", component: ListingStayPage },
  { path: "/listing-stay-map", component: ListingStayMapPage },
  { path: "/listing-stay-detail", component: ListingStayDetailPage },

  { path: "/checkout", component: CheckOutPagePageMain },
  { path: "/pay-done", component: PayPage },
  //
  {path: "/comments", component: CommentListing},
  { path: "/author", component: AuthorPage },
  { path: "/account", component: AccountPage },
  { path: "/account-password", component: AccountPass },
  { path: "/account-savelists", component: AccountSavelists },
  { path: "/account-billing", component: AccountBilling },
  //
  { path: "/blog", component: BlogPage },
  { path: "/blog-single", component: BlogSingle },
  //
  { path: "/contact", component: PageContact },
  { path: "/about", component: PageAbout },
  { path: "/signup", component: PageSignUp },
  { path: "/login", component: PageLogin },
  { path: "/subscription", component: PageSubcription },
  //
];

const MyRoutes = () => {
  let WIN_WIDTH = useWindowSize().width;
  if (typeof window !== "undefined") {
    WIN_WIDTH = WIN_WIDTH || window.innerWidth;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteHeader />

      <Routes>
        {pages.map(({ component, path }) => {
          const Component = component;
          return <Route key={path} element={<Component />} path={path} />;
        })}
        <Route element={<Page404 />} />
      </Routes>

      {WIN_WIDTH < 768 && <FooterNav />}
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
