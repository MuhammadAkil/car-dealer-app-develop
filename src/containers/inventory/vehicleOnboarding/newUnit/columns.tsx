"use client";

import { HeaderCell } from "@/components/table";
import {
  Text,
} from "rizzui";
import Image from "next/image";

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

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
  headerCols: string[];
};

export const getColumns = ({
  headerCols,
}: Columns) => {
  const allCols = [
    {
      title: <HeaderCell className="h-[30px]" title="Vehicle" />,
      dataIndex: "photo",
      key: "photo",
      width: 50,
      render: (_: string, row: ProductType) => (
        <div className="flex gap-2 justify-start">
          <div
            style={{
              position: "relative",
              width: `${150}px`,
              height: `${80}px`,
            }}
          >
            <Image
              src={row.photo}
              alt={row.stockNumber}
              priority
              fill
              className="rounded-lg"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div>
            <Text className="text-sm font-bold">{row.make}</Text>
            <Text className="text-sm">{row.model}</Text>
          </div>
        </div>
      ),
    },
    {
      title: <HeaderCell title="YEAR" />,
      dataIndex: "year",
      key: "year",
      width: 50,
      render: (year: string) => <Text className="text-sm">{year}</Text>,
    },
    {
      title: <HeaderCell title="Odometer" />,
      dataIndex: "odometer",
      key: "odometer",
      width: 50,
      render: (odometer: string) => <Text className="text-sm">{odometer}</Text>,
    },

    {
      title: <HeaderCell title="VIN Number" />,
      dataIndex: "vin",
      key: "vin",
      width: 50,
      render: (vin: string) => <Text className="text-sm">{vin}</Text>,
    },
    {
      title: <HeaderCell title="stock No" />,
      dataIndex: "stockNumber",
      key: "stockNumber",
      width: 50,
      render: (stockNumber: string) => (
        <Text className="text-sm">{stockNumber}</Text>
      ),
    },
  ];
  return allCols.filter((col) => headerCols.includes(col.key));
};
