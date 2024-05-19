import { PublicLayout } from "@/layouts";
import Link from "next/link";

const Home = () => {
  return (
    <PublicLayout title="Video Series | Acharya Prashant">
      <section className="flex justify-center items-center h-[60vh]">
        <Link
          href={`/video-modules/series/course-series-eeb9d3`}
          className="text-white font-semibold text-2xl bg-orange-800 hover:bg-orange-700 common-transition rounded-md px-8 py-2"
        >
          Go To Series Page
        </Link>
      </section>
    </PublicLayout>
  );
};

export default Home;
