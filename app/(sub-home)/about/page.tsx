import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import Image from "next/image";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

export default function About() {
  return (
    <div id='about' className="flex justify-center items-center">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center">
          <h1 className="text-xl lg:text-3xl"><span className={`${audiowide.className} text-[#62f5d6]`}>01.</span> About me</h1>
          <hr className="ml-4 w-72 h-[1px] bg-gray-100 border-0 dark:bg-gray-700 hidden lg:block" />
        </div>
        <br />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="col-span-1">
            <p className="text-[#8892B0]">Hello, my name is Lane Fujikado and I enjoy building things for the web and learning about the latest technologies in software development.
              My interest started back in 2006 when I was in high school updating my MySpace page and learning how to build websites using HTML and CSS.
            </p>
            <br />

            <p className="text-[#8892B0]">
              Since then I have continued to learn and grow as a software engineer and entrepreneur. I have a passion for building products and services that help people and
              businesses reach their full potential. I have had the priviledge to work with some amazing people and companies and I am always looking for new opportunities to
              collaborate and create.
            </p>
            <br />

            <p className="text-[#8892B0]">Here are a few technologies I’ve been working with recently:</p>
            <br />

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 text-sm">
                <ul className="space-y-2">
                  <li className="text-[#8892B0]"><span className="text-[#62f5d6]">&#10146;</span> JavaScript (ES6+)</li>
                  <li className="text-[#8892B0]"><span className="text-[#62f5d6]">&#10146;</span> TypeScript</li>
                  <li className="text-[#8892B0]"><span className="text-[#62f5d6]">&#10146;</span> React</li>
                  <li className="text-[#8892B0]"><span className="text-[#62f5d6]">&#10146;</span> Next.js</li>
                </ul>
              </div>

              <div className="col-span-1 text-sm">
                <ul className="space-y-2">
                  <li className="text-[#8892B0]"><span className="text-[#62f5d6]">&#10146;</span> Angular</li>
                  <li className="text-[#8892B0]"><span className="text-[#62f5d6]">&#10146;</span> Tailwind</li>
                  <li className="text-[#8892B0]"><span className="text-[#62f5d6]">&#10146;</span> Node.js</li>
                  <li className="text-[#8892B0]"><span className="text-[#62f5d6]">&#10146;</span> Firebase</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <CardContainer className="mt-6 lg:mt-0">
              <CardBody className="bg-[#62f5d6] relative group/card dark:hover:shadow-2xl dark:hover:shadow-[#8892B0] dark:bg-[#8892B0] dark:border-[#62f5d6] border-[#62f5d6] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border">
                <CardItem translateZ="100" className="w-full">
                  <Image
                    src="/me.jpeg"
                    height="1000"
                    width="1000"
                    className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </div>
  )
}