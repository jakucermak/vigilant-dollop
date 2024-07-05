import type { Metadata } from "next";
import colors from "../../styles/_colors.module.scss";

export const metadata: Metadata = {
  title: "DVLPR JC",
  description: "Developer Jakub Čermák",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: colors.background }}>{children}</body>
    </html>
  );
}
