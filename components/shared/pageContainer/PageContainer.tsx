import React from "react";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex min-h-screen flex-1 flex-col px-2 pb-6 pt-[100px] max-2xl:pt-[70px] max-md:pb-14  sm:px-4">
      <div className="mx-auto w-full">{children}</div>
    </section>
  );
};

export default PageContainer;
