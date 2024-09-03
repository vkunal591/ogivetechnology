import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// Define an interface for the component props
interface AlertDialogProps {
  isOpen: boolean;
  onCancel: () => void;
  onOk: () => void;
  text: string;
  okText: string;
  cancelText?: string;
  messageType?: "info" | "warning" | "error" | "success"; // Optional, with specific types
  style?: React.CSSProperties; // Optional
  heading: string;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  isOpen,
  onCancel,
  onOk,
  text,
  okText,
  cancelText,
  messageType,
  style,
  heading,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      style={style}
    >
      <DialogTitle id="alert-dialog-title">{heading}</DialogTitle>
      <DialogContent>
      <DialogContentText id="alert-dialog-description" color={'green'} sx={{fontSize:'14px',marginBottom:'2px'}}>
          {text.split('|')[1]}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          {text.split('|')[0]}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {cancelText && (
          <Button onClick={onCancel} color="primary">
            {cancelText}
          </Button>
        )}
        <Button color={messageType} onClick={onOk}>
          {okText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
