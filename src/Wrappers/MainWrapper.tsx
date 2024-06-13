import Aside from "@/components/Aside";

import Header from "@/components/Header";
import { RootState } from "@/redux/Store";
import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

const MainWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { loading } = useSelector((state: RootState) => state.loading);
  return (
    <div className="flex flex-col justify-between bg-zinc-900 h-screen text-zinc-100 font-poppins">
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Header />
      <div className="flex h-full justify-between">
        <Aside />
        <main className="flex-1 w-9/12 ml-10 mt-10">{children}</main>
      </div>
    </div>
  );
};

export default MainWrapper;
