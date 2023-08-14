import { Navigation } from "@/components/Navigation";
import { VideoSlider } from "@/components/VideoSlider";
import { ModalProvider, useModalContext } from "@/context/ModalContext";

export default function Home() {
  return (
    <ModalProvider>
      <main className="bg-[url('/assets/bg-image.png')] h-screen w-screen bg-cover bg-no-repeat overflow-x-hidden">
        <div className="container px-16 mx-auto h-full">
          <Navigation />
          <div className="flex justify-center items-center h-full w-[80%] mx-auto pt-20">
            <VideoSlider />
          </div>
        </div>
      </main>
    </ModalProvider>
  );
}
