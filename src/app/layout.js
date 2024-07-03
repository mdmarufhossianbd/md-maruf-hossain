import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Md Maruf Hossain",
  description: "I am Md Maruf Hossain. I am a frontend developer. I am using ReactJs and NextJs for build fronted development and backend development using Nodejs, ExpressJs & for database using MongoDB",
  keyword : 'Md Maruf Hossain, frontend developer'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Navber></Navber> */}
      <body className={inter.className}>{children}</body>
      {/* <Footer></Footer> */}
    </html>
  );
}
