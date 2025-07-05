import { ReactNode } from "react";

export const PageContainer = (props: { children: ReactNode }) => {
  const { children } = props;
  return <div className="container px-4 mx-auto">{children}</div>;
};
