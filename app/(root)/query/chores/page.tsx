"use client";
import ContentContainer from "@/components/shared/contentContainer/ContentContainer";
import ChoresTables from "./ChoresTables";
import { ChoresProvider } from "@/context/ChoresContext";

export default function Page() {
  return (
    <ChoresProvider>
      <ContentContainer>
        <ChoresTables />
      </ContentContainer>
    </ChoresProvider>
  );
}
