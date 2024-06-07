import React from "react";

const TableRow = ({ children }: { children: React.ReactNode }) => {
  return <tr className=" bg-zinc-800 hover:bg-zinc-700">{children}</tr>;
};

export default TableRow;
