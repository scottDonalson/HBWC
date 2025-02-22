import type {Metadata} from "next";
import "../styles/globals.css";
import Navbar from "@/Components/NavBar/nav_bar";
import Footer from "@/Components/Footer/footer";
import {Inter} from "next/font/google";
import GoogleAnalytics from "@/Components/GoogleAnalytics/GoogleAnalytics";

const inter = Inter({subsets: ["latin"], style: ["normal", "italic"]});


export const metadata: Metadata = {
    title: "Honey Badger Wrestling Club",
    description: "The Elite Youth Wrestling Club in Northwest Arkansas",
    icons: {
        icon: "/hank.svg", // Default favicon
        shortcut: "/hank.svg",
    },
    openGraph: {
        title: "Honey Badger Wrestling Club",
        description: "Join the premier wrestling club in Northwest Arkansas!",
        url: "https://hbwc.rocks",
        siteName: "Honey Badger Wrestling Club",
        images: [
            {
                url: "https://hbwc.rocks/hank.svg", // Ensure this is publicly accessible
                width: 600,
                height: 315,
                alt: "Honey Badger Wrestling Club Logo",
            },
        ],
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title> &quot;Honey Badger Wrestling Club&quot;</title>
            <link rel="icon" type="image/png" sizes="32x32" href="/hank.svg" />
            <link rel="icon" type="image/png" sizes="16x16" href="/hank.svg" />
            <meta property="og:image" content="https://hbwc.rocks/favicon.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
        </head>
        <body className={`${inter.className} max-w-[1920px] items-center justify-center m-auto`}>
        <GoogleAnalytics/>
        <Navbar/>
        {children}
        <div className="m-5">
            <Footer/>
        </div>

        </body>

        </html>
    );
}
