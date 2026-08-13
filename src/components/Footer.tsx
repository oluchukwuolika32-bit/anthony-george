function Footer() {
  return (
    <>
      <div className="flex flex-wrap w-full bg-[#030911]  ">

        <div className=" w-1/2  lg:w-1/4 h-63 text-[#ABAFB5] ">
          <div className="ml-8 lg:ml-12">
            <h1>Building software that makes <br />an impact. lets connect and <br />build something great together.</h1>
          </div>
        </div>

        <div className="w-1/2 lg:w-1/4 h-63 ">
          <div className="text-1xl  text-[#ABAFB5] ml-8 lg:ml-12">
            <h1 className="font-bold text-2xl text-white">Navigation</h1>
            <p>home</p>
            <p>About</p>
            <p>Projects</p>
            <p>Skills</p>
            <p>Experience</p>
            <p>contact</p>
          </div>
        </div>

        <div className="w-1/2  lg:w-1/4 h-63">
          <div className="text-[#ABAFB5] text-1xl ml-8 lg:ml-12">
            <p className="font-bold text-2xl text-white">Quick Links</p>
            <p>Download CV</p>
            <p>GitHub</p>
            <p>Blog</p>
            <p>resume</p>
          </div>
        </div>

        <div className="w-1/2  lg:w-1/4 h-63 ">
          <div className=" text-[#ABAFB5] ml-8 lg:ml-12">
            <h1 className="font-bold text-2xl text-white">Get in touch</h1>
            {/* <p>hellow@anthonygeorge.dev</p> */}
            <p>+234 705 983 5772</p>
            <p>Lagos, Nigeria</p>
          </div>
        </div>

      </div>
      <div className=" bg-[#030911] text-center ">
        <h1 className="text-amber-50 pb-8">@ 2025 Anthony George. All rights reserved.</h1>
      </div>
    </>
  )
}

export default Footer