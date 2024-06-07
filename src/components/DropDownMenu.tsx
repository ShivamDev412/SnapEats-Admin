import * as React from "react";
import Menu from "@mui/material/Menu";

type DropdownMenuProps = {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  children: React.ReactNode;
};
const DropdownMenu: React.FC<DropdownMenuProps> = ({
  anchorEl,
  handleClose,
  children,
}) => {
  const open = Boolean(anchorEl);

  return (
    <Menu
      id="dropdown-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      {children}
    </Menu>
  );
};
export default DropdownMenu;
