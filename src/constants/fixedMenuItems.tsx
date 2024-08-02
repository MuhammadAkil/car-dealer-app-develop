import { routes } from "@/config/routes";
import { IconType } from "react-icons/lib";
import { PiCarDuotone, PiUserCircleDuotone } from "react-icons/pi";
import { atom } from "jotai";
import { BiHome } from "react-icons/bi";
import OverviewIcon from "@/components/icons/overview";
import OnboadringIcon from "@/components/icons/Onboadring";
import DollarIcon from "@/components/icons/dollar";
import CustomerIcon from "@/components/icons/customers";
export interface SubMenuItemType {
  name: string;
  description?: string;
  href: string;
  badge?: string;
}

export interface ItemType {
  name: string;
  icon: IconType;
  href?: string;
  description?: string;
  badge?: string;
  subMenuItems?: SubMenuItemType[];
}

export interface MenuItemsType {
  id: string;
  name: string;
  title: string;
  icon: IconType;
  menuItems: ItemType[];
}

export const menuItems: MenuItemsType[] = [
  {
    id: "1",
    name: "Home",
    title: "Home",
    icon: BiHome,
    menuItems: [],
  },
  {
    id: "2",
    name: "Inventory",
    title: "Inventory",
    icon: PiCarDuotone,
    menuItems: [
      {
        name: "Overview",
        icon: OverviewIcon,
        href: routes.overview,
      },

      {
        name: "Vehicle Onboarding",
        icon: OnboadringIcon,
        subMenuItems: [
          {
            name: "Overview",
            href: routes.inventory.overview,
          },
          {
            name: "New Unit",
            href: routes.inventory.newUnit,
          },
          {
            name: "Transport",
            href: routes.inventory.transport,
          },
          {
            name: "Inspection & Reparing",
            href: routes.inventory.inspectionAndRepair,
          },
          {
            name: "Preparation & Detailing",
            href: routes.inventory.preparationAndDetailing,
          },
        ],
      },
      {
        name: "Sales & payment",
        icon: DollarIcon,
        subMenuItems: [],
      },
    ],
  },
  {
    id: "3",
    name: "CRM",
    title: "CRM",
    icon: PiUserCircleDuotone,
    menuItems: [
      {
        name: "Customers",
        icon: CustomerIcon,
        href: routes.crm.customers,
      },

      {
        name: "Vehicle Onboarding",
        icon: OnboadringIcon,
        // subMenuItems: [
        //   {
        //     name: "Overview",
        //     href: routes.inventory.overview,
        //   },
        //   {
        //     name: "New Unit",
        //     href: routes.inventory.newUnit,
        //   },
        //   {
        //     name: "Transport",
        //     href: routes.inventory.transport,
        //   },
        //   {
        //     name: "Inspection & Reparing",
        //     href: routes.inventory.inspectionAndRepair,
        //   },
        //   {
        //     name: "Preparation & Detailing",
        //     href: routes.inventory.preparationAndDetailing,
        //   },
        // ],
      }
    ],
  },
];
export const menuItemAtom = atom(menuItems[1]);
