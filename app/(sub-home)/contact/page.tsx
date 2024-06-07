import { Audiowide } from "next/font/google";

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl mb-40">
      <div className="flex">
        <h1 className="text-xl lg:text-3xl"><span className={`${audiowide.className} text-[#62f5d6]`}>04.</span> Get in touch</h1>
        <hr />
      </div>
      <p className="mt-8 text-[#8892B0]">I’m always looking for any new opportunities for potential jobs or projects to work on; my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
      <div className="flex justify-center mt-8">
        <a
          href="mailto:lane.fujikado@gmail.com"
          type="button"
          className="rounded-md px-10 py-5 text-[#62f5d6] shadow-sm ring-1 ring-inset ring-[#62f5d6] transition ease-in-out duration-300 bg-white/0 hover:bg-[#8892B0]"
        >
          Say Hello
        </a>
      </div>
    </div>
  )
}