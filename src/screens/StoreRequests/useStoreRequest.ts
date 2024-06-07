import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearStoreRequestCount } from "@/redux/slice/storeRequestSlice";
const useStoreRequest = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearStoreRequestCount());
  }, []);
  return {};
};
export default useStoreRequest;
