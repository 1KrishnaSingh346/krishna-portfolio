  import type { Metadata } from "next";
  import { Geist, Geist_Mono } from "next/font/google";
  import "./globals.css";
  import { LoaderProvider } from "@/context/LoaderContext";

  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  export const metadata: Metadata = {
    title: {
      default: "Krishna Singh | Full Stack Engineer",
      template: "%s | Krishna Singh",
    },

    description:
      "Full-Stack Engineer and Co-Founder of Sankalp Nova LLP. Building scalable web applications, PWAs, backend systems, and modern digital products.",

    keywords: [
      "Krishna Singh",
      "Full Stack Developer",
      "Next.js Developer",
      "React Developer",
      "TypeScript",
      "Node.js",
      "Portfolio",
      "Sankalp Nova LLP",
    ],

    authors: [{ name: "Krishna Singh" }],
    creator:"Krishna Singh",
    applicationName: "Krishna Singh Portfolio",

    openGraph: {
      title: "Krishna Singh | Full-Stack Engineer",
      description:
        "Building scalable web applications, PWAs, backend systems, and modern digital products.",
      url: "https://your-domain.com",
      siteName: "Krishna Singh Portfolio",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Krishna Singh Portfolio",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Krishna Singh | Full-Stack Engineer",
      description:
        "Building scalable web applications, PWAs, backend systems, and modern digital products.",
      images: ["/og-image.png"],
    },
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">
          <LoaderProvider>
            {children}
            </LoaderProvider>
          </body>
      </html>
    );
  }
