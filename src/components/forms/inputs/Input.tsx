import { useEffect, useRef, useState } from 'react';

import PlaceHolder from './_PlaceHolder';

const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string,
) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = '0px';
      const scrollHeight = textAreaRef.scrollHeight;
      textAreaRef.style.height = `${scrollHeight}px`;
    }
  }, [textAreaRef, value]);
};

const Input = ({
  name,
  placeholder,
  type,
  value,
  required,
  after,
  submitted,
}: {
  name: string;
  placeholder?: string;
  type?: string;
  layout?: string;
  value?: string;
  required?: boolean;
  after?: string;
  submitted?: boolean;
}) => {
  const [val, setVal] = useState(value || '');
  const isEmpty = !val && required && submitted;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, val);

  return (
    <div
      className={type === 'hidden' ? 'hidden' : 'md:flex md:items-center mb-2'}
    >
      <PlaceHolder
        required={required}
        placeholder={placeholder || ''}
        submitted={submitted}
      />
      <div className='w-full flex'>
        {type === 'textarea' ? (
          <textarea
            {...(!required ? {} : { required: true })}
            ref={textAreaRef}
            className={`${
              isEmpty ? 'textarea-secondary border-2' : 'textarea-accent'
            } textarea w-full  overflow-hidden border-2  h-14 bgaccent `}
            value={val}
            rows={3}
            name={name}
            placeholder={placeholder}
            onChange={(e): void => setVal(e.target.value)}
          />
        ) : (
          <input
            {...(!required ? {} : { required: true })}
            type={type || 'text'}
            placeholder={placeholder}
            className={`${
              isEmpty ? 'inputerror' : 'inputx'
            } w-full flex-1 border-2`}
            name={name}
            value={val}
            alt={after}
            onChange={(e): void => setVal(e.target.value)}
          />
        )}
        {after && (
          <div className='flex-1  flex justify-center items-center pl-2 text-xs'>
            {after}
          </div>
        )}
      </div>
    </div>
  );
};
export default Input;

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
