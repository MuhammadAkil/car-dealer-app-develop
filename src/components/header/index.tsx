"use client";

import Link from "next/link";
import Logo from "@/components/logo";
import cn from "@/utils/classNames";
import StickyHeader from "@/components/stickyHeader";
import { Badge, ActionIcon, Avatar } from "rizzui";
import RingBellIcon from "@/components/icons/RingBellIcon";
import ChatIcon from "@/components/icons/ChatIcon";
import HamburgerButton from "@/components/hamburgerButton";
import Sidebar from "@/components/sidebarDrawer";

export default function Header({ className }: { className?: string }) {
  return (
    <StickyHeader
      className={cn(
        "z-[990] justify-between bg-white xl:pe-8  dark:bg-gray-50/50",
        className
      )}
    >
      <div className="hidden items-center gap-3 xl:flex">
        <Link
          aria-label="Site Logo"
          href={"/"}
          className="me-4 hidden w-[155px] shrink-0 text-gray-800 hover:text-gray-900 lg:me-5 xl:block"
        >
          <Logo className="max-w-[155px]" />
        </Link>
      </div>
      <div className="flex w-full items-center justify-between gap-5 xl:w-[calc(100%_-_190px)] 2xl:w-[calc(100%_-_310px)] 3xl:gap-6">
        <div className="flex max-w-2xl items-center xl:w-auto">
          <HamburgerButton
            view={<Sidebar className="static w-full 2xl:w-full" />}
          />
          <Link
            aria-label="Site Logo"
            href="/"
            className="me-4 w-9 shrink-0 text-gray-800 hover:text-gray-900 lg:me-5 xl:hidden"
          >
            <Logo iconOnly={true} />
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <div className="ms-auto grid shrink-0 grid-cols-3 items-center gap-2 text-gray-700 xs:gap-3 xl:gap-4">
            <ActionIcon
              aria-label="Notification"
              variant="text"
              className="relative h-[34px] w-[34px] shadow backdrop-blur-md dark:bg-gray-100 md:h-9 md:w-9"
            >
              <RingBellIcon className="h-[18px] w-auto" />
              <Badge
                renderAsDot
                color="warning"
                enableOutlineRing
                className="absolute right-2.5 top-2.5 -translate-y-1/3 translate-x-1/2"
              />
            </ActionIcon>
            <ActionIcon
              aria-label="Messages"
              variant="text"
              className="relative h-[34px] w-[34px] shadow backdrop-blur-md dark:bg-gray-100 md:h-9 md:w-9"
            >
              <ChatIcon className="h-[18px] w-auto" />
              <Badge
                renderAsDot
                color="success"
                enableOutlineRing
                className="absolute right-2.5 top-2.5 -translate-y-1/3 translate-x-1/2"
              />
            </ActionIcon>
            <Avatar
              src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-14.webp"
              name="John Doe"
              className={cn("!h-[34px] w-[34px] sm:!h-[34px] sm:!w-[34px]")}
            />
          </div>
        </div>
      </div>
    </StickyHeader>
  );
}
