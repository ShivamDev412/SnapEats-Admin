import Branding from "./branding";

const Header = () => {
  return (
    <header className="border-b-[0.5px] border-zinc-800 p-4">
      <div className="flex items-center w-11/12 mx-auto justify-between">
        <Branding />
      </div>
    </header>
  );
};

export default Header;
