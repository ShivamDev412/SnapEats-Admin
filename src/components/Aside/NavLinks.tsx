import AsideNavList from "@/utils/Constant";
import { IconType } from "react-icons/lib";

import { Link } from "react-router-dom";
type ListType = {
  Icon: IconType;
  link: string;
  title: string;
};
const LinkItem: React.FC<ListType> = ({ Icon, link, title }) => {
  return (
    <Link
      className="text-white flex gap-2 items-center hover:text-primary transition-all"
      to={link}
    >
      <Icon className="h-6 w-6"/>
      <p>{title}</p>
    </Link>
  );
};
const NavLinks = () => {
  return (
    <>
      {AsideNavList.map(({ link, title, Icon, id }) => (
        <LinkItem key={id} link={link} title={title} Icon={Icon} />
      ))}
    </>
  );
};

export default NavLinks;
