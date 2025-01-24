import { Inter, Roboto, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import AOSProvider from "@/components/AosProvider";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Abhishek Kumar | Fullstack Developer.",
  description:
    "Portfolio website of abhishek kumar- a passionate Full Stack Developer with expertise in building scalable web applications. With 1+ years of experience in software development, I specialize in creating elegant solutions to complex problems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <>
          <AOSProvider>
            <Header />
            {children}
            <Footer />
          </AOSProvider>
        </>
      </body>
    </html>
  );
}
