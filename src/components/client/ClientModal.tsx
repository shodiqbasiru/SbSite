import { Dialog } from "primereact/dialog";
import React from "react";

interface ClientModalProps {
  visible: boolean;
  header: React.ReactNode;
  onHide: () => void;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export default function ClientModal({
  visible,
  header,
  onHide,
  footer,
  children,
}: ClientModalProps) {
  return (
    <Dialog
      modal
      visible={visible}
      style={{ width: "50rem" }}
      header={header}
      onHide={onHide}
      footer={footer}
    >
      {children}
    </Dialog>
  );
}
