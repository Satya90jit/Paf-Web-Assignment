import {
  FormikForm,
  FormUseFormik,
  MaterialForm,
  TestForm,
} from "@/components/forms";
import { PublicLayout } from "@/layouts";
import React from "react";

const HiringPage = () => {
  return (
    <PublicLayout
      title="Careers | Acharya Prashant"
      navClass="fixed top-0 left-0 z-50 w-screen"
      insideNavClass="hidden"
      innerBarClass="lg:mt-[48px] mt-[68px]"
    >
      <section className="flex flex-col justify-center items-center h-[80vh]">
        {/* <TestForm /> */}
        {/* <FormikForm /> */}
        {/* <FormUseFormik /> */}
        <MaterialForm />
      </section>
    </PublicLayout>
  );
};

export default HiringPage;
