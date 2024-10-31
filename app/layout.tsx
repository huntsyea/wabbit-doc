import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { cn } from "@/lib/utils";
import { cookies } from "next/headers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AI Chat",
  description: "Chat with AI powered by GPT-4",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"

  return (
    <html lang="en" className={cn(geistSans.variable)}>
      <body className="overflow-hidden">
        <SidebarProvider defaultOpen={defaultOpen}>
          <div className="relative flex w-full min-h-screen">
            <AppSidebar />
            <main 
              data-state={defaultOpen ? "expanded" : "collapsed"}
              className={cn(
                "flex-1 transition-all duration-300 h-screen",
              
              )}
            >
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
