import { TComponent } from "@components/types";
import { TextLink } from "@components/UI";
import clsx from "clsx";
import React, { useState } from "react";

interface Props extends TComponent {
  detailed?: boolean;
  src: string;
  title: string;
  link: string;
  width?: number;
  height?: number;
}

const Technology = ({
  src,
  title,
  className,
  "data-testid": testId,
  width,
  height,
  link,
  detailed = true,
}: Props) => {
  return (
    <div
      data-testid={testId || "technology"}
      className={clsx("text-center flex flex-col items-center justify-center", className)}
    >
      <img
        src={src}
        alt={title || "Technology"}
        title={title || "Technology"}
        width={`${width}px` || "50px"}
        height={`${height}px` || "50px"}
        style={{'height': `${height}px`|| "50px"}}
      />
    </div>
  );
};
export default Technology;
