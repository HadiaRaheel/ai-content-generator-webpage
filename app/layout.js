import "./globals.css";

export const metadata = {
  title: "AI Content Generator",
  description: "Frontend Developer Technical Assessment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}