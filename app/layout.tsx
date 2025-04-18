import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AZ Soft - IT Solutions & Software Development",
  description: "Professional IT services including web development, mobile apps, chatbots, CRM systems, UI/UX design, and IT consulting.",
  keywords: ["web development", "mobile apps", "software development", "IT consulting", "UI/UX design"],
  openGraph: {
    title: "AZ Soft - IT Solutions & Software Development",
    description: "Professional IT services including web development, mobile apps, chatbots, CRM systems, UI/UX design, and IT consulting.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="grid-background" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
