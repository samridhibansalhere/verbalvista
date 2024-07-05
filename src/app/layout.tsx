import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import CustomLayout from "@/custom-layout";

export const metadata: Metadata = {
  title: "VerbalVista",
  description: "VerbalVista:Expanding your conversational horizons with insightful AI-driven dialogue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <CustomLayout>
            {children}
          </CustomLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
