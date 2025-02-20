import Nav from "./components/nav";
import Footer from "./footer/footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-200">
        <Nav />

        {/* Page Content */}
        <main className="p-4">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
