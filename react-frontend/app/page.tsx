export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="bg-gray-200 w-full lg:w-1/3 lg:sticky lg:top-0 lg:h-screen">
          <div className="flex flex-col items-center justify-center h-full w-4/5 mx-auto gap-2">
            <h1 className="text-4xl font-bold">Hi, I am <br />Jiayi Matthew Gu👋🏼</h1>
            <h2>Student Electrical and Software Engineer</h2>
            <div className="flex justify-center items-center gap-3 md:gap-5 mt-7 mb-7">
              <a href="https://www.linkedin.com/in/jiayi-matthew-gu/" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-7 md:w-10 hover:scale-105" />
              </a>
              <a href="https://github.com/Moyu010" target="_blank" rel="noopener noreferrer">
                <img src="/github.svg" alt="GitHub" className="w-7 md:w-10 hover:scale-105" />
              </a>
              <a href="mailto:Matthewgjy@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src="/gmail.svg" alt="Gmail" className="w-7 md:w-10 hover:scale-105" />
              </a>
            </div>
            <div>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Resume &gt;&gt;
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="flex justify-center items-center lg:mt-24 mt-10">
            <div className="w-4/5 page-section mt-2">
              <h2 className="text-4xl text-center font-bold text-gray-800">
                About Me
              </h2>
              <div className="mt-4 text-gray-800">
                <p className="indent-2 mb-3">
                  Hello! I'm an undergraduate student at Monash University, Australia, majoring in Electrical Engineering and Computer Science. I'm deeply passionate about the future of technology and the transformative changes it can bring to our world.
                </p>
                <p className="indent-2 mb-3">
                  With a strong academic record (WAM of 92.72, equivalent to a 4.0 GPA), I am committed to excellence and high performance in everything I do.
                </p>
                <p className="indent-2 mb-3">
                  My curiosity drives me to explore various technologies. I've worked on a range of projects, from developing full-stack web applications, simulating a CPU using Hardware Description Language (HDL), to designing and building true RMS voltage converters and more.
                </p>
                <p className="indent-2 mb-3">
                  I'm excited about applying the skills I've learned to make a positive impact and look forward to connecting with like-minded individuals who are also excited about the future of technology. Let's shape the future together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
