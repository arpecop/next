import { useState } from 'react';

import PlaceHolder from './_PlaceHolder';

const Select = ({
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
  return (
    <div className='md:flex mb-2'>
      <PlaceHolder
        required={required}
        placeholder={placeholder || ''}
        submitted={submitted}
      />
      <div className='w-full'>
        <select
          className={`select select-bordered ${
            !val && submitted && required
              ? 'inputerror border-2'
              : 'select-success'
          }  bg-gray-800 dark:bg-white border-2 w-fit`}
          name={name}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        >
          <option defaultValue='' />
          {options?.map((x) => (
            <option defaultValue={x} key={x}>
              {x}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Select;
