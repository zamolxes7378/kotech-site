import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kotech — IA augmentée par l'humain",
  description:
    "Cabinet de conseil IA indépendant. Audit, architecture, MLOps et accompagnement pour DSI, mutuelles et industriels.",
  openGraph: {
    title: "Kotech Engineering",
    description: "IA augmentée par l'humain — conseil, architecture et industrialisation.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Fraunces:ital,wght@0,300..900;1,300..900&family=Manrope:wght@300;400;500;600;700&family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
