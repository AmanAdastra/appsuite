import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apps Suite",
  description: "Collection of Apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="h-screen">
      <body className={inter.className + " " + "h-screen"}>
        <AuthProvider>
            {children}
        </AuthProvider>
      </body>
    </html>
  );
}
