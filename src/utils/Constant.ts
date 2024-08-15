import { BROWSER_ROUTE } from "./Endpoints";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { RiStore3Fill } from "react-icons/ri";

const AsideNavList = [
  {
    id: "dashboard",
    title: "Dashboard",
    link: BROWSER_ROUTE.DASHBOARD,
    Icon: MdDashboard,
  },
  {
    id: "store_requests",
    title: "Store Requests",
    link: BROWSER_ROUTE.STORE_REQUESTS,
    Icon: HiClipboardDocumentList,
  },
  {
    id: "users",
    title: "Users",
    link: BROWSER_ROUTE.USERS,
    Icon: FaUsers,
  },
  {
    id: "stores",
    title: "Stores",
    link: BROWSER_ROUTE.STORES,
    Icon: RiStore3Fill,
  },
];
const SOCKET_EVENT = {
  CONNECT: "connect",
  DISCONNECT: "disconnect",
  NEW_STORE_REQUEST: "new_store_requests",
}
export { SOCKET_EVENT };
export default AsideNavList;
