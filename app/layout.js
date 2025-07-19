import "./globals.css";

export const metadata = {
  title: "Portfolio | Zyad Afifi",
  description:
    "Frontend Web Developer specialized in React.js and Next.js, building modern, responsive, and high-performance web applications.",
  keywords: [
    "frontend developer",
    "react",
    "next.js",
    "web development",
    "javascript",
    "portfolio",
  ],
  authors: [{ name: "Zyad Afifi" }],
  creator: "Zyad Afifi",
  openGraph: {
    title: "Portfolio | Zyad Afifi",
    description:
      "Frontend Web Developer specialized in React.js and Next.js, building modern, responsive, and high-performance web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Zyad Afifi",
    description:
      "Frontend Web Developer specialized in React.js and Next.js, building modern, responsive, and high-performance web applications.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
