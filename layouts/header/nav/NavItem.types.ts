interface NavItemType {
  name: string;
  href: string;
}

interface NavItemProps {
  item: NavItemType;
  isActive: boolean;
}

export type { NavItemType, NavItemProps };
