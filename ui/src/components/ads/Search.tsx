const Search = ({ cat }: { cat?: string }) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <button
        type='button'
        className='flex w-full cursor-text items-center justify-between rounded-lg px-4 py-1 text-sm font-medium transition-colors dark:text-slate-800 text-slate-100 hover:bg-t3-purple/20     hover:border-t3-purple-200/50 bg-gray-800/30 dark:bg-white/30  backdrop-blur-sm   border-px max-w-md shadow-lg'
      >
        <div className='flex items-center justify-center min-h-12'>
          <svg className='h-6 w-6' fill='none'>
            <path
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='pl-1 lg:pl-3'>Търсене</span>
        </div>
      </button>
    </div>
  );
};
export default Search;
