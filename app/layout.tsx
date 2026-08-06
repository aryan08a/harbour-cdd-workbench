import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harbour — CDD Review Workbench",
  description: "A human-led Customer Due Diligence review workbench.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
