import {
  FaqSection,
  RelatedContent,
  VideoSeriesCard,
} from "@/components/video-series";
import { useSWRAPI } from "@/hooks";
import { PublicLayout } from "@/layouts";
import { constructImageUrl } from "@/utils";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

const VideoSeriesPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { data: seriesData, isValidating } = useSWRAPI(
    `https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/${router?.query?.seriesId}`
  );
  // console.log("title------->", data?.details?.title);

  // console.log(".......data from getsattic0--->", data);
  const imageUrl = constructImageUrl(data?.details?.thumbnail);
  return (
    <PublicLayout
      title={`${data?.details?.title || "वेदांत"} | आचार्य प्रशांत`}
      description={`${data?.details?.title}`}
      ogImage={imageUrl}
    >
      <section className="w-full main-container pb-12 md:space-y-12 space-y-8">
        <VideoSeriesCard
          courseDetails={data?.details}
          courses={data?.courses}
          isValidating={isValidating}
        />
        <RelatedContent relatedContents={data?.relatedContent} />
        <FaqSection />
      </section>
    </PublicLayout>
  );
};

export default VideoSeriesPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3`
  );
  const data = await res.json();
  const series = data?.relatedContent as any[];

  console.log("data-----?", series);

  return {
    paths: series?.map((blog) => ({ params: { seriesId: blog?.id } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{ data: any }> = async (
  context: any
) => {
  const seriesId = context?.params?.seriesId;

  const res = await fetch(
    `https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/${seriesId}`
  );
  const courseData = await res.json();

  return {
    props: {
      data: courseData,
    },
    // revalidate: 8,
  };
};
