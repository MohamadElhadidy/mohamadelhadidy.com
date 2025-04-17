import metadata from "./lib/metadata";
import "./ui/globals.css";
import { raleway } from "./ui/fonts";

export {metadata};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`} data-theme="dark">
        {children}
      </body>
    </html>
  );
}
