import Pagination from "@/components/Pagination";
import useStores from "./useStores";
import { StoresListing } from "@/components/Stores";

const Stores = () => {
  const { stores, isFetching, page, changePage } = useStores();
  return (
    <div className="w-10/12 pb-6">
      <h2 className="text-3xl font-semibold">Stores</h2>
      <StoresListing
        stores={stores?.data?.stores || []}
        isFetching={isFetching}
      />

      <Pagination
        totalCount={
          (stores?.data?.totalCount && Math.ceil(stores?.data?.totalCount)) || 0
        }
        currentPage={page}
        onPageChange={changePage}
      />
    </div>
  );
};

export default Stores;
