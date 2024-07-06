import ProjectComponent from './components/Project';
import Footer from "./components/Footer";
import TechIcon from './components/TechIcon';

export default function Home() {
  return (
    <>
    {/* TODO: A dropdown line with a sun/moon icon that toggles dark mode */}
      <div className='flex flex-col lg:flex-row'>
        {/* Sidebar */}
        <div className='bg-gray-200 w-full lg:w-1/3 lg:sticky lg:top-0 lg:h-screen'>
          <div className='flex flex-col items-center justify-center lg:h-full w-4/5 mx-auto gap-2 lg:my-10 my-48'>
            <h1 className='text-4xl font-bold'>Jiayi Matthew Gu</h1>
            <h2>Student Electrical and Software Engineer</h2>
            <div className='flex justify-center items-center gap-3 lg:gap-5 mt-7 mb-7'>
              <a href='https://www.linkedin.com/in/jiayi-matthew-gu/' target='_blank' rel='noopener noreferrer'>
                <img src='/icon/linkedin.svg' alt='LinkedIn' className='w-10 hover:scale-105' />
              </a>
              <a href='https://github.com/Moyu010' target='_blank' rel='noopener noreferrer'>
                <img src='/icon/github.svg' alt='GitHub' className='w-10 hover:scale-105' />
              </a>
              <a href='mailto:Matthewgjy@gmail.com' target='_blank' rel='noopener noreferrer'>
                <img src='/icon/gmail.svg' alt='Gmail' className='w-10 hover:scale-105' />
              </a>
            </div>
            <div>
              <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
                <button className='bg-blue-500 hover:bg-blue-600/85 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-150 ease-in-out'>
                  Resume &gt;&gt;
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* TODO: A scrolling section indicator on the side of the left sidebar */}
        {/* Main Content */}
        <div className='flex-1 overflow-auto lg:mt-24 mt-10'>
          <div className='flex flex-col justify-center items-centerspace-y-10'>
            <div id='about' className='page-section mt-4 pt-4'>
              <h2 className='text-4xl font-bold text-gray-800'>
                About Me
              </h2>
              <div className='mt-4 text-gray-800'>
                <p className='indent-2 mb-1'>
                  Hello, I am Jiayi Gu (but I go by 'Matthew'). I'm an undergraduate student at Monash University, Australia, majoring in Electrical Engineering and Computer Science. I'm deeply passionate about the future of technology and the changes it can bring to our world.
                </p>
                <p className='indent-2 mb-1'>
                  With a strong academic record (WAM of 92.72, equivalent to a 4.0 GPA), I am committed to excellence and high performance in everything I do.
                </p>
                <p className='indent-2 mb-1'>
                  My curiosity drives me to explore various technologies. I've worked on a range of projects, from developing full-stack web applications, simulating a CPU using Hardware Description Language (HDL), to designing and building true RMS voltage converters and more.
                </p>
                <p className='indent-2 mb-1'>
                  I'm excited about applying the skills I've learned to make a positive impact and look forward to connecting with like-minded individuals who are also excited about the future of technology. Let's shape the future together!
                </p>
              </div>
            </div>
            <div className='page-section'>
              <h2 className='text-4xl font-bold text-gray-800'>
                I have worked with...
              </h2>
              <div>
                <TechIcon></TechIcon>
              </div>
              <div>

              </div>
            </div>
            <div id='projects' className='page-section'>
              <h2 className='text-4xl text-center font-bold text-gray-800'>
                Projects
              </h2>
              <div className='mt-4'>
                <ProjectComponent />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
