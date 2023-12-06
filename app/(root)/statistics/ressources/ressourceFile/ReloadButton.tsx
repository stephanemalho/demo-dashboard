"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const ReloadButton = () => {
  const reloadPage = () => {
    alert("reload");
  };
  return (
    <Button onClick={reloadPage} className="mr-4 rounded-none border-[1px] shadow-sm" variant="ghost">
      Reload
    </Button>
  );
};

export default ReloadButton;
