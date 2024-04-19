import { createPortal } from "react-dom";

export const Portal = ({ children, element = document.body }) => createPortal(children, element);
