import React from "react";

interface ContentContainerProps {
  children: React.ReactNode;
  title: string;
}

const ContentContainer = ({ children, title }: ContentContainerProps) => {
  return (
    <div
      className={`text-dark500_light700 flex w-full flex-col justify-between gap-4`}
    >
      <h1 className="h1-bold primary-text-gradient w-full font-inter">
        {title}
      </h1>
      {children}
    </div>
  );
};

export default ContentContainer;
