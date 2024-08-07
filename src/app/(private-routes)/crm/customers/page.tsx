"use client";
import BulkUpload from "@/components/icons/BulkUpload";
import ManualEntry from "@/components/icons/ManualEntry";
import PageHeader from "@/components/pageHeader";
import SimpleDropdown from "@/components/simpleDropdown";
import CreateCustomer from "@/containers/crm/customers/create/createCustomer";
import { CustomersData, headerColsForCustomer } from "@/data/customers-data";
import CustomerTable from "@/containers/crm/customers/customers-list/table"
import { useState } from "react";
import { Modal } from "rizzui";
import UploadCustomers from "@/containers/crm/customers/upload-customers/upload-customers";
import AddManual from "@/components/icons/AddManual";
import UploadData from "@/components/icons/UploadData";

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

export default function CustomersPage() {
  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [modalWidth, setModalWidth] = useState<string>("!max-w-4xl"); 


  const handleCloseModal = () => {
    setModalState(false);
    setModalContent(null);
    setModalWidth("!max-w-4xl");

  };

  const dropdownOptions = [
    {
      label: "Manual Customer Entry",
      onClick: () => {
        setModalContent(<CreateCustomer closeModal={handleCloseModal} />);
        setModalState(true);

      },
      icon: <AddManual />,
    },
    {
      label: "Upload Customer Data",
      onClick: () => {
        setModalContent(<UploadCustomers closeModal={handleCloseModal} />);
        setModalState(true);
        setModalWidth("!max-w-xl");

      },
      icon: <UploadData />,
    },
  ];

  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      >
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <div className="-order-5 flex basis-auto justify-end @xl:-order-4 @4xl:-order-1">
<SimpleDropdown buttonText="Add Customer" options={dropdownOptions} placement="bottom-end" />
          </div>
        </div>
      </PageHeader>
      <CustomerTable data={CustomersData} headerCols={headerColsForCustomer} />
      <Modal
        isOpen={modalState}
        onClose={handleCloseModal}
        overlayClassName="backdrop-blur"
        containerClassName={`!shadow-2xl ${modalWidth}`} 
      >
        {modalContent}
      </Modal>

    </>
  );
}
