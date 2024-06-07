import About from "./(sub-home)/about/page";
import Experience from "./(sub-home)/experience/page";
import Main from "./(sub-home)/main/page";
import { Projects } from "./(sub-home)/projects/page";
import Contact from "./(sub-home)/contact/page";

export default function Home() {
  return (
    <div className="mx-8 lg:mx-0">
      <div className="fixed bottom-0 left-10 hidden lg:block">
        <ul className="w-5 space-y-5">
          <li>
            <a href="https://github.com/fujipug" aria-label="GitHub" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8892B0] transition ease-in-out duration-300 hover:text-[#62f5d6]"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/fujixsan_" aria-label="Instagram" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8892B0] transition ease-in-out duration-300 hover:text-[#62f5d6]"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/pugs0x" aria-label="Twitter" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8892B0] transition ease-in-out duration-300 hover:text-[#62f5d6]"><title>Twitter</title><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lanefujikado" aria-label="Linkedin" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8892B0] transition ease-in-out duration-300 hover:text-[#62f5d6]"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </li>
        </ul>
        <div className="ml-2 mt-5 inline-block h-[150px] w-[1px] self-stretch bg-neutral-100 dark:bg-[#8892B0]"></div>
      </div>
      <Main />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <div className="fixed bottom-0 right-10 hidden lg:block">
        <a href="mailto:lane.fujikado@gmail.com">
          <p className="w-5 space-y-5 rotate-90 mb-36 text-sm text-[#8892B0] transition ease-in-out duration-300 hover:text-[#62f5d6]">lane.fujikado@gmail.com</p>
        </a>
        <div className="ml-2 mt-5 inline-block h-[150px] w-[1px] self-stretch bg-neutral-100 dark:bg-[#8892B0]"></div>
      </div>
    </div>
  );
}
