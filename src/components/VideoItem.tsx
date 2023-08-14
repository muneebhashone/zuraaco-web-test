import { VideoPlayer } from "./VideoPlayer";

export interface VideoItem {
  thumbnail: string;
  title: string;
  subText: string;
  videoSrc: string;
}

export const VideoItem = ({
  title,
  subText,
  thumbnail,
  videoSrc,
  onClick,
}: {
  title: string;
  subText: string;
  thumbnail: string;
  videoSrc?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center w-[100%] mx-auto cursor-pointer group hover:scale-110 transition-all"
    >
      <VideoPlayer thumbnail={thumbnail} videoSrc={videoSrc} />
      <div className="relative mt-[-80px] w-full">
        <div
          className="font-audrey uppercase text-6xl text-center"
          dangerouslySetInnerHTML={{ __html: title }}
        ></div>
        <div className="uppercase text-center text-sm">{subText}</div>
      </div>
    </div>
  );
};
