import React from "react";
import clsx from "clsx";
import { SiGithub, SiLinkedin, SiTwitter, SiGmail, SiWhatsapp } from "react-icons/si";
import { TComponent } from "@components/types";
import { Icon, TextLink } from "@components/UI";
import { profile as data } from "@data/json";

interface Props extends TComponent {
  size?: number;
}

const Social = ({ className, size, "data-testid": testId }: Props) => {
  return (
    <div
      data-testid={testId || "social"}
      className={clsx("flex items-center justify-between", className)}
    >
      <TextLink newTab href={data.social.github}>
        <Icon className="mr-3" SVG={SiGithub} size={size} />
      </TextLink>
      <TextLink newTab href={data.social.linkedin}>
        <Icon className="mr-3" SVG={SiLinkedin} size={size} />
      </TextLink>
      <TextLink newTab href={data.social.twitter}>
        <Icon className="mr-3" SVG={SiTwitter} size={size} />
      </TextLink>
      <TextLink newTab href={data.social.whatsapp}>
        <Icon className="mr-3" SVG={SiWhatsapp} size={size} />
      </TextLink>
      <TextLink newTab href={data.social.email}>
        <Icon className="mr-3" SVG={SiGmail} size={size} />
      </TextLink>
    </div>
  );
};
export default Social;
