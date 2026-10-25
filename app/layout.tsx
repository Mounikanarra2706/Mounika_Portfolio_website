import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mounika Narra | AI/ML Engineer",
  description:
    "Portfolio of Mounika Narra — Senior AI/ML Engineer focused on Generative AI, agentic systems, retrieval, and production ML.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Mounika Narra | AI/ML Engineer",
    description: "Building practical, reliable AI systems.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
