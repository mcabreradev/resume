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
      className={clsx("flex items-center", className)}
    >
      <TextLink newTab href={data.social.github}>
        <Icon className="mx-2" SVG={SiGithub} size={size} />
      </TextLink>
      <TextLink newTab href={data.social.linkedin}>
        <Icon className="mx-2" SVG={SiLinkedin} size={size} />
      </TextLink>
      <TextLink newTab href={data.social.twitter}>
        <Icon className="mx-2" SVG={SiTwitter} size={size} />
      </TextLink>
      <TextLink newTab href={data.social.whatsapp}>
        <Icon className="mx-2" SVG={SiWhatsapp} size={size} />
      </TextLink>
      <TextLink newTab href={data.social.email}>
        <Icon className="mx-2" SVG={SiGmail} size={size} />
      </TextLink>
    </div>
  );
};
export default Social;
