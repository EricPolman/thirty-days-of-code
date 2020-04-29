import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { ToastContainer, toast } from "react-toastify";
import alertsStore, { Alert } from "./alerts.store";
import { IReactionDisposer, reaction } from "mobx";
import "react-toastify/dist/ReactToastify.min.css";

const reactions: IReactionDisposer[] = [];
function AlertHandler() {
  useEffect(() => {
    reactions.push(
      reaction(
        () => alertsStore.current,
        (alert: Alert | null) => {
          if (alert) {
            toast.dismiss();
            toast(alert.title, {
              onClose: () => alertsStore.process(),
              onClick: () => alertsStore.process(),
              autoClose: alert.duration,
            });
          }
        }
      )
    );
    return () => {
      reactions.forEach((reaction) => reaction());
    };
  }, []);
  return <ToastContainer />;
}

export default observer(AlertHandler);
