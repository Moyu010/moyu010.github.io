export default function SidebarComponent() {
    return (
        <div className='bg-gray-200 w-full lg:w-1/3 lg:sticky lg:top-0 lg:h-screen'>
            <div className='flex flex-col items-center justify-center lg:h-full w-4/5 mx-auto gap-2 lg:my-10 my-48'>
                <h1 className='text-4xl font-bold text-center'>Jiayi Matthew Gu</h1>
                <h2 className="text-center">Student Electrical and Software Engineer</h2>
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
    );
};