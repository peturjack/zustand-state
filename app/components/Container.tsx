import React from "react";

type ChildrenProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ChildrenProps) => {
  return <div className=" container mx-auto p-y-4 ">{children}</div>;
};

export default Container;
