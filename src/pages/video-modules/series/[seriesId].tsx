import {
  FaqSection,
  RelatedContent,
  VideoSeriesCard,
} from "@/components/video-series";
import { useSWRAPI } from "@/hooks";
import { PublicLayout } from "@/layouts";
import { useRouter } from "next/router";

const VideoSeriesPage = () => {
  const router = useRouter();
  const { data, isValidating } = useSWRAPI(
    `https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/${router?.query?.seriesId}`
  );
  return (
    <PublicLayout
      title={`${data?.data?.details?.title || "वेदांत"} | आचार्य प्रशांत`}
    >
      <section className="w-full main-container pb-12 md:space-y-12 space-y-8">
        <VideoSeriesCard
          courseDetails={data?.data?.details}
          courses={data?.data?.courses}
          isValidating={isValidating}
        />
        <RelatedContent relatedContents={data?.data?.relatedContent} />
        <FaqSection />
      </section>
    </PublicLayout>
  );
};

export default VideoSeriesPage;
