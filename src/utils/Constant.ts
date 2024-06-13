import { BROWSER_ROUTE } from "./Endpoints";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";

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
];
const SOCKET_EVENT = {
  CONNECT: "connect",
  DISCONNECT: "disconnect",
  NEW_STORE_REQUEST: "new_store_requests",
}
export { SOCKET_EVENT };
export default AsideNavList;
