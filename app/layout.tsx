import metadata from "@lib/metadata";
import { raleway } from "@lib/fonts";
import "@styles/globals.css";


export {metadata};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`} >
        {children}
      </body>
    </html>
  );
}
