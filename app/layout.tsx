import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import MobileSidebar from "@/components/MobileSidebar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "500", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider>
          <div className="flex">
            <div className="lg:block hidden w-72 dark:bg-slate-950 bg-gray-200 h-screen border-r p-4">
              <Sidebar />
            </div>
            {children}
          </div>
          <div className="fixed bottom-5 left-5 block lg:hidden">
            <MobileSidebar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
