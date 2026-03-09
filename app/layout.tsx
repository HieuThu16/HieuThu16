import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import Link from "next/link";
import type { ReactNode } from "react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-sans",
});

const firaCode = Fira_Code({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Truong Nguyen Minh Hieu | Full-stack Developer",
  description:
    "Minimal portfolio for Truong Nguyen Minh Hieu, focused on full-stack products built with React, Next.js, Java, and Spring Boot.",
};

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${firaCode.variable} antialiased`}>
        <div className="relative overflow-hidden">
          <header className="sticky top-0 z-50 border-b border-border/80 bg-white/80 backdrop-blur-xl">
            <div className="container-shell flex items-center justify-between py-4">
              <Link
                href="/"
                className="text-sm font-semibold tracking-[0.24em] uppercase"
              >
                TMH
              </Link>

              <nav className="flex items-center gap-2 rounded-full border border-border bg-surface/80 p-1 text-sm text-muted-foreground">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-4 py-2 transition hover:bg-surface-2 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="pb-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
