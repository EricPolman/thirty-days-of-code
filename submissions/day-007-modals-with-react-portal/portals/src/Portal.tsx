import React from "react";
import ReactDOM from "react-dom";

const Portal: React.FC<PortalProps> = (props) => {
  return ReactDOM.createPortal(
    <div className="modal-container">{props.children}</div>,
    props.target
  );
};

export interface PortalProps {
  target: Element;
  children: React.ReactNode;
}

export default Portal;
