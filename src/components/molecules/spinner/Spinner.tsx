import React from "react";
import { SpinnerTypes } from "./types";
export const Spinner = ({ size = "medium" }: SpinnerTypes) => (
  <span
    className={` ${size} spinner w-6 h-6 light icon-toast inline-block align-text-bottom rounded-full`}
  />
);
