import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";

import { useDispatch, useSelector } from "react-redux";
import {
  dialogContentTye,
  getDialogContent,
  getDialogState,
  getDialogTitle,
  toggleDialog,
} from "../../service/features/navigation_slice";
import TableDialog from "../dialogs/TableDialog";

export function DialogDefault() {
  const dispatch = useDispatch();
  const openDialog = useSelector(getDialogState);
  const dialogContent = useSelector(getDialogContent);
  const dialogTitle = useSelector(getDialogTitle);

  const handleOpen = () => dispatch(toggleDialog());
  let display;
  if (dialogContent.type == dialogContentTye.table) {
    display = (
      <TableDialog
        tableHeaders={dialogContent.data.tableHeaders}
        data={dialogContent.data.content}
      />
    );
  }

  return (
    <Dialog open={openDialog} handler={handleOpen}>
      <DialogHeader className="text-[2rem]">{dialogTitle}</DialogHeader>
      <DialogBody className="px-5 py-4">{display}</DialogBody>
    </Dialog>
  );
}
