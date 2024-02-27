import React from "react";
import Infobox from "./Infobox";

const InfoBoxes = () => {
  return (
    <div>
      {/* <!-- Renters and Owners --> */}
      <section>
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Infobox
              heading="For Renters"
              bacgroundColor="bg-gray-100"
              buttonInfo={{
                text: "Browse properties",
                link: "/properties",
                backgroundColor: "bg-black",
              }}
            >
              Find your dream rental property. Bookmark properties and contact
              owners
            </Infobox>

            <Infobox
              heading="For Property Owners"
              bacgroundColor="bg-blue-100"
              buttonInfo={{
                text: "Add properties",
                link: "/properties/add",
                backgroundColor: "bg-blue-500",
              }}
            >
              List your properties and reach potential tenants . Rent as an
              Airbnb or long term
            </Infobox>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoBoxes;
