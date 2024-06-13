import NavLinks from "./NavLinks";
import LogOut from "./LogOut";

const Aside = () => {
  return (
    <aside className="w-2/12 bg-zinc-950 p-6 flex flex-col justify-between">
      <NavLinks />
      <LogOut />
    </aside>
  );
};

export default Aside;
