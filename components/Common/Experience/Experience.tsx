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
        <div key={`experience-${index}`} data-testid="experience" className="flex flex-col md:flex-row mb-10">
          <div>
            <h2 className="text-lg text-accents-2 font-medium">
              {experience.role}{" "}
              <TextLink newTab href={experience.link} className="text-lg text-primary">
                @{experience.company}
              </TextLink>
            </h2>
            <p className="text-sm text-accents-1">
              {experience.time.start} - {experience.time.end}
            </p>
            <ul className="mt-4 list-none ml-10">
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
              <span className="text-accents-1 text-sm flex items-end justify-between">
                Technologies:
                <div className="flex flex-wrap mt-2">
                  {experience.technologies.map((tech:any, j:any) => {
                    const image = technologies.technologies.find(t => t.slug === tech)
                    if(image){
                      return <Technology
                        detailed={false}
                        src={image.thumbnail}
                        title={image.title}
                        link={image.link}
                        key={image.slug}
                        className="mr-3"
                        width={30}
                        height={30}
                      />
                    }
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
