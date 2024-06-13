import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { StoreType } from "@/redux/slice/api/adminSlice";
import { TableData, TableRow } from "../Table";
import DropdownMenu from "../DropDownMenu";
import { MenuItem } from "@mui/material";

const StoreList: React.FC<{
  store: StoreType;
  anchorEl: HTMLElement | null;
  handleClose: (type?: string, storeId?: string, userId?: string) => void;
  handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ store, anchorEl, handleClose, handleOpen }) => {
  const { name, email, address, countryCode, phoneNumber, user, id } = store;
  return (
    <>
      <TableRow>
        <TableData>{id}</TableData>
        <TableData>{name}</TableData>
        <TableData>{email}</TableData>
        <TableData>{address?.address}</TableData>
        <TableData>
          {countryCode} {phoneNumber}
        </TableData>
        <TableData>{user.name}</TableData>
        <TableData>{user.email}</TableData>
        <TableData>
          <button className="w-full flex justify-center" onClick={handleOpen}>
            {" "}
            <BsThreeDotsVertical />
          </button>
        </TableData>
      </TableRow>
      <DropdownMenu anchorEl={anchorEl} handleClose={handleClose}>
        <MenuItem onClick={() => handleClose("accept", id)}>Accept</MenuItem>
        <MenuItem onClick={() => handleClose("reject", id, user.id)}>
          Reject
        </MenuItem>
      </DropdownMenu>
    </>
  );
};

export default StoreList;
