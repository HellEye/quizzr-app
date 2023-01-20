"use client";
import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";
import { api } from "@/utils/api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <SessionProvider>{children}</SessionProvider>
    </Suspense>
  );
};
/* 
Awful awful hack to make next stop complaining, guess TRPC is not yet up to snuff with this new app folder thing
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TComponent = api.withTRPC(Layout) as any;
const ExtraLayout = ({ children }: { children: React.ReactNode }) => {
  return <TComponent pageProps={{}}>{children}</TComponent>;
};

export default ExtraLayout;
