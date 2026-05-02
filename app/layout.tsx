import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DunningOptimizer – Recover More Failed Payments",
  description: "A/B test dunning email sequences to maximize payment recovery for your SaaS."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0e4e2a4f-53ac-4cb4-baac-17cfc808da31"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
