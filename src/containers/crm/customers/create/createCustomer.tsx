'use client';

import { useState } from 'react';
import { PiXBold } from 'react-icons/pi';
import { Controller, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/form';
import { Input, Button, ActionIcon, Title, Select } from 'rizzui';
// import { useModal } from '@/app/shared/modal-views/use-modal';
import { useModal } from '@/shared/modal-views/use-modal';
import {CreateCarInput,createCarSchema} from '@/utils/validators/create-car.schema';
import FormGroup from '@/shared/form-group';
export default function CreateCar() {
  const { closeModal } = useModal();
  const [reset, setReset] = useState({});
  const [isLoading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<CreateCarInput> = (data) => {
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
    <Form<CreateCarInput>
      resetValues={reset}
      onSubmit={onSubmit}
      validationSchema={createCarSchema}
      className="grid grid-cols-1 gap-6 p-6 @container md:grid-cols-1 [&_.rizzui-input-label]:font-medium [&_.rizzui-input-label]:text-gray-900"
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
            <div className="col-span-full flex items-center justify-between">
              <Title as="h4" className="font-semibold">
                Add a new Car
              </Title>
              <ActionIcon size="sm" variant="text" onClick={closeModal}>
                <PiXBold className="h-auto w-5" />
              </ActionIcon>
            </div>

            <Input
              label="Age"
              placeholder="Enter Car Age"
              {...register('Age')}
              className="col-span-full"
              error={errors.Age?.message}
            />

          
            <Input
              label="Year"
              placeholder="Enter Car Year"
              {...register('Year')}
              className="col-span-full"
              error={errors.Year?.message}
            />
            {/* <Input
              label="Make"
              placeholder="Enter Car Make"
              {...register('Make')}
              className="col-span-full"
              error={errors.Make?.message}
            />
            <Input
              label="Model"
              placeholder="Enter Car Model"
              {...register('Model')}
              className="col-span-full"
              error={errors.Model?.message}
            /> */}
            <Input
              label="Vin Number"
              placeholder="Enter Car Vin Number"
              {...register('VinNumber')}
              className="col-span-full"
              error={errors.VinNumber?.message}
            />
          

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
