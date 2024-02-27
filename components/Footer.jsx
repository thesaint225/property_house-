import Image from "next/image";
import logo from "@/assets/styles/images/logo.png";

const Footer = () => {
  function getCurrentYear() {
    const now = new Date();
    return now.getFullYear();
  }
  return (
    <div>
      {/* <!-- Footer --> */}
      <footer className="bg-gray-200 py-4 mt-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="mb-4 md:mb-0">
            <Image src={logo} alt="Logo" className="h-8 w-auto" />
          </div>

          <div>
            <p className="text-sm text-gray-500 mt-2 md:mt-0">
              {getCurrentYear()} PropertyPulse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
