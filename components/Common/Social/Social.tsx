import React from "react";
import tw from "tailwind-styled-components"
import { SiGithub, SiLinkedin, SiTwitter, SiGmail, SiWhatsapp } from "react-icons/si";
import { TComponent } from "@components/types";
import { Icon, TextLink } from "@components/UI";
import { profile as data } from "@data/json";

const Container = tw.div`
  flex 
  flex-rox md:flex-col
  items-center md:items-start
`;

const TextLinkCustom=tw(TextLink)`
  flex 
  flex-row
`;

const Title = tw.div`
  hidden md:flex
  text-xs
  text-accents-1
  items-center
  hover:text-primary 
`;

const IconCustom = tw(Icon)`
  mx-2 md:my-2
  hover:text-primary 
`;

interface Props extends TComponent {
  size?: number;
}

const Social = ({ className, size, "data-testid": testId }: Props) => {
  return (
    <Container
      data-testid={testId || "social"} className={className}>
      <TextLinkCustom newTab href={data.social.email}>
        <IconCustom SVG={SiGmail} size={size} />
        <Title>hi@mcabrera.dev</Title>
      </TextLinkCustom>
      <TextLinkCustom newTab href={data.social.github}>
        <IconCustom SVG={SiGithub} size={size} />
        <Title>@mcabreradev</Title>
      </TextLinkCustom>
      <TextLinkCustom newTab href={data.social.linkedin}>
        <IconCustom SVG={SiLinkedin} size={size} />
        <Title>/mcabreradev</Title>
      </TextLinkCustom>
      <TextLinkCustom newTab href={data.social.twitter}>
        <IconCustom SVG={SiTwitter} size={size} />
        <Title>@mcabreradev</Title>
      </TextLinkCustom>
      <TextLinkCustom newTab href={data.social.whatsapp}>
        <IconCustom SVG={SiWhatsapp} size={size} />
        <Title>+54 11 2251 0921</Title>
      </TextLinkCustom>
    </Container>
  );
};
export default Social;
