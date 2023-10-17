import React from "react";
interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer = ({ children }: ContentContainerProps) => {
  return (
    <div
      className={`text-dark500_light700 flex w-full flex-col justify-between gap-4`}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
