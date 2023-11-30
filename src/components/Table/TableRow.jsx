import TableActionsData from "./TableActionsData";

/* eslint-disable react/prop-types */
function TableRow({ data, handleSelected, tableActions, checkAble }) {
  return (
    <tr className="odd:bg-blue-gray-50/50">
      {checkAble && (
        <td className="p-4 border border-slate">
          <input type="checkbox" onChange={handleSelected} />
        </td>
      )}
      {Object.values(data).map((value, i) => {
        return (
          <td
            key={i}
            className="p-2 text-[1.3rem] text-black border border-slate"
          >
            {value}
          </td>
        );
      })}
      <TableActionsData actions={tableActions} />
    </tr>
  );
}

export default TableRow;
