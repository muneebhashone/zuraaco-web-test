import { createContext, useContext, useState, useCallback } from "react";

export interface ModalContextTypes {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  modalNode: (value: React.ReactNode) => void;
}

export const ModalContext = createContext<ModalContextTypes | null>(null);

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
        style={{ padding: "10px" }}
        className="right-10 top-10 absolute cursor-pointer z-[99999] bg-slate-950 rounded-full"
        onClick={onClose}
      >
        <img src="/assets/x.svg" className="w-[25px]" />
      </div>

      {children}
    </div>
  );
};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalNode, setModalNode] = useState<React.ReactNode>(null);

  const ModalNode = modalNode;

  const handleOnOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleOnClose = useCallback(() => {
    setModalNode(null);
    setIsOpen(false);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        onClose: handleOnClose,
        onOpen: handleOnOpen,
        modalNode: setModalNode,
      }}
    >
      <FullScreenModal isOpen={isOpen} onClose={handleOnClose}>
        {ModalNode}
      </FullScreenModal>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext<ModalContextTypes | null>(
    ModalContext
  ) as ModalContextTypes;
};
