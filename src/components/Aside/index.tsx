import NavLinks from "./NavLinks";
import LogOut from "./LogOut";
import { useEffect } from "react";
import { useSocket } from "@/providers/SocketContext";
import { useDispatch } from "react-redux";
import { SOCKET_EVENT } from "@/utils/Constant";
import Toast from "@/utils/Toast";
import { setStoreRequestCount } from "@/redux/slice/storeRequestSlice";

const Aside = () => {
  const { socket } = useSocket();
  const dispatch = useDispatch();
  useEffect(() => {
    if (socket === null) return;

    socket.on(SOCKET_EVENT.NEW_STORE_REQUEST, (data) => {
      dispatch(setStoreRequestCount());
      Toast(
        `New store registration request from ${data.userName} for ${data.storeName}`
      );
    });

    return () => {
      socket.off(SOCKET_EVENT.NEW_STORE_REQUEST);
    };
  }, [dispatch]);

  return (
    <aside className="w-2/12 bg-zinc-950 p-6 flex flex-col justify-between">
      <NavLinks />
      <LogOut />
    </aside>
  );
};

export default Aside;
