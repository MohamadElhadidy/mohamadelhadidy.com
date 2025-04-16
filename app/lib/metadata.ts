// app/metadata.ts
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Mohamad Elhadidy | UI/UX Designer & Full-Stack Developer",
  description: "I design & build cool stuff! Passionate UI/UX Designer and Full-Stack Developer crafting modern web and mobile experiences with React Native, Laravel, and more.",
  authors: [{ name: "Mohamad Elhadidy", url: "https://mohamadelhadidy.com" }],
  creator: "Mohamad Elhadidy",
  keywords: [
    "UI/UX Designer",
    "Full-Stack Developer",
    "Web Design",
    "React Native",
    "Laravel",
    "Portfolio",
    "Mohamad Elhadidy"
  ],
  metadataBase: new URL("https://mohamadelhadidy.com"),
  openGraph: {
    title: "Mohamad Elhadidy | UI/UX Designer & Full-Stack Developer",
    description: "Passionate UI/UX Designer and Full-Stack Developer crafting modern, intuitive digital experiences.",
    url: "https://mohamadelhadidy.com",
    siteName: "Mohamad Elhadidy Portfolio",
    images: [
      {
        url: "https://mohamadelhadidy.com/your-preview-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamad Elhadidy Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamad Elhadidy | UI/UX Designer & Full-Stack Developer",
    description: "I design & build cool stuff! Explore my work in UI/UX, React Native, Laravel, and more.",
    images: ["https://mohamadelhadidy.com/your-preview-image.jpg"],
    creator: "@yourTwitterHandle"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#000000",
  category: "portfolio",
};

export default metadata;
