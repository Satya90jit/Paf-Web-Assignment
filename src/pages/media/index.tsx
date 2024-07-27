import { PublicLayout } from "@/layouts";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from "react";

const LazyComponent = dynamic(
  () => import("@/components/cards/LazyComponent"),
  {
    suspense: true,
  }
);

const MediaPage = () => {
  return (
    <PublicLayout
      title="Media and Public Interaction | Acharya Prashant"
      navClass="fixed top-0 left-0 z-50 w-screen"
      insideNavClass="hidden"
      innerBarClass="lg:mt-[48px] mt-[68px]"
    >
      <div className="min-h-screen bg-purple-100 flex flex-col items-center justify-center">
        <div className="h-screen"></div>
        <div className="h-screen"></div>

        <div className="space-y-6 mb-36">
          <Image
            id="imag"
            src="/ap-hero-image.jpg"
            loading="lazy"
            alt="Description of image"
            width={600}
            height={400}
            onLoad={() => console.log("Image loaded")}
          />

          <div>
            <h1>Welcome to the Home Page</h1>

            <Suspense fallback={<div>Loading component...</div>}>
              <LazyComponent />
            </Suspense>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default MediaPage;
