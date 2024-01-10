import { QuerySelectedChore } from "@/app/(root)/query/chores/columns";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { IconType } from "react-icons";

export interface SidebarLink {
  imgURL: string;
  route: Array | string;
  label: string;
  icon?: IconType;
}

export interface AdminSidebarLink extends SidebarLink {
  icon: IconType ;
}

export interface ParamsProps {
  params: { id: string };
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

export interface IconProps {
  handleDeleteElement: (event: React.MouseEvent<HTMLSpanElement>) => void;
}
interface DiffFile {
  content: string[];
}

export interface TextContent {
  content: string[];
}

export interface RenderDiffLinesProps {
  oldText: TextContent;
  newText: TextContent;
  isSmallScreen: boolean;
}
export interface DiffButtonProps {
  children?: React.ReactNode;
  showAllLines: boolean;
  toggleShowAllLines: () => void;
}
export interface DiffViewerProps {
  oldText: DiffFile;
  newText: DiffFile;
}

export interface AccordionItemsProps {
  item: any;
}
export interface AccordionProps {
  loadData: () => void;
  loadChildren: () => void;
  loadDescendants: () => void;
}

export interface TableRowsProps {
  className?: string | undefined;
}


export interface SelectedChoresTableProps {
  data: QuerySelectedChore[];
}


export interface IconInfoProps {
  title?: string
}

export interface WrapIconProps {
  children: React.ReactNode
  bgColorHover: string
}


export interface DeleteButtonProps {
  id: string | number;
  onDelete: (id: string | number) => void;
}

export interface ContentContainerProps {
  children: React.ReactNode;
}

export interface CustomInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  route?: string;
  iconPosition: string;
  placeholder: string;
  otherClasses?: string;
  searchValue: string; 
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onRowClick?: (rowData: TData) => void;
}

export interface MainInfoProps {
  infoTitle: string;
  data: string | number;
}

export interface TitleProps {
  title : string | React.ReactNode;
  className : string;
}

export interface FilterButtonProps {
  column: any;
  label: string;
  minSize?: string;
  loadDataFunction: (columnId: string | undefined) => Promise<string[]>;
}

export interface ExpendableSearchBarProps {
  placeholderValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  route?: string;
  label?: string;
  size?: string;
}

export interface TableHandleDeleteProps {
  onDelete: () => void;
  id: number;
}

export interface RowData {
  [key: string]: string | number | boolean;
}