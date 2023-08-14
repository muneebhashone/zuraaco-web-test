import { ModalContextTypes } from "@/context/ModalContext";

export const FullScreenModal = ({
  children,
  isOpen,
  onClose,
}: {
  children?: React.ReactNode;
  isOpen: ModalContextTypes["isOpen"];
  onClose: ModalContextTypes["onClose"];
}) => {
  return (
    <div
      className={`fixed w-full h-full top-0 left-0 ${
        isOpen ? "scale-100 opacity-100 block" : "scale-75 opacity-0 hidden"
      } bg-slate-900/75 z-[9999] transition-all`}
    >
      {/* Close Button */}
      <div
        className="right-10 p-2 shadow-md border-white border border-solid top-10 absolute cursor-pointer z-[99999] bg-slate-950 rounded-full"
        onClick={onClose}
      >
        <img src="/assets/x.svg" className="w-[15px]" />
      </div>

      {children}
    </div>
  );
};
