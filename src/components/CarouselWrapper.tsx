import { Carousel } from "react-responsive-carousel";
export const CarouselWrapper = ({
  children,
}: {
  children: React.ReactChild[];
}) => {
  return (
    <Carousel
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      className="w-full"
      renderArrowPrev={(
        clickHandler: () => void,
        hasPrev: boolean,
        label: string
      ) => {
        return hasPrev ? (
          <button onClick={clickHandler} className="control-arrow control-prev">
            <img src="/assets/prev.svg" className="w-[70px]" />
          </button>
        ) : null;
      }}
      renderArrowNext={(
        clickHandler: () => void,
        hasNext: boolean,
        label: string
      ) => {
        return hasNext ? (
          <button onClick={clickHandler} className="control-arrow control-next">
            <img src="/assets/next.svg" className="w-[70px]" />
          </button>
        ) : null;
      }}

      // showArrows={true}
    >
      {children}
    </Carousel>
  );
};
