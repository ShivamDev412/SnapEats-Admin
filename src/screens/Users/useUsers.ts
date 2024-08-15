import { useGetUsersQuery } from "@/redux/slice/api/adminSlice";
import { useState } from "react";

const useUsers = () => {
  const [page, setPage] = useState(1);
  const changePage = (pageNum:number) => {
    debugger;
    setPage(pageNum);
  }
  const { data: users, isFetching } = useGetUsersQuery(page);
  return {
    users,
    isFetching,
    page,
    changePage,
  };
};
export default useUsers;
