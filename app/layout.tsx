import metadata from "./lib/metadata";
import "./ui/globals.css";
import { raleway } from "./ui/fonts";
import Header from "./ui/header";
import Footer from "./ui/footer";

export {metadata};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased`} data-theme="dark"
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
