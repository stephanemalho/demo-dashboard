import React from "react";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex min-h-screen flex-1 flex-col px-1 pb-6 pt-[55px] max-md:pb-14">
      <div className="mx-auto w-full">{children}</div>
    </section>
  );
};

export default PageContainer;
