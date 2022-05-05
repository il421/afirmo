import Link from "next/link";
import { FunctionComponent } from "react";
import { NavItemProps } from "./NavItem.types";

export const NavItem: FunctionComponent<NavItemProps> = ({
  item,
  isActive
}) => {
  return (
    // @TODO opacity
    <li
      className={`nav-item nav-item--hover text-xs opacity-80 lg:text-sm min-w-max ${
        isActive ? "nav-item--active" : ""
      }`}
    >
      <Link href={item.href}>{item.name}</Link>
    </li>
  );
};
