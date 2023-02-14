import Router from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

import { Layout } from '@/components/Layout';
import { IconButton } from '@/components/IconButton';
import { Label } from '@/components/Label';
import { useUsers } from '@/hooks/useUsers';
import text from '@/public/locales/en/addUser.json';
import { UserInput } from '@/models/User';

const options: { label: string; value: string }[] = [
  {
    label: 'Administrator',
    value: 'ADMIN'
  },
  {
    label: 'Regular user',
    value: 'DEV'
  }
];

type SelectType = (typeof options)[number]['value'];

const userSchema = yup.object({
  firstName: yup.string().default('').min(1).max(60).required(),
  lastName: yup.string().default('').min(1).max(60).required(),
  email: yup.string().email().default('').max(60).nullable(),
  role: yup
    .mixed<SelectType>()
    .oneOf(options.map((option) => option.value))
    .nullable()
});

export default function AddUserPage() {
  const { addUser } = useUsers();

  const { register, handleSubmit, reset } = useForm<UserInput>({
    resolver: yupResolver(userSchema)
  });

  const onSubmitHandler: SubmitHandler<UserInput> = (data) => {
    console.log('DATA', data);
    addUser(data);
    // reset();
    // Router.push('/');
  };

  return (
    <>
      <Head>
        <title>Add new user</title>
        <meta name='description' content='New user page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo_prediko.svg' />
      </Head>
      <main>
        <Layout>
          <form className='h-full' onSubmit={handleSubmit(onSubmitHandler)}>
            <div className='mb-10 p-8 flex flex-row justify-between bg-white rounded-l-xl'>
              <div className='flex flex-row items-center'>
                <Link href='/'>
                  <IconButton classnames='w-6 h-6 my-0 bg-orange rounded-full'>
                    <ArrowLeftIcon className='w-4 text-white' />
                  </IconButton>
                </Link>
                <h2 className='ml-9 font-bold text-title text-darkGrey drop-shadow-xs'>{text.title}</h2>
              </div>
              <button className='py-3.5 px-4 bg-green font-medium rounded-xl text-text text-white' type='submit'>
                {text.submit}
              </button>
            </div>
            <div className='pt-8 pl-14 h-[76%] bg-white rounded-tl-xl'>
              <span className='text-subtitle text-darkGrey font-bold drop-shadow-xs'>{text.subtitle}</span>
              <div className='max-w-[80%] mt-8 grid grid-cols-3 gap-y-8 gap-x-28'>
                <div className='flex flex-col'>
                  <Label label={text.firstName} htmlFor='firstName' />
                  <input
                    id='firstName'
                    placeholder='Insert first name'
                    required
                    className='p-3.5 rounded border-lightGrey border-solid border-2 text-grey text-text font-light'
                    {...register('firstName')}
                  />
                </div>
                <div className='flex flex-col'>
                  <Label label={text.lastName} htmlFor='lastName' />
                  <input
                    id='lastName'
                    placeholder='Insert last name'
                    required
                    className='p-3.5 rounded border-lightGrey border-solid border-2 text-grey text-text font-light'
                    {...register('lastName')}
                  />
                </div>
                <div className='flex flex-col'>
                  <Label label={text.email} htmlFor='email' />
                  <input
                    id='email'
                    placeholder='Insert email address'
                    type='email'
                    className='p-3.5 rounded border-lightGrey border-solid border-2 text-grey text-text font-light'
                    {...register('email')}
                  />
                </div>
                <div className='flex flex-col'>
                  <Label label={text.role} htmlFor='role' />
                  <select
                    id='role'
                    defaultValue={''}
                    className='p-3.5 rounded border-lightGrey border-solid border-2 text-grey text-text font-light'
                    {...register('role')}
                  >
                    <option value=''>{text.rolePlaceholder}</option>
                    {options.map((option) => (
                      <option value={option.value} key={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </form>
        </Layout>
      </main>
    </>
  );
}
