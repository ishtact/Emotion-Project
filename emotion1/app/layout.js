import localFont from "next/font/local";
import { Fugaz_One } from "@next/font/google";
import "./globals.css";
import Link from "next/link";

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
export const fugazexp = Fugaz_One({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Emotion Project",
  description: "Track your daily mood every day of the year.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`w-full max-width-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-300 ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="px-10">
          <header className="py-4 sm:py-8 flex items-center justify-start">
            <Link href="/"><h1 className={`${fugaz.className} text-2xl sm:text-3xl font-bold text-gradient`}>Emotion Project</h1></Link>
            <div className="flex-1 flex items-center justify-end gap-4">PLACEHOLDER CTA || STATS</div>
          </header>
          {children}
        </div>
        <footer className="mt-auto py-2 sm:py-4 flex items-center justify-center bg-zinc-900">
          <p className={`${fugaz.className} text-gradient`}>Created by Isham S with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a> & <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a>.</p>
        </footer> 
      </body>
      
    </html>
  );
}
