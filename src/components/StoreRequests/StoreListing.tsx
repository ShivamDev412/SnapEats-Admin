import NoDataFound from "../NoDataFound";
import { TableHead } from "../Table";
import StoreList from "./StoreList";
import useStoreListing from "./useStoreListing";

const StoreListing = () => {
  const { requestedStore, isFetching, anchorEl, handleClose, handleOpen } =
    useStoreListing();

  return (
    <section className="mt-10 w-full text-zinc-100 flex-1">
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <>
          {requestedStore?.data && requestedStore?.data?.length > 0 ? (
            <>
              <div className="overflow-auto max-h-[70vh]">
                <table className="w-full">
                  <thead className="bg-zinc-950 sticky top-0">
                    <tr>
                      <TableHead>ID</TableHead>
                      <TableHead>Store Name</TableHead>
                      <TableHead>Store Email</TableHead>
                      <TableHead>Store Address</TableHead>
                      <TableHead>Store Phone Number</TableHead>
                      <TableHead>User Name</TableHead>
                      <TableHead>User Email</TableHead>
                      <TableHead>Action</TableHead>
                    </tr>
                  </thead>
                  <tbody className="bg-zinc-900">
                    {requestedStore?.data?.map((store) => (
                      <StoreList
                        key={store.id}
                        store={store}
                        anchorEl={anchorEl}
                        handleClose={handleClose}
                        handleOpen={handleOpen}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <NoDataFound title="new store request" />
          )}
        </>
      )}
    </section>
  );
};

export default StoreListing;
