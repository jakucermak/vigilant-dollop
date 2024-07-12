import type { Metadata } from "next";
import styles from "@/styles/general.module.scss";
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
    <html style={{ height: "100vh" }} lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  );
}
