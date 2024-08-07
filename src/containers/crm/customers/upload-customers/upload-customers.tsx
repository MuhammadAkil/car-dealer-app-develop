"use client";

import { useState } from "react";
import { Controller, SubmitHandler } from "react-hook-form";
import { Form } from "@/components/form";
import { Input, Button, Select, FileInput } from "rizzui";
import { CreateCustomerInput,createCustomerSchema } from "@/utils/validators/create-customer.schema";
import { FiUploadCloud } from "react-icons/fi";
export const CARSTATUSES = {
  newArrival: "New Arrival",
  transport: "Transport",
  inspection: "Inspection",
  repair: "Repair",
  preparation: "Preparation",
} as const;

export const carStatuses = Object.values(CARSTATUSES).map((status) => ({
  label: status,
  value: status,
}));

export default function UploadCustomers({ closeModal }: any) {
  const [reset, setReset] = useState({});
  const [isLoading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<CreateCustomerInput> = (data) => {
    const formattedData = {
      ...data,
      createdAt: new Date(),
    };
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setReset({
        RegisteredIn: "",
        Color: "",
        EngineCapacity: "",
        BodyType: "",
      });
      closeModal();
    }, 600);
  };

  return (
    <Form<CreateCustomerInput>
      resetValues={reset}
      onSubmit={onSubmit}
      validationSchema={createCustomerSchema}
      className="grid grid-cols-1 gap-6 p-4 pt-0 @container md:grid-cols-1 [&_.rizzui-input-label]:font-medium [&_.rizzui-input-label]:text-gray-900"
    >
      {({
        register,
        control,
        watch,
        getValues,
        setValue,
        formState: { errors },
      }) => {
        console.log("errors: ", errors);
        return (
          <>
            <div className="col-span-2 flex flex-col items-center gap-4"></div>
            <FileInput
        label="Upload Data"
        rounded="pill"
      />
            {/* <Controller
              name="City"
              control={control}
              render={({ field: { name, onChange, value } }) => (
                <Select
                  options={carStatuses}
                  value={value}
                  onChange={onChange}
                  name={name}
                  label="Current Status"
                  className="col-span-full"
                  error={errors?.City?.message}
                  getOptionValue={(option) => option.value}
                  displayValue={(selected: string) =>
                    carStatuses.find((option) => option.value === selected)
                      ?.label ?? selected
                  }
                  dropdownClassName="!z-[1]"
                  inPortal={false}
                />
              )}
            /> */}

            <div className="col-span-full flex items-center justify-end gap-4">
              <Button
                variant="outline"
                onClick={closeModal}
                className=""
              >
                Cancel
              </Button>
              <Button
                type="submit"
                isLoading={isLoading}
                onClick={closeModal}
                className="hover:bg-primaryHover flex gap-3">
               <FiUploadCloud/> Upload
              </Button>
            </div>
          </>
        );
      }}
    </Form>
  );
}
