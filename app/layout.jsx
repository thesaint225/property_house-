import Navbar from "@/components/Navbar";
import "@/assets/styles/global.css";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "propertyPulse | Find The perfect  Rental",
  description: "Finder your dream property",
  keywords: "rental, find rentals,find properties",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children} </main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
