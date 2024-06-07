import { StoreListing } from "@/components/StoreRequests";
import useStoreRequest from "./useStoreRequest";

const StoreRequests = () => {
  const {} = useStoreRequest();
  return (
    <section className="w-11/12 h-full flex flex-col">
      <h1 className="text-3xl font-semibold">Store Request</h1>
      <StoreListing />
    </section>
  );
};

export default StoreRequests;
