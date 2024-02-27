import Navbar from "@/components/Navbar";

import "@/assets/styles/global.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "propertyPulse | Find The perfect  Rental",
  description: "Finder your dream property",
  keywords: "rental, find rentals,find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children} </main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
