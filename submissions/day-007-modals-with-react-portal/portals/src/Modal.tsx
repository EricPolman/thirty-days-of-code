import React from "react";
import { modalRoot } from ".";
import Portal from "./Portal";
import { Modal as BootstrapModal, Button } from "react-bootstrap";

interface Props {
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  children: React.ReactNode;
  usePortal?: boolean;
}

export const Modal = ({
  onClose,
  onConfirm,
  children,
  title,
  usePortal = true,
}: Props) => {
  const modal = (
    <BootstrapModal.Dialog>
      <BootstrapModal.Header closeButton onHide={onClose}>
        <BootstrapModal.Title>{title}</BootstrapModal.Title>
      </BootstrapModal.Header>

      <BootstrapModal.Body>{children}</BootstrapModal.Body>

      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          Confirm
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal.Dialog>
  );

  if (usePortal) {
    return <Portal target={modalRoot!}>{modal}</Portal>;
  } else {
    return (
      <div
        style={{
          top: 0,
          width: "100vw",
          height: "100vh",
          position: "fixed",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {modal}
      </div>
    );
  }
};
