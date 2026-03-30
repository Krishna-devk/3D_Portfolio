import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Krishna
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Full Stack Developer & AI Engineer based in India, specializing in building
          impactful, real-world solutions that solve complex problems. My focus bridges 
          robust backend architectures with intelligent AI capabilities.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20 group relative cursor-pointer' key={skill.name}>
              <div className='btn-back rounded-xl group-hover:scale-105 transition-transform duration-300 ease-out' />
              <div className='btn-front rounded-xl flex justify-center items-center group-hover:scale-105 transition-transform duration-300 ease-out'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain group-hover:scale-110 transition-transform duration-300 ease-out'
                />
              </div>

              {/* Modern Tooltip Element */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none z-50 flex flex-col items-center translate-y-2 group-hover:translate-y-0">
                <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-xl px-4 py-2 flex flex-col items-center border border-slate-200/50">
                  <span className="font-poppins font-semibold text-slate-800 text-sm whitespace-nowrap">
                    {skill.name}
                  </span>
                  <span className="text-xs text-slate-500 font-medium whitespace-nowrap">
                    {skill.type}
                  </span>
                </div>
                {/* Tooltip Arrow */}
                <div className="w-2.5 h-2.5 bg-white/90 rotate-45 -mt-1.5 border-b border-r border-slate-200/50 shadow-sm"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Experience & Achievements.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've built systems that matter and competed in hackathons
            to test my skills. Here's a highlight of my journey:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
