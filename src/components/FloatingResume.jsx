import { useLocation } from "react-router-dom";

const FloatingResume = () => {
  const { pathname } = useLocation();

  // Only show on Home and About pages as requested
  if (pathname !== "/" && pathname !== "/about") return null;

  return (
    <div className='fixed bottom-8 right-8 z-50 group flex items-center'>
      <div className='absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
        <div className='bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200/50 shadow-lg'>
          <span className='whitespace-nowrap font-poppins font-semibold text-slate-800 text-sm'>
            Download my Resume
          </span>
        </div>
      </div>

      <a
        href='/resume.pdf'
        download='Krishna_Resume.pdf'
        className='flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-full shadow-[0_0_20px_rgba(0,198,255,0.4)] hover:shadow-[0_0_30px_rgba(0,198,255,0.6)] text-white transition-all duration-300 hover:scale-110 active:scale-95 group-hover:rotate-12'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2.5}
          stroke='currentColor'
          className='w-6 h-6 animate-bounce'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5M12 16.5V3'
          />
        </svg>
      </a>
    </div>
  );
};

export default FloatingResume;
