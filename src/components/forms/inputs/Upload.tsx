import { Amplify, Storage } from 'aws-amplify';
import { useState } from 'react';

import Checkbox from './Checkbox';

Amplify.configure({
  aws_project_region: 'eu-west-1',
  aws_cognito_identity_pool_id:
    'eu-west-1:2f394adb-6fe3-42e6-9cfb-e552b456a0a8',
  aws_cognito_region: 'eu-west-1',
  aws_user_pools_id: 'eu-west-1_R2tLVDqB0',
  aws_user_pools_web_client_id: '5k2d69fvijvdmpcml3a510eeqd',
  aws_user_files_s3_bucket: 'eziktokfriendly114941-staging',
  aws_user_files_s3_bucket_region: 'eu-west-1',
});

const Upload = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const prefix =
    'https://eziktokfriendly114941-staging.s3.eu-west-1.amazonaws.com/public/';

  function resizeImage(
    image: HTMLImageElement,
    name: string,
    w: number,
    h: number,
  ) {
    // Create a temporary canvas element
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    const ctx = canvas.getContext('2d') as any;
    const aspectRatio: number = w / h;
    const imageWidth =
      aspectRatio > 1 ? canvas.width : canvas.height * aspectRatio;
    const imageHeight =
      aspectRatio > 1 ? canvas.width / aspectRatio : canvas.height;
    const x = (canvas.width - imageWidth) / 2;
    const y = (canvas.height - imageHeight) / 2;

    ctx.drawImage(image, 0, 0, w, h, x, y, imageWidth, imageHeight);
    canvas.toBlob(async function (blob) {
      const result = await Storage.put(name, blob, {
        contentType: 'image/jpg',
      });

      return `${prefix}${result.key}`;
    });
    // Return the resized image data as a data URL
    //return canvas.toDataURL();
  }

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = target.files![0] as File;
    const fileName = `${Date.now()}.${file.name.split('.').pop()}`;
    const result = await Storage.put(fileName, file);

    const liveimg = `${prefix}${result.key}`;

    console.log(liveimg);
    setImages([liveimg, ...images]);
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = liveimg;
    image.onload = () => {
      const resizedImageData = resizeImage(
        image,
        `t_${fileName}`,
        image.width,
        image.height,
      );
      console.log(resizedImageData);
    };

    setLoading(false);
    setInputValue('');
  };

  const handleDelete = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className='md:flex mb-2'>
        <div className='w-full md:w-1/4 pr-2 align-top flex md:justify-end' />
        <div>
          <div className='flex w-full'>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                uploadImage(e)
              }
              type='file'
              value={inputValue}
              disabled={loading || images.length >= 5}
              className='file-input file-input-bordered file-input-info w-full max-w-xs'
            />
            <div className='pt-5 pl-2 text-xs'>{images.length} / 5</div>
          </div>
          <div className='grid grid-cols-4'>
            {images.map((url: string, i: number) => (
              <div className='relative mr-2 mb-2' key={url}>
                <div
                  className='absolute right-2 top-2 h-12 w-12 cursor-pointer rounded-full  flex justify-center items-center bg-black'
                  onClick={() => handleDelete(i)}
                  onKeyDown={() => handleDelete(i)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='white'
                    className='w-10 h-10'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                    />
                  </svg>
                </div>
                <img
                  src={url}
                  alt=''
                  width={220}
                  height={'auto'}
                  className='rounded-md'
                />
              </div>
            ))}
          </div>
        </div>
        <div className='hidden'>
          <Checkbox
            value={images}
            name='images'
            placeholder='images'
            options={images}
            submitted={false}
            required={false}
          />
        </div>
      </div>
    </>
  );
};

export default Upload;
