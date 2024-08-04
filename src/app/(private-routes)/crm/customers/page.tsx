
"use client";
import PageHeader from "@/components/pageHeader";
import CreateCustomer from "@/containers/crm/customers/create/createCustomer";
import CreateCar from "@/containers/crm/customers/create/createCustomer";
// import EditCar from "@/containers/crm/customers/customers-list/EditCar";
import CustomerTable from "@/containers/crm/customers/customers-list/table";
import ViewCar from "@/containers/crm/customers/customers-list/ViewCustomer";
import { CustomersData, headerColsForCustomer } from "@/data/customers-data";
import ModalButton from "@/shared/modal-button";
import { useState } from "react";
import {Modal,Button,Text,ActionIcon,Input, Select, Textarea} from "rizzui";


const statusOptions = [
  {
    value: 'publish',
    label: 'Publish',
  },
  {
    value: 'pending',
    label: 'Pending',
  },
  {
    value: 'draft',
    label: 'Draft',
  },
];

const pageHeader = {
  title: "Customers",
  breadcrumb: [
    {
      href: "/",
      name: "CRM",
    },
    {
      href: "/crm/customers",
      name: "Customers",
    },
  ],
};

const options = [
  { label: 'Male ', value: 'male' },
  { label: 'Female ', value: 'femail' },
  { label: 'Other', value: 'other' },
];
const states = [
  {label: "California", value: "California" },
  { label: "Texas", value: "Texas" },
  { label: "Florida", value: "Florida" },
  { label: "New York", value: "New York" }
];


export default function CustomersPage() {
    const [modalState, setModalState] = useState(false);
    const [value, setValue] = useState('Male');
    const [state, setState] = useState('California');

    

  return (
    <>
       <Modal
        isOpen={modalState}
        onClose={() => setModalState(false)}
        overlayClassName="backdrop-blur"
        containerClassName="!max-w-4xl !shadow-2xl"
      
      >
        {/* <div className="m-auto px-7 pt-6 pb-8">
          <div className="mb-7 flex items-center justify-between">
          <h3><Text>New Customer</Text></h3>
            <ActionIcon
            
              size="sm"
              variant="text"
              onClick={() => setModalState(false)} children={undefined}            >
            </ActionIcon>
          </div>
          <div className="grid grid-cols-2 gap-y-6 gap-x-5 [&_label>span]:font-medium">
            <Input label="First Name *" inputClassName="border-2" size="lg" className="col-span-1" />
            <Input label="Last Name *" inputClassName="border-2" size="lg" className="col-span-1"/>
            <Input label="Full Name *"  inputClassName="border-2" size="lg" className="col-span-1"/>
            <Input label="Company/Cosigner *" inputClassName="border-2" size="lg"className="col-span-1"/>
            <Select
      label="Gender"
      options={options}
      value={value}
      onChange={setValue}
    />            <Input label="Birth Date *" type="datetime-local" inputClassName="border-2" size="lg" />
            <Input label="Email *" inputClassName="border-2" size="lg" className="col-span-1"/>
            <Input label="Mobile *" type="tel" inputClassName="border-2" size="lg"className="col-span-1"/>
            <Textarea
        label="Mailing Address *"
        placeholder="Enter Vendor Address"
      />
            <Input label="APT, Number *" inputClassName="border-2" size="lg" />
            <Input label="PostalCode/Zip *" inputClassName="border-2" size="lg" />
            <Input label="City *" inputClassName="border-2" size="lg" className="col-span-1"/>
            <Select
      label="Province/State"
      placeholder="Province/State"
      options={states}
      value={state}
      onChange={setState}
    />                <Button
              type="submit"
              size="lg"
              className="col-span-2 mt-2 hover:bg-primaryHover"
              onClick={() => setModalState(false)}
            >
              Add Customer
            </Button>
          </div>
        </div> */}
        <CreateCustomer closeModal={() => setModalState(false)}/>
        
      </Modal>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      >
       <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          {/* <ExportButton
            data={productsData}
            fileName="product_data"
            header="ID,Name,Category,Product Thumbnail,SKU,Stock,Price,Status,Rating"
          /> */}
          <div className="-order-5 flex basis-auto justify-end @xl:-order-4 @4xl:-order-1">
             <ModalButton
             
              label="New Customer"
              view={<CreateCustomer closeModal={() => setModalState(false)}/>}
              customSize="600px"
              className="mt-0"
              onClick={() => setModalState(true)}
            />
          </div>
        </div>
        </PageHeader>
      <CustomerTable data={CustomersData} headerCols={headerColsForCustomer} />
    </>
  );
}
