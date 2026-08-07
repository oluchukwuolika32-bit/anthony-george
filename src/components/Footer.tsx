function Footer() {
  return (
    <>
      <div className="flex flex-wrap w-full">

        <div className="bg-[#030911] w-full sm:w-1/2 lg:w-1/4 h-63 text-[#ABAFB5]">
          <div className="m-5">
            <h1>Building software that makes <br />an impact. lets connect and <br />build something great together.</h1>
          </div>
        </div>

        <div className="bg-[#030911] w-full sm:w-1/2 lg:w-1/4 h-63">
          <div className="text-1xl m-5 text-[#ABAFB5]">
            <h1 className="font-bold text-2xl text-white">Navigation</h1>
            <p>home</p>
            <p>About</p>
            <p>Projects</p>
            <p>Skills</p>
            <p>Experience</p>
            <p>contact</p>
          </div>
        </div>

        <div className="bg-[#030911] w-full sm:w-1/2 lg:w-1/4 h-63">
          <div className="text-[#ABAFB5] text-1xl m-5">
            <p className="font-bold text-2xl text-white">Quick Links</p>
            <p>Download CV</p>
            <p>GitHub</p>
            <p>Blog</p>
            <p>resume</p>
          </div>
        </div>

        <div className="bg-[#030911] w-full sm:w-1/2 lg:w-1/4 h-63">
          <div className="m-5 text-[#ABAFB5]">
            <h1 className="font-bold text-2xl text-white">Get in touch</h1>
            <p>hellow@anthonygeorge.dev</p>
            <p>+234 705 983 5772</p>
            <p>Lagos, Nigeria</p>
          </div>
        </div>

      </div>
      <div className="flex bg-[#030911] text-center">
        <h1 className="text-amber-50">@ 2025 Anthony George. All rights reserved.</h1>
      </div>
    </>
  )
}

export default Footer