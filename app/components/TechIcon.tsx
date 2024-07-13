export default function TechIconComponent() {
  // in name, alt text pairs
  const techIcons: [string, string][] = [
    ["python.svg", "Python"],
    ["js.svg", "JavaScript"],
    ["ts.svg", "TypeScript"],
    ["c++.svg", "C++"],
    ["java.svg", "Java"],
    ["oraclesql.svg", "OracleSQL"],
    ["verilog.svg", "Verilog"],
    ["matlab.svg", "MATLAB"],

    ["git.svg", "Git"],

    ["html.svg", "HTML"],
    ["css.svg", "CSS"],
    ["react.svg", "React"],
    ["nextjs.svg", "Next.js"],
    ["tailwindcss.svg", "Tailwind CSS"],

    ["nodejs.svg", "Node.js"],
    ["mongodb.svg", "MongoDB"],

    ["linux.svg", "Linux"],
    ["ros2.svg", "ROS2"]
  ]
  return (
    <div className='page-section'>
      <h3 className='section-subtitle'>
        I have worked with...
      </h3>
      <h2 className='section-title'>
        Tech Stacks
      </h2>
      <div>
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-6 w-full justify-center items-center pt-12'>
          {techIcons.map(([iconName, altText], idx) => (
            <div key={idx} className='h-20 w-full relative group flex justify-center'> {/* Adjusted line */}
              <div className="h-18 w-18">
              <img className="hover:animate-float top-0 w-full h-16 object-contain mx-auto group-hover:shadow-lg" src={`/icon/${iconName}`} alt={altText} />
              </div>
              
              <div className="absolute bottom-0 flex justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-bold">{altText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>

      </div>
    </div>

  );
}