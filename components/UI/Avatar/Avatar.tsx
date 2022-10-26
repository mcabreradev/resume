import React from "react";
import clsx from "clsx";
import { TComponent } from "@components/types";

interface Props extends TComponent {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
}

const Avatar = ({
  src,
  className,
  width,
  height,
  alt,
  "data-testid": testId,
}: Props) => {
  return (
    <img
      data-testid={testId || "avatar"}
      className={clsx(
        "inline object-cover h-48 w-48 rounded-full text-white shadow-solid border border-primary",
        className
      )}
      src={src}
      alt={alt || "Avatar"}
      width={width || "150px"}
      height={height || "150px"}
    />
  );
};
export default Avatar;

// .circle {
//   border: 2px solid red;
//   background-color: #FFFFFF;
//   height: 100px;
//   border-radius:50%;
//   width: 100px;
// }