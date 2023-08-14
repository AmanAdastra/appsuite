import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/provider/AuthProvider";
import NavBar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apps Suite",
  description: "Collection of Apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="h-full">
      <body className={inter.className + " " + "h-full"}>
        <AuthProvider>
          <NavBar />
          {children}
          </AuthProvider>
      </body>
    </html>
  );
}
