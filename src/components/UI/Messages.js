import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

const Messages = (props) => {
  const [show, setShow] = useState(true);
  const hasErrors = props.messages.errors !== undefined;
  const errors = hasErrors ? props.messages.errors : [];

  useEffect(() => {
    setShow(true);
  }, [errors]);

  if (show) {
    return (
      <Alert
        variant={hasErrors ? "danger" : "success"}
        onClick={() => {
          setShow(false);
        }}
        dismissible
      >
        {props.messages.message}
        {hasErrors ? (
          <ul>
            {Object.values(errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        ) : undefined}
      </Alert>
    );
  }
  return;
};

export default Messages;
