import ContentContainer from "@/components/shared/contentContainer/ContentContainer";
import { SignedIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <ContentContainer>
      <SignedIn></SignedIn>
    </ContentContainer>
  );
};

export default page;
