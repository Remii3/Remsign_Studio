import type { Metadata } from "next";
import { Rubik as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "RemSign Studio",
  description:
    "RemSign Studio: Specjaliści od web designu, którzy ożywią Twoje cyfrowe marzenia. Jesteśmy ekspertami w projektowaniu, rozwijaniu i utrzymywaniu nowoczesnych stron internetowych. Z nami Twoja obecność online stanie się nie tylko widoczna, ale i niezapomniana.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
        style={{
          fontFamily: "var(--font-sans)",
        }}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
