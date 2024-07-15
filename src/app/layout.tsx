import type { Metadata } from "next";
import styles from "@/styles/general.module.scss";
export const metadata: Metadata = {
  title: "DVLPR JC",
  description:
    "Jakub Čermák, junior SW developer focused on frontend and backend development. Offers expertise in modern technologies such as React, Node.js, and Python.",
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
