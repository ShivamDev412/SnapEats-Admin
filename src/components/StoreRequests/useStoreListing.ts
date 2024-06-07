import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  useAcceptStoreRegistrationRequestMutation,
  useStoreRegistrationRequestQuery,
  useRejectStoreRegistrationRequestMutation,
} from "@/redux/slice/api/adminSlice";
import { setLoading } from "@/redux/slice/loadingSlice";
import Toast from "@/utils/Toast";

const useStoreListing = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { data: requestedStore, isFetching } =
    useStoreRegistrationRequestQuery("");
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [acceptRequest] = useAcceptStoreRegistrationRequestMutation();
  const [rejectRequest] = useRejectStoreRegistrationRequestMutation();
  const handleClose = async (
    type?: string,
    storeId?: string,
    userId?: string
  ) => {
    try {
      dispatch(setLoading(true));
      const res =
        type === "accept"
          ? await acceptRequest({ storeId: storeId as string }).unwrap()
          : await rejectRequest({
              storeId: storeId as string,
              userId: userId as string,
            }).unwrap();
      if (res.success) {
        dispatch(setLoading(false));
        Toast(res.message, "success");
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      Toast(error.data.message);
    }
    setAnchorEl(null);
  };
  return { requestedStore, isFetching, anchorEl, handleClose, handleOpen };
};
export default useStoreListing;
