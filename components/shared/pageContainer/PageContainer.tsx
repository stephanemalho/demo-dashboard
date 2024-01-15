import React from "react";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative ml-[50px] flex h-[100vh] flex-col">
      {children}
    </section>
  );
};

export default PageContainer;
