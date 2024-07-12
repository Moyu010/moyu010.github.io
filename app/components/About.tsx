export default function AboutComponent() {
  const text: string[] = [
    "Hello, I am Jiayi Gu (but I go by 'Matthew'). I'm an undergraduate student at Monash University, Australia, majoring in Electrical Engineering and Computer Science. I'm deeply passionate about the future of technology and the changes it can bring to our world.",
    "With a strong academic record (WAM of 92.72, equivalent to a 4.0 GPA), I am committed to excellence and high performance in everything I do.",
    "My curiosity drives me to explore various technologies. I've worked on a range of projects, from developing full-stack web applications, simulating a CPU using Hardware Description Language (HDL), to designing and building true RMS voltage converters and more.",
    "I'm excited about applying the skills I've learned to make a positive impact and look forward to connecting with like-minded individuals who are also excited about the future of technology. Let's shape the future together!"
  ];

  return (
    <div id='about' className='page-section'>
      <h2 className='section-title'>
        About Me
      </h2>
      <div className='mt-4 text-gray-800'>
        {text.map((para, idx) => (
          <p key={idx} className='indent-2 mb-1'>{para}</p>
        ))}
      </div>
    </div>
  )
}