import PuffLoader from "react-spinners/PuffLoader";
import { statusObj } from "../../service/features/customerSlice";
import TableFooterActionSection from "./TableFooterActionSection";
import TableRow from "./TableRow";

/* eslint-disable react/prop-types */
function Table({
  title,
  columnHeaders,
  data,
  handleChecked,
  tableActions,
  status,
  checkAble = true,
}) {
  console.log(data);
  return (
    <div className="mt-20 relative">
      {status === statusObj.pending && (
        <div className="absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <PuffLoader color="#fb8b24" size={100} />
        </div>
      )}
      <div className="mb-5 text-black text-[1.5rem]">
        <span className="block py-2">{title}</span>
        <hr />
      </div>
      <table className="w-full min-w-max table-auto text-left px-3 py-4 overflow-x-scroll">
        <thead>
          <tr>
            {checkAble && (
              <th className="border border-slate p-4">
                <input type="checkbox" onChange={handleChecked} />
              </th>
            )}
            {columnHeaders.map((value, i) => {
              return (
                <th
                  key={i}
                  onClick={value.action}
                  className="border border-slate"
                >
                  <span className="flex text-[1.5rem] font-bold ">
                    <span className="font-normal leading-none opacity-70 text-primary mr-3">
                      {value.label}
                    </span>
                    {value.Icon && <value.Icon className="text-black" />}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((value, i) => {
            return (
              <TableRow
                data={value}
                key={i}
                keys={columnHeaders
                  .filter((value) => value.id != "")
                  .map((value) => value.id)}
                tableActions={tableActions}
                checkAble={checkAble}
              />
            );
          })}
        </tbody>
      </table>
      <TableFooterActionSection
        handleSelectAll={() => {}}
        handleUnselectAll={() => {}}
        selectionObject={[
          {
            title: "one",
            handler: () => {
              console.log(1);
            },
          },
        ]}
      />
    </div>
  );
}

export default Table;
