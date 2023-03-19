import { Experience, Technology } from "@components/Common";
import { technologies } from "@data/json";
import tw from "tailwind-styled-components"

const TitleCustom = tw.h2`
  text-4xl 
  font-thin 
  text-accents-2 
  uppercase 
  leading-10 
  tracking-tight 
  mb-5
`;

const IndexPage = () => {
  return (
    <div>
      <div className="mt-0 md:mt-4 lg:mt-10">
        <TitleCustom>ABOUT ME</TitleCustom>
        <p className="text-accents-1 text-sm leading-6">
          Hey there! I’m Miguelángel Cabrera, based in Buenos Aires, Argentina.
        </p>
        <p className="mt-5 text-accents-1 text-sm leading-6">
          I'm a Senior Frontend Engineer with over 10 years of experience in developing web applications using technologies such as JavaScript, React, and the entire JavaScript stack. I'm passionate about creating high-quality and scalable technological solutions that exceed the customer's expectations.
        </p>
        <p className="mt-5 text-accents-1 text-sm leading-6">
          Throughout my career, I've worked on projects of different sizes, from small applications to large enterprise projects. I enjoy leading development teams and collaborating on challenging projects.
        </p>
        <p className="mt-5 text-accents-1 text-sm leading-6">
          I'm a proactive and adaptable person, which allows me to work effectively and collaboratively with teams. I like to stay up-to-date on the latest technological trends and apply them to my work.
        </p>
        <p className="mt-5 text-accents-1 text-sm leading-6">
          If you'd like to learn more about my experience and skills, <span className="text-primary">I'd be happy to schedule a meeting</span> to discuss them in detail.
        </p>
        <div className="mt-14">
          <TitleCustom>Experience</TitleCustom>
          <Experience />
        </div>

        <div className="mt-8">
          <TitleCustom>Stacks</TitleCustom>
          {Object.entries(technologies.stacks).map((stack: any) => (
            <div key={`stack-${stack[0]}`} className="mt-4 mb-8">
              <p  className="text-sm text-accents-1 mb-3">{stack[0]}</p>
              <div className="grid grid-cols-4 lg:grid-cols-8 gap-y-6">
                {stack[1].map((tech:any) => {
                  const image = technologies.technologies.find(t => t.slug === tech)
                  return !!image && (
                    <Technology
                      detailed={true}
                      src={image?.thumbnail}
                      title={image?.title}
                      link={image?.link}
                      key={image?.slug}
                      className="mr-3"
                      width={50}
                      height={50}
                    />
                  )
                })}
              </div>
            </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
