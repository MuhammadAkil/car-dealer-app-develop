import { routes } from "@/config/routes";
import { BiHome } from "react-icons/bi";
import OverviewIcon from "@/components/icons/overview";
import OnboadringIcon from "@/components/icons/Onboadring";
import DollarIcon from "@/components/icons/dollar";
import CustomerIcon from "@/components/icons/customers";

export const sidebarMenuItems = [
  {
    name: "Home",
    href: routes.overview,
    icon: <BiHome />,
  },
  {
    name: "Inventory",
  },
 {
        name: "Customers",
        icon: CustomerIcon,
        href: routes.customers,
      },
  {
    name: "Overview",
    href: routes.overview,
    icon: <OverviewIcon />,
  },
  {
    name: "Vehicle Onboarding",
    href: "#",
    icon: <OnboadringIcon />,
    dropdownItems: [
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
    href: "#",
    icon: <DollarIcon />,
    dropdownItems: [],
  },
];
