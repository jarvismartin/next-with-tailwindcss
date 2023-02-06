import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";

// Components
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// Fonts
import { Inter, DM_Sans } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: "500" });

const name = "Your Name";
export const siteTitle = "Jarvism Next.js Site";

export default function Layout({ children }) {
  return (
    <div className={(styles.container, inter.className)}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Jarvism's personal website using Next.js"
        ></meta>
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main className="">{children}</main>
      <Footer />
      <Navbar />
    </div>
  );
}
