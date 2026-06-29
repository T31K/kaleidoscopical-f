import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-display",
});

export const metadata = {
  title: "Kaleidoscopical",
  description: "An ever-turning hall of mirrors. One word, infinitely reflected.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body className="grain">{children}</body>
    </html>
  );
}
