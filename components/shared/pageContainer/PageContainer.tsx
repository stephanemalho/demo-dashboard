import React from "react";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
      <div className="mx-auto w-full">{children}</div>
    </section>
  );
};

export default PageContainer;
