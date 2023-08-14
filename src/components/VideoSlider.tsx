import { useModalContext } from "@/context/ModalContext";
import { VideoItem } from "./VideoItem";
import { VideoPlayer } from "./VideoPlayer";
import { CarouselWrapper } from "./CarouselWrapper";

const items: VideoItem[] = [
  {
    thumbnail: "/assets/thumbnail.png",
    title: "Dolce Mall & </br> Signature Residency",
    subText: "About the Project",
    videoSrc: "https://www.youtube.com/embed/CxwJrzEdw1U",
  },
  {
    thumbnail: "/assets/thumbnail.png",
    title: "Dolce Mall & </br> Signature Residency",
    subText: "About the Project",
    videoSrc: "https://www.youtube.com/embed/CxwJrzEdw1U",
  },
  {
    thumbnail: "/assets/thumbnail.png",
    title: "Dolce Mall & </br> Signature Residency",
    subText: "About the Project",
    videoSrc: "https://www.youtube.com/embed/CxwJrzEdw1U",
  },
  {
    thumbnail: "/assets/thumbnail.png",
    title: "Dolce Mall & </br> Signature Residency",
    subText: "About the Project",
    videoSrc: "https://www.youtube.com/embed/CxwJrzEdw1U",
  },
  {
    thumbnail: "/assets/thumbnail.png",
    title: "Dolce Mall & </br> Signature Residency",
    subText: "About the Project",
    videoSrc: "https://www.youtube.com/embed/CxwJrzEdw1U",
  },
];

export const VideoSlider = () => {
  const { modalNode, onOpen } = useModalContext();

  const handleOnItemClick = (value: VideoItem) => {
    modalNode(
      <VideoPlayer
        isFullSreen={true}
        thumbnail={value.thumbnail}
        videoSrc={value.videoSrc}
      />
    );
    onOpen();
  };

  return (
    <CarouselWrapper>
      {items.map((item, i) => (
        <div key={i}>
          <VideoItem {...item} onClick={() => handleOnItemClick(item)} />
        </div>
      ))}
    </CarouselWrapper>
  );
};
