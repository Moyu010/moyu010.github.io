import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="title-banner">
        <div>
          <h1 className="">Hi, I am Jiayi Matthew Gu, </h1>
          <h2 className="">An Electrical Engineering and Computer Science student</h2>
        </div>
        <div>
          <img src="/profile.jpg" alt="profile" />
        </div>
      </div>

      <div className="bg-white w-4/5 mx-auto flex justify-center items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="flex justify-center items-center">
            <div className="w-2/3">
              <h2 className="text-4xl text-center font-bold text-gray-800">
                About Me
              </h2>
              <div className="mt-4 text-gray-600">
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
              <div className="flex justify-center items-center gap-3 md:gap-5 mt-7">
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
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
