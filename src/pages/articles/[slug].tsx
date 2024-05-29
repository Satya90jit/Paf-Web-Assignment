import { PublicLayout } from "@/layouts";
import React from "react";

const ArticlePage = () => {
  return (
    <PublicLayout title="Articles | Acharya Prashant">
      <section className="flex flex-col justify-center items-center h-[80vh]">
        <div className="text-5xl font-semibold text-orange-700">
          Articles Page
        </div>
        <p className="text-2xl text-gray-600 font-semibold mt-4">
          UNDER MAINTENANCE
        </p>
      </section>
    </PublicLayout>
  );
};

export default ArticlePage;
