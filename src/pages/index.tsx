import {
  Glimpses,
  HeroSection,
  InterviewPodcast,
  OurJourney,
  TopicsSection,
} from "@/components/home";
import { PublicLayout } from "@/layouts";

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
      <InterviewPodcast />
      <Glimpses />
    </PublicLayout>
  );
};

export default Home;
