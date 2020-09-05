import React, { useState, Fragment } from "react";

import { Alert, Toast, ToastBody, ToastHeader, Spinner } from "reactstrap";

const Notifications = ({ isOpen, handleToggleClick }) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    handleToggleClick();
    setVisible(false);
  };

  return (
    <Alert color="success" isOpen={visible} toggle={onDismiss}>
      Time to take break
    </Alert>
  );
};

export default Notifications;
