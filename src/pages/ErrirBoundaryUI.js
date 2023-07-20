import React, { Suspense } from "react";
import ErrorBoundaryOth from "../components/errorBoundaries/indexoth";

const ErrirBoundaryUI = () => {
  return (
    <ErrorBoundaryOth fallback="some error">
      <Alert message="Ankit" />
    </ErrorBoundaryOth>
  );
};
const Alert = ({ message }) => {
  if (typeof message !== "string" || !message) {
    throw new Error("Message must be string");
  }
  return <div>{message}</div>;
};
export default ErrirBoundaryUI;
