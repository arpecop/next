import React from 'react';

export default function PlaceHolder({
  placeholder,
  required,
}: {
  placeholder: string;
  required?: boolean;
  submitted?: boolean;
  layout?: boolean;
}) {
  return (
    <div className={"w-full md:w-1/4 pr-2 align-top flex md:justify-end"}>
      <div className='self-start text-sm'>
        {placeholder}{' '}
        {required !== undefined && <span className='text-red-600'>*</span>}
      </div>
    </div>
  );
}
