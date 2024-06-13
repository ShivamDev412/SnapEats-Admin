import React from "react";

const TableData = ({ children }: { children: React.ReactNode }) => {
  return (
    <td className="py-2 px-4 border-b border-zinc-700 text-[1rem] text-center whitespace-nowrap">
      {children}
    </td>
  );
};

export default TableData;
