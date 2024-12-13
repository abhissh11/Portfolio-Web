import { Inter, Roboto, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import AOSProvider from "@/components/AosProvider";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Abhishek Kumar | MERN Dev.",
  description: "Portfolio website of abhishekkr-dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <>
          <AOSProvider>
            <Header />
            {children}
          </AOSProvider>
        </>
      </body>
    </html>
  );
}
