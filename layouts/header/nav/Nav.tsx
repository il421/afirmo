import Link from "next/link";
import { useRouter } from "next/router";
import { NavItemType } from "./NavItem.types";
import { NavItem } from "./NavItem";

export const Nav = () => {
  const navItems: NavItemType[] = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Business profile", href: "/business-profile" },
    { name: "Marketing", href: "/marketing" },
    { name: "Money", href: "/money" },
    { name: "Support", href: "/support" }
  ];
  const router = useRouter();
  const isActive = (path: string) => !!router.pathname.match(path);
  return (
    <nav>
      <ul className="flex items-center h-full">
        {navItems.map(item => (
          <NavItem key={item.href} item={item} isActive={isActive(item.href)} />
        ))}
      </ul>
    </nav>
  );
};
