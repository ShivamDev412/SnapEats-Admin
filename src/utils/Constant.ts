import { BROWSER_ROUTE } from "./Endpoints";
import { HiClipboardDocumentList } from "react-icons/hi2";

const AsideNavList = [
  {
    id: "store_requests",
    title: "Store Requests",
    link: BROWSER_ROUTE.STORE_REQUESTS,
    Icon: HiClipboardDocumentList,
  },
];
const SOCKET_EVENT = {
  NEW_STORE_REQUEST: "new_store_requests",
}
export { SOCKET_EVENT };
export default AsideNavList;
