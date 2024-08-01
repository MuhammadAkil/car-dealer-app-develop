"use client";

import { useState } from "react";
import { Controller, SubmitHandler } from "react-hook-form";
import { Form } from "@/components/form";
import { Input, Button, Select } from "rizzui";
import {
  CreateCarInput,
  createCarSchema,
} from "@/utils/validators/create-car.schema";
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

export default function EditCar({ closeModal }: any) {
  const [reset, setReset] = useState({});
  const [isLoading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<CreateCarInput> = (data) => {
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
    <Form<CreateCarInput>
      resetValues={reset}
      onSubmit={onSubmit}
      validationSchema={createCarSchema}
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
            <Input
              label="Purchase Price"
              placeholder="Enter Car Purchase Price"
              {...register("purchasePrice")}
              className="col-span-full"
              error={errors.purchasePrice?.message}
            />
            <Input
              label="Odometer"
              placeholder="Enter Car odometer"
              {...register("Odometer")}
              className="col-span-full"
              error={errors.VinNumber?.message}
            />
            <Controller
              name="CurrentStatus"
              control={control}
              render={({ field: { name, onChange, value } }) => (
                <Select
                  options={carStatuses}
                  value={value}
                  onChange={onChange}
                  name={name}
                  label="Current Status"
                  className="col-span-full"
                  error={errors?.CurrentStatus?.message}
                  getOptionValue={(option) => option.value}
                  displayValue={(selected: string) =>
                    carStatuses.find((option) => option.value === selected)
                      ?.label ?? selected
                  }
                  dropdownClassName="!z-[1]"
                  inPortal={false}
                />
              )}
            />

            <div className="col-span-full flex items-center justify-end gap-4">
              <Button
                variant="outline"
                onClick={closeModal}
                className="w-full @xl:w-auto"
              >
                Edit more
              </Button>
              <Button
                type="submit"
                isLoading={isLoading}
                className="hover:bg-primaryHover w-full @xl:w-auto"
              >
                Save
              </Button>
            </div>
          </>
        );
      }}
    </Form>
  );
}
