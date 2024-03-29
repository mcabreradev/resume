import React from "react";
import { TComponent } from "@components/types";
import { TextLink } from "@components/UI";
import { profile, technologies } from "@data/json";
import { BiRightArrow } from "react-icons/bi";
import Technology from "../Technology";

interface Props extends TComponent {}

const Experience = ({}: Props) => {

  const {experience} = profile;

  return (
    <>
      { experience.map((experience: any, index: any) => (
        <div key={`experience-${index}`} data-testid="experience" className="flex flex-col md:flex-row mb-12 ">
          <div>
            <h2 className="text-lg text-secondary font-bold uppercase">
              {experience.role}{" "}
              <TextLink newTab href={experience.link} className="text-md text-primary">
                @{experience.company}
              </TextLink>
            </h2>
            <p className="text-sm text-accents-1 mt-2">
              {experience.time.start} - {experience.time.end}
            </p>
            <ul className="mt-4 list-none ml-2">
              {experience.points.map((point: any) => (
                <li
                  className="mb-3 flex items-center"
                  key={`point-${point}-${index}`}
                >
                  <div className="mr-3">
                    <BiRightArrow
                      size={12}
                      className="fill-current text-primary inline-block"
                    />
                  </div>
                  <span className="text-sm text-accents-1">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4s">
              <span className="text-accents-1 text-sm flex flex-col">
                Technologies:
                <div className="flex flex-wrap mt-4">
                  {experience.technologies.map((tech:any, j:any) => {
                    const image = technologies.technologies.find(t => t.slug === tech)
                    return !!image && (
                      <Technology
                        detailed={true}
                        src={image.thumbnail}
                        title={image.title}
                        link={image.link}
                        key={image.slug}
                        className="mr-3"
                        width={40}
                        height={40}
                      />
                    )
                  })}
                </div>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Experience;
