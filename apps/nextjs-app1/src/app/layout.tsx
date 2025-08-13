import "./globals.scss";
import type { Metadata } from "next";
import Providers from "./providers";
import { Header, Footer } from "@wisland/ui";

export const metadata: Metadata = {
  title: "Next.js App 1",
  description: "First Next.js application in the monorepo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <Providers>
          <Header title="Wisland" />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
