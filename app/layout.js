import NavbarWrapper from "@/components/NavbarWrapper";
import "./globals.css";

export const metadata = {
  title: "Navbar Animation Project",
  description: "A Next.js project with an animated navbar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        

        {children}
        
        <NavbarWrapper />
      </body>
    </html>
  );
}
