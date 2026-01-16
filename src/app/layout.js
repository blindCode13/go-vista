import "./globals.css";

export const metadata = {
  title: "GoVista",
  description: "Discover the world with GoVista",
};

export default function AppLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}