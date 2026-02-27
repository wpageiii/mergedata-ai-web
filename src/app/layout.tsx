import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MergeData.ai",
    template: "%s · MergeData.ai",
  },
  description:
    "Unified analytics without the glue code. Connect sources, normalize data, and ship clean tables to your warehouse.",
  metadataBase: new URL("https://mergedata.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${baloo.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
