import { Lato, Domine } from "next/font/google";
import "./globals.css";
import Nav from "./nav/page";
import Footer from "./footer/page";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // pick weights you need
  variable: "--font-lato"
});

const domine = Domine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-domine"
});

export const metadata = {
  title: "Eglogics",
  description: "Jai shree ram"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${domine.variable}`}>
      <body className="min-h-full flex flex-col font-inter">
        <div className="container mx-auto">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
