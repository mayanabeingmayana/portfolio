import { Inter } from 'next/font/google';
import "./globals.css";

// Import the Inter font
const interFont = Inter({
  subsets: ['latin'], // You can specify subsets if needed
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // You can customize the weights you want to use
});

export const metadata = {
  title: "mayana the designer",
  description: "developed by mayana the designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
