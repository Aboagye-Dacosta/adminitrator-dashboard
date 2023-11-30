/* eslint-disable react/prop-types */
import { useEffect, useMemo, useReducer, useState } from "react";

import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

import { generateColumnTemplate } from "../../hooks/generateColumns";

import Mock_Data from "../../assets/data/mock_data.json";
import RowCheckBox from "./RowCheckBox";

function ViewTableData() {
  const cols = generateColumnTemplate(Mock_Data[0]);
  const [colsState, setColsState] = useState(cols);

  
  // const reducer = (state, action) => {
  //   if (action.value) {
  //     setColsState((colState) => [
  //       ...colState,
  //       ...cols.filter((col) => col.accessor === action.accessor),
  //     ]);
  //   } else {
  //     setColsState((colState) =>
  //       colState.filter((col) =>
  //         action.accessor === col.accessor && !action.value ? false : true
  //       )
  //     );
  //   }
  //   return {
  //     ...state,
  //     [action.accessor]: action.value,
  //   };
  // };




  const columns = useMemo(() => colsState, [colsState]);
  const data = useMemo(() => Mock_Data, []);


  const {
    getTableBodyProps,
    getTableProps,
    prepareRow,
    page,
    headerGroups,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    gotoPage,
    pageCount,
    pageSize,
    setPageSize,
    state,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <RowCheckBox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <RowCheckBox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const { pageIndex } = state;


  return (
    <div className=" bg-white  text-[1.5rem]">
      <div>
        <div className="">
          <table
            {...getTableProps()}
            className="border-separate border-spacing-y-1 min-w-full"
          >
            <thead>
              {headerGroups.map((group, i) => (
                <tr
                  key={i}
                  {...group.getHeaderGroupProps()}
                  className="bg-primary-dark text-white text-bold"
                >
                  {group.headers.map((header, i) => (
                    <th
                      key={i}
                      {...header.getHeaderProps(header.getSortByToggleProps())}
                      className="px-3 py-2.5 whitespace-nowrap capitalize font-bold"
                    >
                      <span className="flex items-center justify-between">
                        {header.render("Header")}{" "}
                        {header.isSorted ? (
                          header.isSortedDesc ? (
                            <FaAngleDown />
                          ) : (
                            <FaAngleUp />
                          )
                        ) : null}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr key={i} {...row.getRowProps()} className="">
                    {row.cells.map((cell, i) => (
                      <td
                        key={i}
                        {...cell.getCellProps()}
                        className="py-3 px-3 even:bg-slate-300 odd:bg-slate-100"
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex items-center py-3 px-10 justify-between">
          <div className="flex items-center">
            <span className="mr-5">
              <span className="font-bold mr-2">{pageIndex + 1}</span>
              of
              <span className="font-bold ml-2">{pageCount}</span>
            </span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="bg-slate-100 px-3 py-2 rounded-md"
            >
              {[10, 25, 50].map((value, index) => (
                <option value={value} key={index}>
                  page of {value}
                </option>
              ))}
            </select>
          </div>
          <div className=" flex items-center  text-white">
            <button
              className="disabled:bg-slate-200 bg-primary-light rounded-md px-3 py-3 mr-3 disabled:text-black"
              onClick={() => gotoPage(0)}
              disabled={pageIndex === 0}
            >
              <MdOutlineKeyboardDoubleArrowLeft />
            </button>
            <button
              disabled={!canPreviousPage}
              onClick={() => previousPage()}
              className="bg-primary disabled:bg-slate-200 disabled:text-black rounded-md px-3 py-3 mr-3"
            >
              Prev
            </button>
            <button
              disabled={!canNextPage}
              onClick={() => nextPage()}
              className="bg-primary disabled:bg-slate-200 rounded-md px-3 py-3 mr-3 disabled:text-black"
            >
              Next
            </button>
            <button
              className="disabled:bg-slate-200 bg-primary-light rounded-md px-3 py-3 mr-3 disabled:text-black"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={pageIndex + 1 === pageCount}
            >
              <MdOutlineKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTableData;
