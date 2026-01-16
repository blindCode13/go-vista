import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 w-full max-w-2xl mx-auto">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}