'use client';

import { useState } from 'react';
import { PiXBold } from 'react-icons/pi';
import { Controller, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/form';
import { Input, Button, ActionIcon, Title, Text, Select, Textarea, FileInput } from 'rizzui';
import { useModal } from '@/shared/modal-views/use-modal';
import { CreateCarInput, createCarSchema } from '@/utils/validators/create-car.schema';
import { CreateCustomerInput, createCustomerSchema } from '@/utils/validators/create-customer.schema';

type CreateCustomerProps = {
  closeModal: () => void;
};
export const GENDER = {
  male: "Male",
  femail: "Femail",
  others: "Others",
} as const;
export const CITIES = {
  newYork: "New York",
  losAngeles: "Los Angeles",
  chicago: "Chicago",
  houston: "Houston",
  phoenix: "Phoenix",
} as const;
export const STATES = {
  california: "California",
  texas: "Texas",
  florida: "Florida",
  newYork: "New York",
  illinois: "Illinois",
} as const;
export const COUNTRIES = {
  usa: "United States",
  canada: "Canada",
  mexico: "Mexico",
  uk: "United Kingdom",
  germany: "Germany",
} as const;


export const genderStatuses = Object.values(GENDER).map((status) => ({
  label: status,
  value: status,
}));
export const cityStatuses = Object.values(CITIES).map((city) => ({
  label: city,
  value: city,
}));
export const stateStatuses = Object.values(STATES).map((state) => ({
  label: state,
  value: state,
}));
export const countryStatuses = Object.values(COUNTRIES).map((country) => ({
  label: country,
  value: country,
}));



export default function CreateCar({ closeModal }: CreateCustomerProps) {
  // const { closeModal } = useModal();
  const [reset, setReset] = useState({});
  const [isLoading, setLoading] = useState(false);



  const onSubmit: SubmitHandler<CreateCustomerInput> = (data) => {
    // set timeout ony required to display loading state of the create category button
    const formattedData = {
      ...data,
      createdAt: new Date(),
    };
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setReset({
        RegisteredIn: '',
        Color: '',
        EngineCapacity: '',
        BodyType: '',
      });
      closeModal();
    }, 600);
  };

  return (
    <Form<CreateCustomerInput>
      resetValues={reset}
      onSubmit={onSubmit}
      validationSchema={createCustomerSchema}
      className="grid grid-cols-1 gap-3 p-6 @container md:grid-cols-1 [&_.rizzui-input-label]:font-medium [&_.rizzui-input-label]:text-gray-900"
    >
      {({
        register,
        control,
        watch,
        getValues,
        setValue,
        formState: { errors },
      }) => {
        console.log('errors: ', errors);
        return (
          <>
            <div className=" flex items-center justify-between">
              <Title as="h4" className="font-semibold">
                Add a new Customer
              </Title>
              <ActionIcon size="sm" variant="text" onClick={closeModal}>
                <PiXBold className="h-auto w-5" />
              </ActionIcon>
            </div>

            <div className="py-3">
              <Text className="mb-2 border-b pb-2 font-semibold">Personal Information</Text>
              <div className="grid grid-cols-3 gap-y-6 gap-x-5 [&_label>span]:font-medium">
                <Input
                  label="First Name"
                  placeholder="Enter First Name"
                  {...register('firstName')}
                  className="col-span-1"
                  error={errors.firstName?.message}
                />
                <Input
                  label="Last Name"
                  placeholder="Enter Last Name"
                  {...register('lastName')}
                  className="col-span-1"
                  error={errors.lastName?.message}
                />
                <Input
                  label="Full Name"
                  placeholder="Enter Full Name"
                  {...register('fullName')}
                  className="col-span-1"
                  error={errors.fullName?.message}
                />
                <Input
                  label="Company/Cosigner"
                  placeholder="Enter Company/Cosigner"
                  {...register('Company')}
                  className="col-span-1"
                  error={errors.Company?.message}
                />
                <Controller
                  name="Gender"
                  control={control}
                  render={({ field: { name, onChange, value } }) => (
                    <Select
                      options={genderStatuses}
                      value={value}
                      onChange={onChange}
                      name={name}
                      label="Gender"
                      className="col-span-1"
                      error={errors?.Gender?.message}
                      getOptionValue={(option) => option.value}
                      displayValue={(selected: string) =>
                        genderStatuses.find((option) => option.value === selected)
                          ?.label ?? selected
                      }
                      dropdownClassName="!z-[1] h-auto"
                      inPortal={false}
                    />
                  )}
                />
                <Input
                  label="Birth Date"
                  placeholder="Enter Birth Date"
                  type='date'
                  {...register('birthDate')}
                  className="col-span-1"
                  error={errors.birthDate?.message}
                />

              </div>
            </div>
            <div className="py-3">
              <Text className="mb-2 border-b pb-2 font-semibold">Contact Information</Text>
              <div className="grid grid-cols-2 gap-y-6 gap-x-5 [&_label>span]:font-medium">
                <Input
                  label="Email"
                  type='email'
                  placeholder="Enter Email"
                  {...register('Email')}
                  className="col-span-1"
                  error={errors.Email?.message}
                />
                <Input
                  label="Mobile"
                  type='tel'
                  placeholder="Enter Mobile"
                  {...register('Mobile')}
                  className="col-span-1"
                  error={errors.Mobile?.message}
                />
              </div>
            </div>
            <div className="py-3">
              <Text className="mb-2 border-b pb-2 font-semibold">Address Information</Text>
              <div className="grid grid-cols-3 py-3 gap-y-6 gap-x-5 [&_label>span]:font-medium">
                <Input
                  label="APT Number"
                  placeholder="Enter Vendor APT Number "
                  {...register('aptNumber')}
                  className="col-span-1"
                  error={errors.aptNumber?.message}
                />
                <Input
                  label="Postal Code/Zip"
                  placeholder="Enter Postal Code/Zip"
                  {...register('postalCode')}
                  className="col-span-1"
                  error={errors.postalCode?.message}
                />
                <Controller
                  name="City"
                  control={control}
                  render={({ field: { name, onChange, value } }) => (
                    <Select
                      options={cityStatuses}
                      value={value}
                      onChange={onChange}
                      name={name}
                      label="City"
                      className="col-span-1"
                      error={errors?.City?.message}
                      getOptionValue={(option) => option.value}
                      displayValue={(selected: string) =>
                        cityStatuses.find((option) => option.value === selected)?.label ?? selected
                      }
                      dropdownClassName="!z-[1] h-auto"
                      inPortal={false}
                    />
                  )}
                />
              </div>
              <div className="grid grid-cols-2 py-3 gap-y-6 gap-x-5 [&_label>span]:font-medium">

                <Controller
                  name="State"
                  control={control}
                  render={({ field: { name, onChange, value } }) => (
                    <Select
                      options={stateStatuses}
                      value={value}
                      onChange={onChange}
                      name={name}
                      label="Province/State"
                      className="col-span-1"
                      error={errors?.State?.message}
                      getOptionValue={(option) => option.value}
                      displayValue={(selected: string) =>
                        stateStatuses.find((option) => option.value === selected)?.label ?? selected
                      }
                      dropdownClassName="!z-[1] h-auto"
                      inPortal={false}
                    />
                  )}
                />
                <Controller
                  name="Country"
                  control={control}
                  render={({ field: { name, onChange, value } }) => (
                    <Select
                      options={countryStatuses}
                      value={value}
                      onChange={onChange}
                      name={name}
                      label="Country"
                      className="col-span-1"
                      error={errors?.Country?.message}
                      getOptionValue={(option) => option.value}
                      displayValue={(selected: string) =>
                        countryStatuses.find((option) => option.value === selected)?.label ?? selected
                      }
                      dropdownClassName="!z-[1] h-auto"
                      inPortal={false}
                    />
                  )}
                />
              </div>
              <div className="grid grid-cols-2 py-3 gap-y-6 gap-x-5 [&_label>span]:font-medium">

                <Textarea
                  label="Mailing Address"
                  rows={2}
                  placeholder="Enter Vendor Address..."
                  {...register('Address')}
                  className="col-span-3"
                  error={errors.Address?.message}
                />
              </div>
            </div>

            <div className="py-3">
              <Text className="mb-2 border-b pb-2 font-semibold">Driver Lincense Information</Text>
              <div className="grid grid-cols-2 gap-y-6 gap-x-5 [&_label>span]:font-medium">
                <Input
                  label="Driver Licens Number"
                  placeholder="Enter Driver Licens Number"
                  {...register('licenseNumber')}
                  className="col-span-1"
                  error={errors.licenseNumber?.message}
                />
                <Input
                  label="Driver Licens Expiring Date"
                  {...register('licenseExpiryDate')}
                  className="col-span-1"
                  type='date'
                  error={errors.licenseExpiryDate?.message}
                />
                <FileInput
                  label="Upload Driver Lincense"
                  rounded="lg"
                  {...register('lincenseImage')}
                  error={errors.lincenseImage?.message}

                />
              </div>
            </div>
            <div className="col-span-full flex items-center justify-end gap-4">
              <Button
                variant="outline"
                onClick={closeModal}
                className="w-full @xl:w-auto"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                isLoading={isLoading}
                className="hover:bg-primaryHover w-full @xl:w-auto"
              >
                Add Car
              </Button>
            </div>
          </>
        );
      }}
    </Form>
  );
}
