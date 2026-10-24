import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optimus Ecosystem Admin",
  description: "One command center for your projects, agents, and developer tools."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
