import { MenuItemsType } from "@/constants/fixedMenuItems";

export function getActiveMainMenuIndex(pathname: string, menuItems: MenuItemsType[]): number {
  let activeIndex = 0; // Default to Inventory

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    for (let j = 0; j < menuItem.menuItems.length; j++) {
      const items = menuItem.menuItems[j];

      if (items.href === pathname) {
        activeIndex = i;
        return activeIndex;
      }

      if (items.subMenuItems) {
        for (let k = 0; k < items.subMenuItems.length; k++) {
          const subMenuItem = items.subMenuItems[k];
          if (subMenuItem.href === pathname) {
            activeIndex = i;
            return activeIndex;
          }
        }
      }
    }
  }

  return activeIndex;
}
