import React from "react";
import {  FaEye } from "react-icons/fa";
import { AiOutlineDatabase } from "react-icons/ai";
import { TbDimensions, TbReportAnalytics, TbSettingsCode } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";
import { GoTools } from "react-icons/go";
import { IoCubeOutline } from "react-icons/io5";
import { RiFolderOpenLine } from "react-icons/ri";

export const selectIcon = ({ title }: any): React.JSX.Element | undefined => {
  if (/^Act/i.test(title)) {
    return <AiOutlineDatabase size={12} className="ml-2 mr-auto" />;
  }
  if (/^Cub/i.test(title)) {
    return <IoCubeOutline size={12} className="ml-2 mr-auto" />;
  }
  if (/^Dim/i.test(title)) {
    return <TbDimensions size={12} className="ml-2 mr-auto" />;
  }
  if (/^Pro/i.test(title)) {
    return <VscServerProcess size={12} className="ml-2 mr-auto" />;
  }
  if (/^Cho/i.test(title)) {
    return <TbSettingsCode size={12} className="ml-2 mr-auto" />;
  }
  if (/^Con/i.test(title)) {
    return <GoTools size={12} className="ml-2 mr-auto" />;
  }
  if (/^Vie/i.test(title)) {
    // Assurez-vous d'importer FaEye depuis 'react-icons/fa' si ce n'est pas déjà fait
    return <FaEye size={12} className="ml-2 mr-auto" />;
  }
  if (/^tma/i.test(title)) {
    return <TbReportAnalytics size={12} className="ml-2 mr-auto" />;
  }
  switch (title) {
    default:
      return <RiFolderOpenLine  size={12} className="ml-2 mr-auto"  />
      ;
  }
};