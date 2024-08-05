"use client";

import cn from "@/utils/classNames";
import { useAtomValue } from "jotai";
import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SimpleBar from "@/components/simpleBar";
import StatusBadge from "@/components/getStatusBadge";
import { useColorPresetName } from "@/hooks/useThemeColor";
import { ItemType, menuItemAtom } from "@/constants/fixedMenuItems";
import { useSidebars } from "@/hooks/useSidebars";
import { Collapse } from "rizzui";
import { PiCaretDownBold } from "react-icons/pi";

function LinkMenuItem({ item }: { item: ItemType }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const Icon = item.icon;

  return (
    <Link
      href={item.href ?? "/"}
      className={cn(
        " mb-0.5 flex items-center justify-between rounded-md py-2 capitalize duration-200 last-of-type:mb-1 lg:last-of-type:mb-2",
        isActive
          ? "font-bold text-[#18746c]"
          : "hover:text-primary font-medium text-gray-500"
      )}
    >
      <div
        className={cn(
          "group relative flex cursor-pointer items-center justify-between rounded-full px-4"
        )}
      >
        <span className="flex items-center group-hover:fill-[#18746c] group-hover:text-[#18746c]">
          <span
            className={cn(
              "me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]"
            )}
          >
            <Icon color={isActive ? "#18746c" : ""} />
          </span>
          {item.name}
        </span>
      </div>
    </Link>
  );
}

function CollapsibleMenuItem({ item }: { item: ItemType }) {
  const pathname = usePathname();
  const { colorPresetName } = useColorPresetName();

  const pathnameExistInDropdowns: any = item?.subMenuItems?.filter(
    (dropdownItem) => dropdownItem.href === pathname
  );
  const isDropdownOpen = Boolean(pathnameExistInDropdowns?.length);
  const isActive = item.subMenuItems?.some(
    (subMenuItem) => subMenuItem.href === pathname
  );

  const Icon = item.icon;

  return (
    <Collapse
      defaultOpen={isDropdownOpen}
      header={({ open, toggle }) => (
        <div
          onClick={toggle}
          className={cn(
            "group relative flex cursor-pointer items-center justify-between rounded-full px-4 py-2 mb-2",
            isDropdownOpen
              ? ' rounded-full px-4 py- duration-200 bg-gray-100 font-bold text-[#18746c] dark:bg-gray-100 dark:text-primary"'
              : "text-gray-700 group-hover:text-[#18746c] transition-colors duration-200 hover:bg-gray-100 dark:text-gray-700/90 dark:hover:text-gray-700"
          )}
        >
          <span className="flex items-center group-hover:text-[#18746c]">
            <span
              className={cn(
                "me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px] group-hover:fill-[#18746c] group-hover:text-[#18746c]",
                isDropdownOpen
                  ? "font-bold text-[#18746c]"
                  : "text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-700 group-hover:text-[#18746c]"
              )}
            >
              <Icon color={isDropdownOpen ? "#18746c" : ""} />
            </span>
            {item.name}
          </span>
          <PiCaretDownBold
            strokeWidth={3}
            className={cn(
              "h-3.5 w-3.5 -rotate-90 group-hover:text-[#18746c] text-gray-500 transition-transform duration-200 rtl:rotate-90",
              open && "rotate-0 rtl:rotate-0"
            )}
          />
        </div>
      )}
    >
      {item?.subMenuItems?.map((dropdownItem, index) => {
        const isChildActive = pathname === (dropdownItem?.href as string);

        return (
          <Link
            href={dropdownItem?.href}
            key={dropdownItem?.name + index}
            className={cn(
              "mx-3.5 mb-0.5 flex items-center justify-between rounded-md px-3.5 py-2 font-medium capitalize last-of-type:mb-1 lg:last-of-type:mb-2 2xl:mx-5",
              isChildActive
                ? "font-bold text-[#18746c]"
                : "text-gray-500 transition-colors duration-200 hover:text-[#18746c]"
            )}
          >
            <div className="flex items-center truncate">
              <span
                className={cn(
                  "me-[18px] ms-1 inline-flex h-1 w-1 rounded-full bg-current transition-all duration-200",
                  isChildActive
                    ? " font-bold text-[#18746c] ring-[1px]"
                    : "opacity-40"
                )}
              />
              <span className="truncate">{dropdownItem?.name}</span>
            </div>
            {dropdownItem?.badge?.length ? (
              <StatusBadge status={dropdownItem?.badge} />
            ) : null}
          </Link>
        );
      })}
    </Collapse>
  );
}

export default function ExpandableSidebar() {
  const { expandedLeft } = useSidebars();
  const selectedMenu = useAtomValue(menuItemAtom);
  return (
    <div
      className={cn(
        "fixed start-[104px] top-[91px] z-50 hidden h-full w-0 overflow-x-hidden duration-200 xl:flex",
        !!expandedLeft && "w-[294px]"
      )}
    >
      <SimpleBar className="h-[calc(100vh_-_100px)] min-w-[294px] pe-2.5">
        <p className="mb-3 font-lexend text-xs font-normal uppercase tracking-widest text-gray-500">
          {selectedMenu.title}
        </p>
        <div className="flex flex-col gap-2">
          {selectedMenu.menuItems.map((menu) => (
            <Fragment key={menu.name}>
              {menu.href ? (
                <LinkMenuItem item={menu} />
              ) : (
                <CollapsibleMenuItem item={menu} />
              )}
            </Fragment>
          ))}
        </div>
      </SimpleBar>
    </div>
  );
}
