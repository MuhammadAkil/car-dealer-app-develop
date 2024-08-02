"use client";

import { HeaderCell } from "@/components/table";
import {
  Badge,
  Text,
  Checkbox,
  Progressbar,
  Tooltip,
  ActionIcon,
} from "rizzui";
import EyeIcon from "@/components/icons/eye";
import PencilIcon from "@/components/icons/pencil";
import { PiStarFill } from "react-icons/pi";
import Image from "next/image";
import WarningIcon from "@/components/icons/Warning";
import TrashIcon from "@/components/icons/trash";
import CustomPopover from "@/components/customPopover";
import { CustomerType } from "@/data/customers-data";

export type ProductType = {
  id: string;
  age: string;
  photo: string;
  year: string;
  stockNumber: string;
  purchasePrice: number;
  vin: string;
  Odometer: string;
  status: string;
  make: string;
  model: string;
};

export function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case "repair":
      return (
        <div className="flex items-center cursor-pointer">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium text-orange-dark flex gap-1">
            {status}
            <CustomPopover
              title={``}
              isHoverEnable
              description={`Description of the issue`}
              onDelete={() => {}}
              button1Text="Take action"
              placement="top"
            >
              <WarningIcon />
            </CustomPopover>
          </Text>
        </div>
      );
    case "new arrival":
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium text-green-light">{status}</Text>
        </div>
      );
      case "inactive":
        return (
          <div className="flex items-center">
            <Badge color="success" renderAsDot />
            <Text className="ms-2 font-medium text-red-light">{status}</Text>
          </div>
        ); 
             case "active":
        return (
          <div className="flex items-center">
            <Badge color="success" renderAsDot />
            <Text className="ms-2 font-medium text-green-dark">{status}</Text>
          </div>
        );
    default:
      return (
        <div className="flex items-center">
          <Badge renderAsDot className="bg-gray-400" />
          <Text className="ms-2 font-medium text-gray-600">{status}</Text>
        </div>
      );
  }
}

// get stock status
function getStockStatus(status: number) {
  if (status === 0) {
    return (
      <>
        <Progressbar
          value={status}
          color="danger"
          label={"out of stock"}
          className="h-1.5 w-24 bg-red/20"
        />
        <Text className="pt-1.5 text-[13px] text-gray-500">out of stock </Text>
      </>
    );
  } else if (status <= 20) {
    return (
      <>
        <Progressbar
          value={status}
          color="warning"
          label={"low stock"}
          className="h-1.5 w-24 bg-orange/20"
        />
        <Text className="pt-1.5 text-[13px] text-gray-500">
          {status} low stock
        </Text>
      </>
    );
  } else {
    return (
      <>
        <Progressbar
          value={status}
          color="success"
          label={"stock available"}
          className="h-1.5 w-24 bg-green/20"
        />
        <Text className="pt-1.5 text-[13px] text-gray-500">
          {status} in stock
        </Text>
      </>
    );
  }
}

// get rating calculation
function getRating(rating: number[]) {
  let totalRating = rating.reduce((partialSum, value) => partialSum + value, 0);
  let review = totalRating / rating?.length;

  return (
    <div className="flex items-center">
      <span className="me-1 shrink-0">{review.toFixed(1)}</span>
      {[...new Array(5)].map((arr, index) => {
        return index < Math.round(review) ? (
          <PiStarFill className="w-4 fill-orange text-orange" key={index} />
        ) : (
          <PiStarFill className="w-4 fill-gray-300 text-gray-300" key={index} />
        );
      })}{" "}
      <span className="ms-1 shrink-0">({totalRating})</span>
    </div>
  );
}

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
  setModalOpen: (value: boolean) => void;
  setViewModalOpen: (value: boolean) => void;
  headerCols: string[]
};

export const getColumns = ({
  data,
  sortConfig,
  checkedItems,
  onDeleteItem,
  onHeaderCellClick,
  handleSelectAll,
  onChecked,
  setModalOpen,
  setViewModalOpen,
  headerCols,
}: Columns) => {
  const allCols = [
    {
      title: (
        <div className="ps-3.5">
          <Checkbox
            title={"Select All"}
            onChange={handleSelectAll}
            checked={checkedItems.length === data.length}
            className="cursor-pointer"
          />
        </div>
      ),
      dataIndex: "checked",
      key: "checked",
      width: 30,
      render: (_: any, row: any) => (
        <div className="inline-flex ps-3.5">
          <Checkbox
            className="cursor-pointer"
            checked={checkedItems.includes(row.id)}
            {...(onChecked && { onChange: () => onChecked(row.id) })}
          />
        </div>
      ),
    },
    // {
    //   title: <HeaderCell title="Customer" />,
    //   dataIndex: "customer",
    //   key: "customer",
    //   width: 150,
    //   render: (customer: string) => <Text className="text-sm">{customer}</Text>,
    // },
    {
      title: <HeaderCell title="CUSTOMER" />,
      dataIndex: "customer",
      key: "customer",
      width: 300,
      render: (_: string, row: CustomerType) => (
        <div className="flex gap-2 justify-start">
          <div
            style={{
              position: "relative",
              width: `${100}px`,
              height: `${60}px`,
            }}
          >
            <Image
              src={row.avatarURL}
              alt={row.name}
              priority
              fill
              className="rounded-lg"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div>
            <Text className="text-sm font-bold">{row.name}</Text>
            <Text className="text-sm">{row.email}</Text>
          </div>
        </div>
      ),
    },
    {
      title: <HeaderCell title="PHONE" />,
      dataIndex: "phone",
      key: "phone",
      width: 150,
      render: (phone: string) => <Text className="text-sm">{phone}</Text>,
    },
    {
      title: <HeaderCell title="CREATED" />,
      dataIndex: "createdAt",
      key: "createdAt",
      width: 150,
      render: (createdAt: string) => (
        <Text className="text-sm">{createdAt}</Text>
      ),
    },
    {
      title: <HeaderCell title="USERNAME" />,
      dataIndex: "userName",
      key: "userName",
      width: 150,
      render: (userName: string) => <Text className="text-sm">{userName}</Text>,
    },
    {
      title: <HeaderCell title="AMOUNT" />,
      dataIndex: "amount",
      key: "amount",
      width: 150,
      render: (amount: string) => <Text className="text-sm">{amount}</Text>,
    },
    
    {
      title: (
        <HeaderCell title="Current Status" className="whitespace-nowrap" />
      ),
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (value: string) => getStatusBadge(value),
    },
    {
      // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
      title: <HeaderCell title="Actions" className="opacity-0" />,
      dataIndex: "action",
      key: "action",
      width: 120,
      render: (_: string, row: ProductType) => (
        <div className="flex items-center justify-end gap-3 pe-4">
          <Tooltip
            size="sm"
            content={"Edit Product"}
            placement="top"
            color="invert"
          >
            <ActionIcon
              size="sm"
              variant="outline"
              aria-label={"Edit Product"}
              onClick={() => setModalOpen(true)}
            >
              <PencilIcon className="h-4 w-4" />
            </ActionIcon>
          </Tooltip>
          <Tooltip
            size="sm"
            content={"View Product"}
            placement="top"
            color="invert"
          >
            <ActionIcon
              size="sm"
              variant="outline"
              aria-label={"View Product"}
              onClick={() => setViewModalOpen(true)}
            >
              <EyeIcon className="h-4 w-4" />
            </ActionIcon>
          </Tooltip>
          <CustomPopover
            title={`Delete the product`}
            description={`Are you sure you want to delete this #${row.id} product?`}
            onDelete={() => onDeleteItem(row.id)}
            button1Text="Yes"
            button2Text="No"
          >
            <ActionIcon
              size="sm"
              variant="outline"
              aria-label={"Delete Item"}
              className="cursor-pointer hover:!border-gray-900 hover:text-gray-700"
            >
              <TrashIcon className="h-4 w-4" />
            </ActionIcon>
          </CustomPopover>
        </div>
      ),
    },
  ];
  return allCols.filter((col) => headerCols.includes(col.key));
};
