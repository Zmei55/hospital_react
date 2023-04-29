import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { IModal } from "shared";

import { Backdrop, Content } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

export function Modal({ width, height, children, onClose }: IModal) {
  const handleKeyDown = useCallback(
    (event: { code: string }) => {
      if (event.code === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackdropClick: React.MouseEventHandler<
    HTMLDivElement
  > = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content style={{ width, height }}>{children}</Content>
    </Backdrop>,
    modalRoot
  );
}
