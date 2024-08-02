import PageHeader from "@/components/pageHeader";
import CreateCar from "@/containers/crm/customers/create/createCustomer";
import EditCar from "@/containers/crm/customers/customers-list/EditCar";
import CustomerTable from "@/containers/crm/customers/customers-list/table";
import ViewCar from "@/containers/crm/customers/customers-list/ViewCar";
import { CustomersData, headerColsForCustomer } from "@/data/customers-data";
import ModalButton from "@/shared/modal-button";

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
  return (
    <>
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
              label="Add Unit"
              view={<CreateCar/>}
              customSize="600px"
              className="mt-0"
            />
          </div>
        </div>
        </PageHeader>
      <CustomerTable data={CustomersData} headerCols={headerColsForCustomer} />
    </>
  );
}
