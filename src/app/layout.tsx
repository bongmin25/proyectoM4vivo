import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import AuthProvider from "@/context/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          <main className="container">{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}