import ReactPlayer from "react-player";

export const VideoPlayer = ({
  thumbnail,
  videoSrc,
  isFullSreen = false,
}: {
  thumbnail: string;
  videoSrc?: string;
  isFullSreen?: boolean;
}) => {
  return (
    <div
      className={`${
        !isFullSreen
          ? "relative w-[780px] h-[460px]"
          : "fixed w-screen h-screen"
      } flex items-center justify-center shadow-lg`}
    >
      {!isFullSreen ? (
        <img
          src={thumbnail}
          className={`w-full h-full object-cover absolute top-0 left-0 ${
            isFullSreen ? "opacity-100" : "opacity-80 group-hover:opacity-100"
          }`}
        />
      ) : (
        <ReactPlayer url={videoSrc} width="100%" height="100%" />
      )}
      {!isFullSreen ? (
        <div className="top-0 absolute left-0 w-full h-full flex items-center justify-center">
          <img src="/assets/pause-btn.svg" className="w-[90px] h-[90px] " />
        </div>
      ) : null}
    </div>
  );
};
