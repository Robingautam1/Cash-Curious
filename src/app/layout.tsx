import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MoneyQuest | Level Up Your Wallet",
  description: "The game where kids learn to earn, save, and grow. Financial literacy for the next generation.",
  keywords: ["financial literacy", "kids", "education", "money", "saving", "investing", "games", "moneyquest"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fredoka.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
