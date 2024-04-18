import { ReactNode } from "react";

export type AccordionData = {
  title: any;
  content: ReactNode | any;
  headerClass?: string;
  hideIcon?: boolean;
  contentClass?: string;
};
