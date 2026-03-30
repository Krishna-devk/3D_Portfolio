import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Interested in my work? <br className='sm:block hidden' />
        Let’s talk or see my resume!
      </p>
      <div className='flex gap-4'>
        <a
          href='/resume.pdf'
          download='Krishna_Resume.pdf'
          className='btn-secondary flex items-center gap-2'
        >
          Resume
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5M12 16.5V3'
            />
          </svg>
        </a>
        <Link to='/contact' className='btn'>
          Contact
        </Link>
      </div>
    </section>
  );
};

export default CTA;
