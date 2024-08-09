"use client";

import Image from "next/image";
import { Text } from "rizzui";
import WidgetCard from "@/components/widgetCard";
import DropdownAction from "@/components/charts/dropdownAction";
export const topProducts = [
  {
    id: 1,
    thumbnail: "/cars/chevrolet.jpg",
    title: "Chevrolet Silverado",
    description: "Watch",
    price: "$1,290.00",
    rating: [4, 4.5, 5],
  },
  {
    id: 2,
    thumbnail: "/cars/corrola.jpg",
    title: "2024 Ford F-150",
    description: "Apple Headphone",
    price: "$1000.00",
    rating: [3, 4, 5],
  },
  {
    id: 3,
    thumbnail: "/cars/kia.jpg",
    title: "2024 Toyota RAV8",
    description: "Home Decor",
    price: "$220.00",
    rating: [2, 3, 5],
  },
  {
    id: 4,
    thumbnail: "/cars/mazda.jpg",
    title: "Chevrolet Silverado 1500",
    description: "Gadgets",
    price: "$150.90",
    rating: [4, 4.5, 5],
  },
  {
    id: 5,
    thumbnail: "/cars/subaru.jpg",
    title: "Chevrolet Silverado 1500",
    description: "Accessories",
    price: "$20.00",
    rating: [4, 4.5, 5],
  },
  {
    id: 6,
    thumbnail: "/cars/corrola.jpg",
    title: "2024 Ford F-150",
    description: "Apple Headphone",
    price: "$1000.00",
    rating: [3, 4, 5],
  },
  {
    id: 7,
    thumbnail: "/cars/kia.jpg",
    title: "2024 Toyota RAV8",
    description: "Home Decor",
    price: "$220.00",
    rating: [2, 3, 5],
  },
  {
    id: 8,
    thumbnail: "/cars/mazda.jpg",
    title: "Chevrolet Silverado 1500",
    description: "Gadgets",
    price: "$150.90",
    rating: [4, 4.5, 5],
  },
  {
    id: 9,
    thumbnail: "/cars/mazda.jpg",
    title: "Chevrolet Silverado 1500",
    description: "Gadgets",
    price: "$150.90",
    rating: [4, 4.5, 5],
  },
];

const viewOptions = [
  {
    label: "June 2024",
    value: "June 2024",
  },
  {
    label: "May 2024",
    value: "May 2024",
  },
  {
    label: "April 2024",
    value: "April 2024",
  },
  {
    label: "March 2024",
    value: "March 2024",
  },
];

export default function TopProducts({
  className,
  isExpanded,
}: {
  className?: string;
  isExpanded: boolean;
}) {
  return (
    <WidgetCard
      title={"Top Sold Vehicles in US"}
      descriptionClassName="flex items-center justify-end [&_.react-datepicker-wrapper]:w-full [&_.react-datepicker-wrapper]:max-w-[228px] text-gray-500"
      className={className}
    >
      <div className="flex flex-center items-center gap-1">
        <div>Month:</div>
        <DropdownAction
          options={viewOptions}
          onChange={() => {}}
          dropdownClassName="!z-0"
        />
      </div>
      <div className={`custom-scrollbar -me-2 mt-[18px] grid ${isExpanded ? 'max-h-[730px]': 'max-h-[340px]' }  gap-4 overflow-y-auto @sm:gap-5`}>
        {topProducts.map((product) => (
          <div
            key={product.title + product.id}
            className="flex items-start pe-2"
          >
            <div className="relative me-3 h-11 w-20 shrink-0 overflow-hidden rounded bg-gray-100 @sm:h-16 @sm:w-28">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex w-full items-start justify-between">
              <div>
                <Text className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700"></Text>
                <Text className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">
                  #{product.id}
                  <br />
                  {product.title}
                </Text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}
