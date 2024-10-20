import React from "react";
import { Button } from "../ui/button";

const CommonForm = ({ handleSubmit, buttonText }) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* render form controls here */}
      <Button type="submit">{buttonText || "Submit"}</Button>
    </form>
  );
};

export default CommonForm;
