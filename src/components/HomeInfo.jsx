import { Link } from "react-router-dom";



const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Krishna Agarwal</span>
        👋
        <br />
        Full Stack Developer & AI Engineer
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Built AI solutions impacting real-world problems <br /> and mastered modern tech stacks
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <span className='ml-2'>→</span>
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Won KIET Hackathon with ⭐ AgriSense AI. <br /> Curious about my impact?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <span className='ml-2'>→</span>
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Need to build an impactful AI project? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <span className='ml-2'>→</span>
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
