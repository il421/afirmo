import { Header } from "./header/Header";
import { FunctionComponent, PropsWithChildren } from "react";

export const AppWrapper: FunctionComponent<PropsWithChildren<{}>> = ({
  children
}) => {
  return (
    <>
      <Header />
      <main className="bg-black pt-[110px] lg:pt-[217px] h-[100vh]">
        {children}
      </main>
    </>
  );
};
