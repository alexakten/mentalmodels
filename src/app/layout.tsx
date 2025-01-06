import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "99 Mental Models",
  description: "Principles to Guide your Thinking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
