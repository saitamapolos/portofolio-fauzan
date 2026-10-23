import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fauzan Naufal Anbia — Portofolio",
  description:
    "Portofolio Fauzan Naufal Anbia — S1 Teknik Informatika, Universitas Perjuangan Tasikmalaya. Pengalaman kerja, riwayat pendidikan, dan kontak.",
  keywords: [
    "Fauzan Naufal Anbia",
    "Portofolio",
    "Teknik Informatika",
    "Tasikmalaya",
  ],
  authors: [{ name: "Fauzan Naufal Anbia" }],
  openGraph: {
    title: "Fauzan Naufal Anbia — Portofolio",
    description:
      "S1 Teknik Informatika, Universitas Perjuangan Tasikmalaya. Lihat pengalaman, pendidikan, dan kontak.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-zinc-950 font-sans text-zinc-100">
        {children}
      </body>
    </html>
  );
}