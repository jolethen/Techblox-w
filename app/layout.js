
import "../styles/globals.css";

export const metadata = {
  title: "TechBlox Wiki",
  description: "Official TechBlox Server Documentation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
