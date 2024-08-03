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
        <div className="flex gap-3 justify-start">
          <div
            style={{
              position: "relative",
              width: `${40}px`,
              height: `${40}px`,
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

      render: (_: string, row: CustomerType) => (
        <div>
        <Text className="text-sm">{row.createdAt}</Text>
        <Text className="text-xs">{row.time}</Text>
        </div>
        
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
      // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
      title: <HeaderCell title="Actions" className="opacity-0" />,
      dataIndex: "action",
      key: "action",
      width: 120,
      render: (_: string, row: CustomerType) => (
        <div className="flex items-center justify-end gap-3 pe-4">
          <Tooltip
            size="sm"
            content={"Edit Customer"}
            placement="top"
            color="invert"
          >
            <ActionIcon
              size="sm"
              variant="outline"
              aria-label={"Edit Customer"}
              onClick={() => setModalOpen(true)}
            >
              <PencilIcon className="h-4 w-4" />
            </ActionIcon>
          </Tooltip>
          <Tooltip
            size="sm"
            content={"View Customer"}
            placement="top"
            color="invert"
          >
            <ActionIcon
              size="sm"
              variant="outline"
              aria-label={"View Customer"}
              onClick={() => setViewModalOpen(true)}
            >
              <EyeIcon className="h-4 w-4" />
            </ActionIcon>
          </Tooltip>
          <CustomPopover
            title={`Delete the customer`}
            description={`Are you sure you want to delete this #${row.id} customer?`}
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
