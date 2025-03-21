import { useMemo } from "react";
import { MegamenuItem, NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";
import { useTranslation } from "react-i18next";

export const useNavigationDemo = (): NavItemType[] => {
  const { t } = useTranslation();

  const NAVIGATION_DEMO: NavItemType[] = useMemo(() => {
    const items: NavItemType[] = [
      {
        id: ncNanoId(),
        href: "/",
        name: t("navigator.home"),
        isNew: true,
      },
      {
        id: ncNanoId(),
        href: "/listing-stay",
        name: t("navigator.hotels"),
      },
      {
        id: ncNanoId(),
        href: "/contact",
        name: t("navigator.contact"),
        isNew: true,
      },
      {
        id: ncNanoId(),
        href: "/blog",
        name: t("navigator.blog"),
      },
      {
        id: ncNanoId(),
        href: "/",
        name: t("navigator.campaigns"),
      },
      {
        id: ncNanoId(),
        href: "/about",
        name: t("navigator.about"),
      },
    ];

    // Aynı name'e sahip olanları ayıkla (tekrarları sil)
    const seen = new Set();
    const filtered = items.filter((item) => {
      if (seen.has(item.name)) return false;
      seen.add(item.name);
      return true;
    });

    return filtered;
  }, [t]);

  return NAVIGATION_DEMO;
};
