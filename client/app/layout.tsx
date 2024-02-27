import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pocket Notes",
  description: "A Notes app to keep your notes safe and secure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="hidden md:flex h-full w-[300px] 2xl:w-[500px] z-30 flex-col rounded-lg border shadow-md fixed inset-y-0 ">
          <Sidebar />
        </div>
        <main className="md:pl-[300px] 2xl:pl-[500px] h-full px-2 md:p-0">
          {children}
        </main>
        <Toaster richColors duration={2000} closeButton position="top-center" />
      </body>
    </html>
  );
}
