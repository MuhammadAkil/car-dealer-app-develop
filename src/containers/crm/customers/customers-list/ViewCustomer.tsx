"use client";

import { Title, Button } from "rizzui";
import { getStatusBadge } from "./columns";
import Image from "next/image";

export default function ViewCustomer({ closeModal }: any) {
  const customerData = [
    { label: "Phone", value: "+1234567890" },
    { label: "State", value: "Indiana" },
    { label: "City", value: "Indianapolis" },
    
  ];

  return (
    <div className="grid grid-cols-1 gap-6 p-3 pt-0 @container [&_.rizzui-input-label]:font-medium [&_.rizzui-input-label]:text-gray-900">
      <>
        <div className="grid gap-2">
          <div key={"make"} className="flex flex-col items-start">
            <Title as="h5" className="font-medium text-gray-700 text-base">John Doe</Title>
            <div className="text-gray-500 block">johndoe@example.com</div>
          </div>
          <div
            key={"phote"}
            className="flex flex-row items-center justify-between gap-3"
          >
            <div
              style={{
                position: "relative",
                width: `${100}%`,
                height: `${200}px`,
              }}
            >
              <Image
                src={
                  "/customers/view-customer.jpg"
                }
                alt={"photo"}
                fill
                className="rounded-lg"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          {customerData.map(({ label, value }) => (
            <>
              <>
                <div key={label} className="flex flex-row items-center gap-1">
                  <Title
                    as="h6"
                    className="font-medium text-gray-700 2xl:text-sm"
                  >
                    {label}:
                  </Title>
                  {label == "Current Status" ? (
                    getStatusBadge(value)
                  ) : (
                    <span className="text-gray-500">{value}</span>
                  )}
                </div>
              </>
            </>
          ))}
        </div>

        <div className="col-span-full flex items-center justify-end gap-4">
          <Button
            variant="solid"
            onClick={closeModal}
            className="hover:bg-primaryHover w-full @xl:w-auto"
          >
            More Details
          </Button>
        </div>
      </>
    </div>
  );
}
