import ProjectComponent from './components/Project';
import Footer from "./components/Footer";
import TechIconComponent from './components/TechIcon';
import AboutComponent from './components/About';
import SidebarComponent from './components/Sidebar';

export default function Home() {
  return (
    <>
    {/* TODO: A dropdown line with a sun/moon icon that toggles dark mode */}
      <div className='flex flex-col lg:flex-row'>
        {/* Sidebar */}
        <SidebarComponent />
        {/* TODO: A scrolling section indicator on the side of the left sidebar */}
        {/* Main Content */}
        <div className='flex-1 overflow-auto lg:mt-12 mt-10'>
          <div className='flex flex-col justify-center items-center space-y-10'>
            <AboutComponent />
            <TechIconComponent />
            <ProjectComponent />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
