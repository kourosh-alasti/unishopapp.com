import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/provider";

export const metadata: Metadata = {
  title: "UniShop - Buy & Sell on Campus",
  description: "A marketplace for university students to buy and sell items locally",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`antialiased`}
        >
          <Provider>
        {children}
        </Provider>
      </body>
    </html>
  );
}
