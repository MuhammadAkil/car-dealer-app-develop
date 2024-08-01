"use client";

import DropdownAction from "@/components/charts/dropdownAction";
import { Text } from "rizzui";
import cn from "@/utils/classNames";
import WidgetCard from "@/components/widgetCard";

const data = [
  {
    country: "Toyota",
    count: 50,
  },
  {
    country: "Chevrolet",
    count: 80,
  },
  {
    country: "Hyundai",
    count: 50,
  },
  {
    country: "Ford",
    count: 30,
  },
  {
    country: "Subaro",
    count: 30,
  },
];

const viewOptions = [
  {
    label: "Weekly",
    value: "weekly",
  },
  {
    label: "Monthly",
    value: "monthly",
  },
  {
    label: "Custom",
    value: "custom",
  },
];

export default function TopInventorySold({ className }: { className?: string }) {
  return (
    <WidgetCard
      title="Top Inventory Sold"
      action={
        <div className="flex items-center gap-5">
          <DropdownAction
            options={viewOptions}
            dropdownClassName="!z-0"
            className="rounded-md border"
            onChange={(v) => console.log(v)}
          />
        </div>
      }
      className={cn("flex flex-col", className)}
    >
      <div className="mt-8 flex grow flex-col gap-4 md:gap-6">
        {data.map((item) => (
          <SingleBar key={item.country} item={item} />
        ))}
      </div>
    </WidgetCard>
  );
}

function SingleBar({
  item,
}: {
  item?: {
    country?: string;
    count?: number;
  };
}) {
  let percentage = item?.count && (item?.count).toFixed();

  return (
    <div className="relative">
      <Text className="mb-1 font-medium text-gray-900 dark:text-gray-600">
        {item?.country}
      </Text>
      <div className="flex items-center gap-2">
        <div
          className="h-[30px] rounded bg-[#009488] shadow"
          style={{
            width: `${percentage}%`,
          }}
        />
        <Text className="shrink-0 font-medium text-gray-900">
          {percentage}
        </Text>
      </div>
    </div>
  );
}
