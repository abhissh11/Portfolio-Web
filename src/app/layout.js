import { Inter, Roboto, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Abhishekkr-dev",
  description: "Portfolio website of abhishekkr-dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  );
}
