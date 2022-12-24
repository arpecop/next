import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import PlaceHolder from './_PlaceHolder';

const Radio = ({
  name,
  required,
  options,
  placeholder,
  submitted,
}: {
  name: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  submitted: boolean;
}): JSX.Element => {
  const [val, setVal] = useState<string>('');

  const [matches, setMatches] = useState<string>('w-full gap-0 grid');

  const mediaQueries = [
    { minWidth: 300 },
    { maxWidth: 400 },
    { minWidth: 500 },
    { maxWidth: 600 },
    { minWidth: 700 },
    { maxWidth: 800 },
    { maxWidth: 900 },
    { minWidth: 1000 },
  ];
  const size = mediaQueries
    .map((query) => useMediaQuery(query))
    .filter(Boolean).length;
  useEffect(() => {
    setMatches(`w-full gap-0 grid cols-${size}`);
  }, []);
  return (
    <div className='md:flex md:items-center mb-2'>
      <PlaceHolder
        required={required}
        placeholder={placeholder || ''}
        submitted={submitted}
      />

      <div className={matches}>
        {options?.map((x) => (
          <div
            key={x}
            className='flex items-center mb-2 od:bg-white even:bg-accent-black'
          >
            <input
              type='radio'
              key={x}
              name={name}
              {...(!required && required !== false ? {} : { required: true })}
              placeholder={placeholder}
              checked={val === x}
              className={
                submitted && required
                  ? 'radio  radio-secondary  border-2'
                  : 'radio  radio-accent  border-2'
              }
              onChange={(e): void => setVal(e.target.value)}
              value={x}
            />
            <div className={'label-text ml-1 font-bold flex-col'}>{x}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Radio;
