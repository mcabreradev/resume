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
        <TitleCustom>Biography</TitleCustom>
        <p className="text-accents-1 text-sm leading-6">
          Hey there! I’m Miguelángel Cabrera. A frontend engineer based in Buenos Aires, Argentina.
        </p>
        <p className="mt-3 text-accents-1 text-sm leading-6">
          I enjoy building software such as web applications with the
          most modern & latest technology available. My purpose is to create
          robust software following software engineering principles & best
          practices.
        </p>
        <p className="mt-3 text-accents-1 text-sm leading-6">
          I'm currently working as an independent contractor and <span className="text-primary">available for new offers</span>, if you have a great one don't hesitate, drop me a line.
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
