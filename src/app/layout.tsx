import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Notification from "@/components/Notification";
import Navbar from "@/components/Navbar";
import Menu from '@/components/Menu'
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/Quertprovider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Restourant",
  description: "Best Food in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>

          <div>
            <Notification/>
        <Navbar/>
        {children}
        <ToastContainer position="bottom-right" theme="dark" autoClose={3000}/>
          </div>
          </QueryProvider>
        </AuthProvider>
        </body>
    </html>
  );
}
