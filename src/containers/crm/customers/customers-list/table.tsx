"use client";

import { useCallback, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useTable } from "@/hooks/useTable";
import { useColumn } from "@/hooks/useColumn";
import { Title, Modal, Button } from "rizzui";
import ControlledTable from "@/components/controlledTable";
import { PiXBold } from "react-icons/pi";
import { getColumns } from "./columns";
import EditCar from "./EditCar";
import ViewCar from "./ViewCar";

const FilterElement = dynamic(() => import("./filter-element"), { ssr: false });
const TableFooter = dynamic(() => import("@/components/tableFooter"), {
  ssr: false,
});

const filterState = {
  age: "",
  year: "",
  purchasePrice: "",
  status: "",
};

export default function VehicleTable({
  data = [],
  headerCols,
}: {
  data: any[];
  headerCols: string[];
}) {
  const [pageSize, setPageSize] = useState(10);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isViewModalOpen, setViewModalOpen] = useState(false);

  const onHeaderCellClick = (value: string) => ({
    onClick: () => {
      handleSort(value);
    },
  });

  const onDeleteItem = useCallback((id: string) => {
    handleDelete(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    isLoading,
    isFiltered,
    tableData,
    currentPage,
    totalItems,
    handlePaginate,
    filters,
    updateFilter,
    searchTerm,
    handleSearch,
    sortConfig,
    handleSort,
    selectedRowKeys,
    setSelectedRowKeys,
    handleRowSelect,
    handleSelectAll,
    handleDelete,
    handleReset,
  } = useTable(data, pageSize, filterState);

  const columns = useMemo(
    () =>
      getColumns({
        data,
        sortConfig,
        checkedItems: selectedRowKeys,
        onHeaderCellClick,
        onDeleteItem,
        onChecked: handleRowSelect,
        handleSelectAll,
        setModalOpen,
        setViewModalOpen,
        headerCols,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      selectedRowKeys,
      onHeaderCellClick,
      sortConfig.key,
      sortConfig.direction,
      onDeleteItem,
      handleRowSelect,
      handleSelectAll,
    ]
  );

  const { visibleColumns, checkedColumns, setCheckedColumns } =    useColumn(columns);
  return (
    <>
      <ControlledTable
        variant="modern"
        isLoading={isLoading}
        showLoadingText={true}
        data={tableData}
        // @ts-ignore
        columns={visibleColumns}
        paginatorOptions={{
          pageSize,
          setPageSize,
          total: totalItems,
          current: currentPage,
          onChange: (page: number) => handlePaginate(page),
        }}
        filterOptions={{
          searchTerm,
          onSearchClear: () => {
            handleSearch("");
          },
          onSearchChange: (event: any) => {
            handleSearch(event.target.value);
          },
          hasSearched: isFiltered,
          columns,
          checkedColumns,
          setCheckedColumns,
          enableDrawerFilter: true,
        }}
        filterElement={
          <FilterElement
            filters={filters}
            isFiltered={isFiltered}
            updateFilter={updateFilter}
            handleReset={handleReset}
          />
        }
        tableFooter={
          <TableFooter
            checkedItems={selectedRowKeys}
            handleDelete={(ids: string[]) => {
              setSelectedRowKeys([]);
              handleDelete(ids);
            }}
          >
            <Button size="sm" className="dark:bg-gray-300 dark:text-gray-800">
              Download {selectedRowKeys.length}{" "}
              {selectedRowKeys.length > 1 ? "Products" : "Product"}
            </Button>
          </TableFooter>
        }
        className="rounded-md border border-muted text-sm shadow-sm [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:h-60 [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:justify-center [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0 [&_thead.rc-table-thead]:border-t-0"
      />

      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setViewModalOpen(false)}
        overlayClassName="dark:bg-opacity-40 dark:backdrop-blur-lg"
        containerClassName="dark:bg-gray-100 rounded-md p-5 lg:p-6"
        size="sm"
      >
        <div className="flex justify-end">
          <Button
            variant="text"
            onClick={() => setViewModalOpen(false)}
            className="h-auto px-1 py-1"
          >
            <PiXBold className="h-5 w-5 text-base" />
          </Button>
        </div>
        {<ViewCar closeModal={() => setViewModalOpen(false)} />}
      </Modal>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        overlayClassName="dark:bg-opacity-40 dark:backdrop-blur-lg"
        containerClassName="dark:bg-gray-100 rounded-md p-5 lg:p-6"
        size="sm"
      >
        <div className="flex items-center justify-between">
          <Title
            as="h3"
            className="text-lg font-semibold text-gray-900 xl:text-xl"
          >
            Edit Vehicle Details
          </Title>
          <Button
            variant="text"
            onClick={() => setModalOpen(false)}
            className="h-auto px-1 py-1"
          >
            <PiXBold className="h-5 w-5 text-base" />
          </Button>
        </div>
        {<EditCar closeModal={() => setModalOpen(false)} />}
      </Modal>
    </>
  );
}
