import { RootState } from "@/redux/RootReducer";
import AsideNavList from "@/utils/Constant";
import { IconType } from "react-icons/lib";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
type ListType = {
  Icon: IconType;
  link: string;
  title: string;
  storeRequestCount: number;
};
const LinkItem: React.FC<ListType> = ({
  Icon,
  link,
  title,
  storeRequestCount,
}) => {
  return (
    <Link
      className="text-white flex gap-2 items-center hover:text-primary transition-all"
      to={link}
    >
      <Icon className="h-6 w-6" />
      <p>{title}</p>
      {title === "Store Requests" && storeRequestCount > 0 && (
        <span className="bg-primary text-white w-7 h-7 flex items-center justify-center rounded-full text-[12px] font-semibold">
          {storeRequestCount}
        </span>
      )}
    </Link>
  );
};
const NavLinks = () => {
  const { storeRequestCount } = useSelector(
    (state: RootState) => state.storeRequest
  );
  return (
    <section className="flex gap-4 flex-col">
      {AsideNavList.map(({ link, title, Icon, id }) => (
        <LinkItem
          key={id}
          link={link}
          title={title}
          Icon={Icon}
          storeRequestCount={storeRequestCount}
        />
      ))}
    </section>
  );
};

export default NavLinks;
