import React from "react";
import NavigationItem from "./NavigationItem";
import {useNavigationDemo} from "data/navigation";

function Navigation() {
  const NAVIGATION_DEMO = useNavigationDemo();
  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative">
      {NAVIGATION_DEMO.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
