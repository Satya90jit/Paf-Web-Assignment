import { HeroSection } from "@/components/home";
import { PublicLayout } from "@/layouts";
import Link from "next/link";

const Home = () => {
  return (
    <PublicLayout
      title="Acharya Prashant"
      navClass="fixed top-0 z-50"
      insideNavClass="hidden"
      innerBarClass="mt-12"
    >
      <section className="">
        <HeroSection />
      </section>
    </PublicLayout>
  );
};

export default Home;
