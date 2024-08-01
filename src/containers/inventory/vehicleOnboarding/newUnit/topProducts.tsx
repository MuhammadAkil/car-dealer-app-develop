"use client";

import Image from "next/image";
import { Text } from "rizzui";
import WidgetCard from "@/components/widgetCard";
import DropdownAction from "@/components/charts/dropdownAction";
export const topProducts = [
  {
    id: 1,
    thumbnail:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/1.webp",
    title: "Chevrolet Silverado",
    description: "Watch",
    price: "$1,290.00",
    rating: [4, 4.5, 5],
  },
  {
    id: 2,
    thumbnail:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/2.webp",
    title: "2024 Ford F-150",
    description: "Apple Headphone",
    price: "$1000.00",
    rating: [3, 4, 5],
  },
  {
    id: 3,
    thumbnail:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/3.webp",
    title: "2024 Toyota RAV8",
    description: "Home Decor",
    price: "$220.00",
    rating: [2, 3, 5],
  },
  {
    id: 4,
    thumbnail:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/4.webp",
    title: "Chevrolet Silverado 1500",
    description: "Gadgets",
    price: "$150.90",
    rating: [4, 4.5, 5],
  },
  {
    id: 5,
    thumbnail:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/5.webp",
    title: "Chevrolet Silverado 1500",
    description: "Accessories",
    price: "$20.00",
    rating: [4, 4.5, 5],
  },
  {
    id: 6,
    thumbnail:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/6.webp",
    title: "2024 Toyota RAV8",
    description: "Fashion",
    price: "$220.00",
    rating: [4, 4.5, 5],
  },
  {
    id: 7,
    thumbnail:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp",
    title: "Shoes",
    description: "Fashion",
    price: "$150.90",
    rating: [4, 4.5, 5],
  },
  {
    id: 8,
    thumbnail:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/8.webp",
    title: "Perfume",
    description: "Fashion",
    price: "$70.00",
    rating: [4, 4.5, 5],
  },
];

export const topProductList = [
  {
    id: 1,
    thumbnail:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/1.webp",
    title: "Casio Watch",
    description: "Watch",
    price: "$1,290.00",
    rating: [4, 4.5, 5],
  },
  {
    id: 2,
    thumbnail:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/2.webp",
    title: "Apple Headphone",
    description: "Apple Headphone",
    price: "$1000.00",
    rating: [3, 4, 5],
  },
  {
    id: 3,
    thumbnail:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/3.webp",
    title: "Marc Decadent",
    description: "Home Decor",
    price: "$220.00",
    rating: [2, 3, 5],
  },
  {
    id: 4,
    thumbnail:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/4.webp",
    title: "Classic Heels",
    description: "Gadgets",
    price: "$150.90",
    rating: [4, 4.5, 5],
  },
  {
    id: 5,
    thumbnail:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/5.webp",
    title: "Apple Watch",
    description: "Accessories",
    price: "$20.00",
    rating: [4, 4.5, 5],
  },
  {
    id: 6,
    thumbnail:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/6.webp",
    title: "Nike Air SHoe",
    description: "Fashion",
    price: "$220.00",
    rating: [4, 4.5, 5],
  },
  {
    id: 7,
    thumbnail:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp",
    title: "Blue Jacket",
    description: "Fashion",
    price: "$150.90",
    rating: [4, 4.5, 5],
  },
];

const currentDate = new Date();
const previousMonthDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() - 1,
  currentDate.getDate()
);

const viewOptions = [
  {
    label: "June",
    value: "June",
  },
  {
    label: "May",
    value: "May",
  },
  {
    label: "April",
    value: "April",
  },
  {
    label: "March",
    value: "March",
  },
];

export default function TopProducts({ className }: { className?: string }) {
  return (
    <WidgetCard
      title={"Top Sold Vehicles in US"}
      description={
        <>
          <DropdownAction
            options={viewOptions}
            onChange={() => {}}
            dropdownClassName="!z-0"
          />
        </>
      }
      descriptionClassName="flex items-center justify-end [&_.react-datepicker-wrapper]:w-full [&_.react-datepicker-wrapper]:max-w-[228px] text-gray-500"
      className={className}
    >
      <div className="custom-scrollbar -me-2 mt-[18px] grid max-h-[460px] gap-4 overflow-y-auto @sm:gap-5">
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
