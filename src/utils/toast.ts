// src/toastUtils.ts
import { toast, ToastPosition, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastType = "info" | "success" | "error";

interface ToastProps {
  message: string;
  type: ToastType;
  position?: ToastPosition;
  autoClose?: number;
}

export const showToast = ({
  message,
  type,
  position = "top-center",
  autoClose = 4000,
}: ToastProps) => {
  const options: ToastOptions = {
    position,
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  switch (type) {
    case "info":
      toast.info(message, options);
      break;
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    default:
      toast(message, options);
      break;
  }
};
