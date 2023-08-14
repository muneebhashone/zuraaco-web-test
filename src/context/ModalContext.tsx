import { FullScreenModal } from "@/components/FullScreenModal";
import { createContext, useContext, useState, useCallback } from "react";

export interface ModalContextTypes {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  modalNode: (value: React.ReactNode) => void;
}

export const ModalContext = createContext<ModalContextTypes | null>(null);

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
