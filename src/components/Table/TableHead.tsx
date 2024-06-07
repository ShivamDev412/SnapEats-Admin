import React from "react";

const TableHead = ({ children }: { children: React.ReactNode }) => {
  return <th className="py-3 px-4 font-semibold whitespace-nowrap">{children}</th>;
};

export default TableHead;
