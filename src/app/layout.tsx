import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Gloves Off  Games",
  description:
    "Doug Glover's personal video game collection tracking site, with a rarely updated blog of thoughts and reviews on games I've played recently. Primary purpose being personal tracking so I don't accidently buy games I already own.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
