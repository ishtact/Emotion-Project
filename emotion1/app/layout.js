import localFont from "next/font/local";
import { Fugaz_One } from "@next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const fugaz = Fugaz_One({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Emotion Project",
  description: "Track your daily mood every day of the year.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={`w-full max-width-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="p-4 sm:p-8 flex items-center justify-between">
          <h1 className={`${fugaz.className} text-2xl sm:text-3xl font-bold`}>Emotion Project</h1>
        </header>
        {children}
        <footer>footer</footer>
      </body>
      
    </html>
  );
}
