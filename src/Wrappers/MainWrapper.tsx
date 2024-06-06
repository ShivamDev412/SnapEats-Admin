import Aside from "@/components/Aside";

import Header from "@/components/Header";

const MainWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between bg-zinc-900 h-screen text-zinc-100">
      <Header />
      <div className="flex h-full">
        <Aside />
        <main className="flex-1 w-10/12">{children}</main>
      </div>
    </div>
  );
};

export default MainWrapper;
