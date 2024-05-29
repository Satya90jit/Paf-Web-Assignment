import { useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import DownloadYet from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
const imageArray = [
  {
    id: 1,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/d794d956-dbb7-4b03-aa52-6e813e87720c.jpeg",
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/d794d956-dbb7-4b03-aa52-6e813e87720c.jpeg",
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/f82d0db6-777a-4086-b36a-cce6e2c64b83.jpeg",
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/0c9258d1-c6e3-465e-8bcc-39b1572409c4.jpeg",
  },
  {
    id: 5,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/52a92e9f-435b-49bb-a4b0-e20056afe3b8.jpeg",
  },
  {
    id: 6,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/6421c2eb-723b-4db6-a2e6-c6b9b840b51b.jpeg",
  },
  {
    id: 7,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/665c4560-96a4-4afa-a91e-d9159c205bd7.jpeg",
  },
  {
    id: 8,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/665c4560-96a4-4afa-a91e-d9159c205bd7.jpeg",
  },
  {
    id: 9,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/881735ac-6d0a-4403-9024-bfb1e8479c25.jpeg",
  },
  {
    id: 10,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/083f4473-d390-4342-9101-fc8eb553ec60.jpeg",
  },
  {
    id: 11,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/16b10910-2867-4342-b6d8-72acd8869c6c.jpeg",
  },
  {
    id: 12,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/ad7038a4-952e-4a56-b2c8-5f03d0bac388.jpeg",
  },
  {
    id: 13,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/881735ac-6d0a-4403-9024-bfb1e8479c25.jpeg",
  },
  {
    id: 14,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/f82d0db6-777a-4086-b36a-cce6e2c64b83.jpeg",
  },
  {
    id: 15,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/0c9258d1-c6e3-465e-8bcc-39b1572409c4.jpeg",
  },
  {
    id: 16,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/52a92e9f-435b-49bb-a4b0-e20056afe3b8.jpeg",
  },
  {
    id: 17,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/6421c2eb-723b-4db6-a2e6-c6b9b840b51b.jpeg",
  },
  {
    id: 18,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/665c4560-96a4-4afa-a91e-d9159c205bd7.jpeg",
  },
  {
    id: 19,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/881735ac-6d0a-4403-9024-bfb1e8479c25.jpeg",
  },
  {
    id: 20,
    imageUrl:
      "https://cdn.acharyaprashant.org/user-media/083f4473-d390-4342-9101-fc8eb553ec60.jpeg",
  },
];

const Glimpses = () => {
  const thumbnailsRef = useRef(null);
  const zoomRef: any = useRef(null);
  const [autoplay, setAutoplay] = useState(false);
  const [delay, setDelay] = useState(2000);
  const [openImage, setOpenImage] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
    setOpenImage(true);
  };

  return (
    <section className="main-container lg:my-12 md:my-8 my-6">
      <h1 className="title text-center lg:my-12 md:my-8 my-6">Glimpses</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-3 h-full w-full relative">
        <div className="absolute bottom-0 left-0 h-[5rem] w-full bg-gradient-to-t from-gray-800 to-transparent rounded-md"></div>
        {imageArray?.map((item, index) => (
          <div
            onClick={() => handleActiveIndex(index)}
            key={item?.id}
            className="cursor-pointer"
          >
            <img src={item?.imageUrl} className="h-full object-cover w-full" />
          </div>
        ))}
        <button className="absolute bottom-5 left-1/2 -translate-x-1/2 lg:px-20 md:px-16 px-12 py-2 font-semibold rounded-3xl bg-orange-500/80 hover:bg-orange-500/90 text-white common-transition">
          See All
        </button>
      </div>
      <Lightbox
        open={openImage}
        close={() => setOpenImage(false)}
        thumbnails={{ ref: thumbnailsRef }}
        zoom={{ ref: zoomRef }}
        slideshow={{ autoplay, delay }}
        on={{
          click: () => {},
        }}
        slides={imageArray?.map((curImage: any, k: number) => {
          return {
            src: curImage?.imageUrl,
            download: `${curImage?.imageUrl}?DownloadYet`,
          };
        })}
        index={activeIndex}
        plugins={[DownloadYet, Thumbnails, Slideshow, Zoom, Fullscreen]}
      />
    </section>
  );
};

export default Glimpses;
