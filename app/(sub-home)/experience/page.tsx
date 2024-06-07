import { Tabs } from "@/app/components/ui/tabs";
import Image from "next/image";

import { Audiowide } from "next/font/google";

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

export default function Experience() {
  const tabs = [
    {
      title: "Powered by Pugs",
      value: "powered by pugs",
      content: (
        <>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-[#8892B0] to-violet-900">
            <p className="text-xl md:text-2xl font-semi-bold text-white">Founder, Fullstack Engineer
              <a href="https://poweredbypugs.com/home" target="blank" className="text-[#62f5d6]"> @ Powered by Pugs</a>
            </p>
            <p className="text-sm">September 2022 - Present</p>
            <p className="text-sm">Los Angeles, CA</p>

            <div className="grid grid-cols-2 space-x-5 my-8">
              <div className="col-span-1 flex justify-center">
                <Image
                  src="/me.jpeg"
                  height="1000"
                  width="1000"
                  className="h-full w-40 object-cover rounded-xl"
                  alt="thumbnail"
                />
              </div>
              <div className="col-span-1">
                <ul className="space-y-2">
                  <li className="text-white">
                    <div className="flex gap-x-2">
                      <span className="text-[#62f5d6]">&#10146;</span>
                      Designed and developed websites, applications, Customer Relationship Management(CRM) software, and Content
                      Management System (CMS) software tailored to client specifications.
                    </div>
                  </li>
                  <li className="text-white">
                    <div className="flex gap-x-2">
                      <span className="text-[#62f5d6]">&#10146;</span>
                      Engineered comprehensive frontend and backend systems for diverse clientele.
                    </div>
                  </li>
                  <li className="text-white">
                    <div className="flex gap-x-2">
                      <span className="text-[#62f5d6]">&#10146;</span>
                      Currently spearheading the development of subscription-based Software as a Service (SaaS) products. Proficient in
                      generating smart contracts and blockchain applications, with a focus on the Avalanche network.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Scorpion",
      value: "scorpion",
      content: (
        <>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-[#8892B0] to-violet-900">
            <p className="text-xl md:text-2xl font-semi-bold text-white">Frontend Engineer
              <a href="https://www.scorpion.co/" target="blank" className="text-[#62f5d6]"> @ Scorpion</a>
            </p>
            <p className="text-sm">February 2018 – September 2022</p>
            <p className="text-sm">Valencia, CA</p>

            <div className="grid grid-cols-2 space-x-5 my-8">
              <div className="col-span-1 flex justify-center">
                <Image
                  src="/me.jpeg"
                  height="1000"
                  width="1000"
                  className="h-full w-40 object-cover rounded-xl"
                  alt="thumbnail"
                />
              </div>
              <div className="col-span-1">
                <ul className="space-y-2">
                  <li className="text-white">

                    <div className="flex gap-x-2">
                      <span className="text-[#62f5d6]">&#10146;</span>
                      Integral member of the core team at Scorpion, instrumental in the development of the company's inaugural client-
                      facing product, Scorpion Home.
                    </div>
                  </li>
                  <li className="text-white">
                    <div className="flex gap-x-2">
                      <span className="text-[#62f5d6]">&#10146;</span>
                      Collaborated closely with backend engineers to conceptualize and construct the product from its inception.
                    </div>
                  </li>
                  <li className="text-white">
                    <div className="flex gap-x-2">
                      <span className="text-[#62f5d6]">&#10146;</span>
                      Led the design of the product's frontend architecture utilizing an NX mono repository, integrating diverse frontend
                      libraries and frameworks, notably Angular.
                    </div>
                  </li>
                  <li className="text-white">
                    <div className="flex gap-x-2">
                      <span className="text-[#62f5d6]">&#10146;</span>
                      Demonstrated success with widespread adoption by numerous prominent corporations and garnered
                      commendation within the technology community.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "idContentGroup",
      value: "idContentGroup",
      content: (
        <>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-[#8892B0] to-violet-900">
            <p className="text-xl md:text-2xl font-semi-bold text-white">Fullstack Engineer
              <a href="https://www.idcontentgroup.com/" target="blank" className="text-[#62f5d6]"> @ idContentGroup</a>
            </p>
            <p>June 2016 – October 2017</p>
            <p>Los Angeles, CA</p>

            <div className="grid grid-cols-2 space-x-5 my-8">
              <div className="col-span-1 flex justify-center">
                <Image
                  src="/me.jpeg"
                  height="1000"
                  width="1000"
                  className="h-full w-40 object-cover rounded-xl"
                  alt="thumbnail"
                />
              </div>
              <div className="col-span-1">
                <ul className="space-y-2">
                  <li className="text-white">
                    <div className="flex gap-x-2">
                      <span className="text-[#62f5d6]">&#10146;</span>
                      Contributed to the creation of healthcare-focused web and mobile applications within the organization's product
                      portfolio.
                    </div>
                  </li>
                  <li className="text-white">
                    <div className="flex gap-x-2">
                      <span className="text-[#62f5d6]">&#10146;</span>
                      Engaged directly with key client Adventist Health Group to define technical specifications, ensuring timely and
                      budget-conscious project delivery.
                    </div>
                  </li>
                  <li className="text-white">
                    <div className="flex gap-x-2">
                      <span className="text-[#62f5d6]">&#10146;</span>
                      Directed the development of both frontend and backend codebases for applications, leveraging Angular and
                      Firebase technologies.
                    </div>
                  </li>
                  <li className="text-white">
                    <div className="flex gap-x-2">
                      <span className="text-[#62f5d6]">&#10146;</span>
                      Facilitated code reviews and provided mentorship to junior developers, fostering team growth and code quality
                      standards.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "General Motors",
      value: "general motors",
      content: (
        <>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-[#8892B0] to-violet-900">
            <p className="text-xl md:text-2xl font-semi-bold text-white">Software Developer
              <a href="https://www.gm.com/" target="blank" className="text-[#62f5d6]"> @ General Motors</a>
            </p>
            <p className="text-sm">June 2015 – June 2016</p>
            <p className="text-sm">Chandler, AZ</p>

            <div className="grid grid-cols-2 space-x-5 my-8">
              <div className="col-span-1 flex justify-center">
                <Image
                  src="/me.jpeg"
                  height="1000"
                  width="1000"
                  className="h-full w-40 object-cover rounded-xl"
                  alt="thumbnail"
                />
              </div>
              <div className="col-span-1">
                <ul className="space-y-2">
                  <li className="text-white">
                    <div className="flex gap-x-2">
                      <span className="text-[#62f5d6]">&#10146;</span>
                      Served as a Frontend Developer for a pivotal internal project at General Motors, culminating in the successful
                      launch of the Opel Ireland website.
                    </div>
                  </li>
                  <li className="text-white">
                    <div className="flex gap-x-2">
                      <span className="text-[#62f5d6]">&#10146;</span>
                      Collaborated closely with the product owner and lead developers to ensure timely delivery of features aligned with
                      stakeholder requirements and expectations.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Game House",
      value: "game house",
      content: (
        <>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-[#8892B0] to-violet-900">
            <p className="text-xl md:text-2xl font-semi-bold text-white">Software Quality Assurance (Internship)
              <a href="https://www.gamehouse.com/" target="blank" className="text-[#62f5d6]"> @ Game House</a>
            </p>
            <p className="text-sm">September 2013 – January 2014</p>
            <p className="text-sm">Alicante, Spain</p>

            <div className="grid grid-cols-2 space-x-5 my-8">
              <div className="col-span-1 flex justify-center">
                <Image
                  src="/me.jpeg"
                  height="1000"
                  width="1000"
                  className="h-full w-40 object-cover rounded-xl"
                  alt="thumbnail"
                />
              </div>
              <div className="col-span-1">
                <ul className="space-y-2">
                  <li className="text-white">
                    <div className="flex gap-x-2">
                      <span className="text-[#62f5d6]">&#10146;</span>
                      Pioneered the development of the inaugural automated script to verify initial Digital Rights Management (DRM)
                      prerequisites for games slated for release on the Game House website. Implementation of this script significantly
                      streamlined DRM testing procedures, resulting in a notable 30% reduction in Quality Assurance team testing
                      duration.
                    </div>
                  </li>
                  <li className="text-white">
                    <div className="flex gap-x-2">
                      <span className="text-[#62f5d6]">&#10146;</span>
                      Contributed to the enhancement and refinement of the organization's automated testing methodologies, thereby
                      augmenting overall testing efficiency and effectiveness.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Northern Arizona University",
      value: "northern arizona university",
      content: (
        <>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-[#8892B0] to-violet-900">
            <p className="text-xl md:text-2xl font-semi-bold text-white">Web Developer and Lab Assistant
              <a href="https://nau.edu/" target="blank" className="text-[#62f5d6]"> @ Northern Arizona University</a>
            </p>
            <p className="text-sm">May 2013 – May 2015</p>
            <p className="text-sm">Flagstaff, AZ</p>

            <div className="grid grid-cols-2 space-x-5 my-8">
              <div className="col-span-1 flex justify-center">
                <Image
                  src="/me.jpeg"
                  height="1000"
                  width="1000"
                  className="h-full w-40 object-cover rounded-xl"
                  alt="thumbnail"
                />
              </div>
              <div className="col-span-1">
                <ul className="space-y-2">
                  <li className="text-white">
                    <div className="flex gap-x-2">
                      <span className="text-[#62f5d6]">&#10146;</span>
                      Engaged in direct collaboration with esteemed professors as a Laboratory Aide and Teacher's Assistant,
                      contributing to the design and implementation of engaging laboratory assignments tailored for incoming
                      Freshmen.
                    </div>
                  </li>
                  <li className="text-white">
                    <div className="flex gap-x-2">
                      <span className="text-[#62f5d6]">&#10146;</span>
                      Provided oversight and guidance to students within computer science labs, facilitating the acquisition of
                      fundamental programming competencies in Python, Java, and MatLab.
                    </div>
                  </li>
                  <li className="text-white">
                    <div className="flex gap-x-2">
                      <span className="text-[#62f5d6]">&#10146;</span>
                      Assumed the role of Lead Developer at the Center of International Education, Northern Arizona University (NAU),
                      spearheading the conceptualization, development, and deployment of websites for the Global Science and
                      Engineering Program and Global Business Program, thereby enhancing the institution's digital presence and
                      academic offerings.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];
  return (
    <div className="mx-auto max-w-5xl mb-40 mt-32">
      <div className="flex">
        <h1 className="text-xl lg:text-3xl"><span className={`${audiowide.className} text-[#62f5d6]`}>02.</span> Where I’ve worked</h1>
        <hr />
      </div>
      <br />
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start mt-4 mb-40">
        <Tabs tabs={tabs} />
      </div>
    </div>
  )

}