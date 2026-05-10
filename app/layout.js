import "./globals.css";

export const metadata = {
  title: "Monarchevo",
  description: "Launching Soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}