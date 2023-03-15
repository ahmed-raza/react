import React from "react";

const Messages = (props) => {
  const hasErrors = props.messages.errors !== undefined;
  const errors = hasErrors ? props.messages.errors : [];

  console.log();

  return (
    <div className={`messages${hasErrors ? " error" : " success"}`}>
      <p>{props.messages.message}</p>
      {hasErrors ? (
        <ul>
          {Object.keys(errors).map((key, error) => (
            <li key={key}>{errors[key][0]}</li>
          ))}
        </ul>
      ) : undefined}
    </div>
  );
};

export default Messages;
