import "./globals.css";
import Providers from "./providers";

export const metadata = { title: "BLACKPINK SPACE" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
