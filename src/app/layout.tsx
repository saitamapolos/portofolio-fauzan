import type { Metadata } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fauzan Naufal Anbia — Interactive Portfolio",
  description:
    "Portofolio interaktif Fauzan Naufal Anbia — S1 Teknik Informatika, Web & AI-Assisted Development, Digital Operations, dan Content.",
  keywords: [
    "Fauzan Naufal Anbia",
    "Portofolio",
    "Teknik Informatika",
    "Tasikmalaya",
    "Web Developer",
  ],
  authors: [{ name: "Fauzan Naufal Anbia" }],
  openGraph: {
    title: "Fauzan Naufal Anbia — Interactive Portfolio",
    description:
      "S1 Teknik Informatika, Universitas Perjuangan Tasikmalaya. Eksplorasi karya, pengalaman, dan kapabilitas digital.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground custom-cursor-active overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
