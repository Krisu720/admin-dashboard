import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import MobileSidebar from "@/components/MobileSidebar";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

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
      <body className={cn(poppins.className)}>
        <ThemeProvider>
          <div className="flex">

            <div className="lg:block fixed left-0 top-0 hidden flex-shrink-0 w-80 dark:bg-slate-950 bg-gray-200 h-screen border-r p-4">
              <Sidebar />
            </div>

            <div className="lg:block hidden flex-shrink-0 w-80 h-screen "></div>

            <div className="w-full p-3 lg:p-6">
              {children}
              <div className="h-20 lg:hidden block "/>
            </div>

          </div>

          <div className="fixed bottom-5 left-5 block lg:hidden">
            <MobileSidebar />
          </div>

          <Toaster />

        </ThemeProvider>
      </body>
    </html>
  );
}
