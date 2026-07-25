import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rangga Figo — NeoBrutalist Noir",
  description: "Dark neo-brutalist portfolio — Rangga Figo Hidayat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
