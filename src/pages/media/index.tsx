import { FreeCard, UpgradeCard, UserProfile } from "@/components/cards";
import { PublicLayout } from "@/layouts";
import React from "react";

const MediaPage = () => {
  return (
    <PublicLayout
      title="Media and Public Interaction | Acharya Prashant"
      navClass="fixed top-0 left-0 z-50 w-screen"
      insideNavClass="hidden"
      innerBarClass="lg:mt-[48px] mt-[68px]"
    >
    <div className="min-h-screen bg-purple-100 flex flex-col items-center justify-center">
      <div className="space-y-6">
        {/* <UpgradeCard />
        <FreeCard />
        <UserProfile /> */}
        <PropertyCard />
      </div>
    </div>
    </PublicLayout>
  );
};

export default MediaPage;



const PropertyCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
      <div className="relative">
        <img
          src="/path/to/property-image.jpg" // Replace with actual image path
          alt="Property"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-blue-500 opacity-50 rounded-lg"></div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">Invest in Valby's sparkling new construction</h2>
        <p className="text-gray-600 mb-4"><strong>Type:</strong> Residential rental</p>
        <p className="text-gray-600 mb-4">
          Soon you can invest in Sydhavnen's new attractive neighborhoods. With neighborhoods like Havneh, Teglholmens and Sluseholmen we look at many investment opportunities.
        </p>
        <button className="bg-blue-500 text-white rounded-full px-4 py-2">Show the property project</button>
      </div>
    </div>  
  );
};


