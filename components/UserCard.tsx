import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { IconButton } from '@/components/IconButton';
import Link from 'next/link';

interface IProps {
  username: string;
  role?: string;
  href?: string;
}

export const UserCard = ({ username, role, href = '/' }: IProps) => {
  return (
    <div className='py-6 px-7 min-h-20 flex flex-row items-center justify-between bg-white shadow-xs drop-shadow-xs rounded-xl'>
      <div className='flex flex-col'>
        <p className='text-darkGrey text-titleCard font-semibold'>{username}</p>
        <p className='text-grey text-smallText font-normal'>{role}</p>
      </div>
      <Link href={href}>
        <IconButton classnames='w-6 h-6 bg-orange rounded-full'>
          <ArrowRightIcon className='w-4 text-white' />
        </IconButton>
      </Link>
    </div>
  );
};
