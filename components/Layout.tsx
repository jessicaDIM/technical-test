import { ArrowLeftOnRectangleIcon, Cog8ToothIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { IconButton } from './IconButton';

export const Layout = ({ children }: any) => {
  return (
    <div className='min-h-screen grid grid-cols-[100px_minmax(900px,_1fr)]'>
      <div className='pt-6 pb-6 px-6 flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <div className='mb-7 flex justify-center'>
            <Image src='/logo_prediko.svg' alt='prediko logo' width={41} height={48} />
          </div>
          <IconButton>
            <UsersIcon className='w-6 h-6 text-mediumGrey' />
          </IconButton>
          <IconButton selected>
            <UserCircleIcon className='w-6 h-6 text-white' />
          </IconButton>
          <IconButton>
            <Cog8ToothIcon className='w-6 h-6 text-mediumGrey' />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <ArrowLeftOnRectangleIcon className='w-6 h-6 text-mediumGrey' />
          </IconButton>
        </div>
      </div>
      <div className='bg-grey pt-5 pl-5'>{children}</div>
    </div>
  );
};
