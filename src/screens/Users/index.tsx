import Pagination from "@/components/Pagination";
import useUsers from "./useUsers";
import { UsersListing } from "@/components/Users";

const Users = () => {
  const { users, isFetching, page, changePage } = useUsers();
  return (
    <div className="w-10/12 pb-6">
      <h2 className="text-3xl font-semibold">Users</h2>
      <UsersListing users={users?.data.users || []} isFetching={isFetching} />

      <Pagination
        totalCount={
          (users?.data?.totalCount && Math.ceil(users?.data?.totalCount)) || 0
        }
        currentPage={page}
        onPageChange={changePage}
      />
    </div>
  );
};

export default Users;
