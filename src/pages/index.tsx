import { HeroSection, OurJourney, TopicsSection } from "@/components/home";
import { PublicLayout } from "@/layouts";
import Link from "next/link";

const Home = () => {
  return (
    <PublicLayout
      title="Acharya Prashant"
      navClass="fixed top-0 left-0 z-50 w-screen"
      insideNavClass="hidden"
      innerBarClass="mt-12"
    >
      <HeroSection />
      <TopicsSection />
      <OurJourney />
    </PublicLayout>
  );
};

export default Home;
