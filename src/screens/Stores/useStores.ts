import { useGetStoresQuery } from "@/redux/slice/api/adminSlice";
import { useState } from "react";

const useStores = () => {
  const [page, setPage] = useState(1);
  const changePage = (pageNum:number) => {
    debugger;
    setPage(pageNum);
  }
  const { data: stores, isFetching } = useGetStoresQuery(page);
  return {
    stores,
    isFetching,
    page,
    changePage,
  };
};
export default useStores;
