import { Fraunces, Montserrat } from "next/font/google";
import "./globals.css";

const frauncesSerif = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const montserratSansSerif = Montserrat({
  variable: "--font-sans-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Product Preview Card",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${montserratSansSerif.variable} ${frauncesSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
