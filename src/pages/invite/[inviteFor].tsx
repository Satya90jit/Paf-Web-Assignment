import { PublicLayout } from "@/layouts";
import { useRouter } from "next/router";
import React from "react";

const InvitePage = () => {
  const router = useRouter();
  return (
    <PublicLayout
      title="Invite Acharya Prashant"
      navClass="fixed top-0 left-0 z-50 w-screen"
      insideNavClass="hidden"
      innerBarClass="lg:mt-[48px] mt-[68px]"
    >
      <section className="flex flex-col justify-center items-center h-[80vh]">
        <div className="text-5xl font-semibold text-orange-700">
          Invite {router?.query?.inviteFor} Page
        </div>
        <p className="text-2xl text-gray-600 font-semibold mt-4">
          UNDER MAINTENANCE
        </p>
      </section>
    </PublicLayout>
  );
};

export default InvitePage;
