import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import PlaceHolder from './_PlaceHolder';

const Checkbox = ({
  name,
  required,
  options,
  placeholder,
  submitted,
  value,
}: {
  name: string;
  placeholder?: string;
  type?: string;
  value?: string[];
  required?: boolean;
  options: string[];
  submitted: boolean;
}): JSX.Element => {
  const [selectedarr, setVal] = useState<string[]>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    if (checked) {
      setVal([...selectedarr, value]);
    } else {
      setVal(selectedarr.filter((x) => x !== value));
    }
  };
  useEffect(() => {
    setVal(value || []);
  }, [value]);

  const isEmpty = submitted && required && selectedarr.length === 0;
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
  //flex flex-wrap w-full

  return (
    <div className='md:flex mb-2'>
      <PlaceHolder
        required={required}
        placeholder={placeholder || ''}
        submitted={submitted}
      />

      <div className={matches}>
        {options.map((optionval) => (
          <label
            className='label cursor-pointer flex justify-start'
            key={optionval}
          >
            <input
              {...{
                name,
                type: 'checkbox',
                ...(!required ? {} : { required: true }),
              }}
              checked={selectedarr.includes(optionval)}
              className={`checkbox ${
                isEmpty
                  ? 'checkbox-secondary border-2'
                  : 'checkbox-accent  border-2'
              }`}
              value={optionval}
              placeholder={placeholder}
              onChange={(e) => handleOnChange(e)}
            />
            <div className='w-full  truncate text-sm'>{optionval}</div>
          </label>
        ))}
      </div>
    </div>
  );
};
export default Checkbox;
