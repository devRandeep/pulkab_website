import { Lato, Domine } from "next/font/google";
import "./globals.css";
import Nav from "./nav/page";
import Footer from "./footer/page";
import Image from "next/image";

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
  const whatsappNumber = "918397818419";
  const message = "Hi, I'm interested.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <html lang="en" className={`${lato.variable} ${domine.variable}`}>
      <body className="min-h-full flex flex-col font-inter">
        <div className="container mx-auto">
          <Nav />
          {children}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-10 left-10 z-50 animate-float hover:scale-110 transition-transform"
            aria-label="Chat on WhatsApp"
          >
            <Image src="/whatsapp.png" alt="WhatsApp" width={40} height={40} />
          </a>
          <Footer />
        </div>
      </body>
    </html>
  );
}
