import { HeroSection } from "@/components/home";
import { PublicLayout } from "@/layouts";
import Link from "next/link";

const Home = () => {
  return (
    <PublicLayout title="Acharya Prashant">
      <section className="">
        <HeroSection />
      </section>
    </PublicLayout>
  );
};

export default Home;
