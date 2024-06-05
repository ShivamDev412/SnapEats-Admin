import React from "react";

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  return (
    <main className="flex justify-center items-center bg-zinc-950 h-screen text-zinc-100">
      <section className="w-full lg:w-6/12 2xl:w-5/12 flex flex-col justify-center items-center h-full">
        {children}
      </section>
    </main>
  );
};

export default AuthWrapper;
