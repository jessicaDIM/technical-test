import useSWR from 'swr';

import { User } from '@/models/User';
import { fetcher } from '@/helpers/fetcher';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

interface UseUsersOutput {
  users: User[];
  isFetching: boolean;
  isError: boolean;
  addUser: (newUser: User) => Promise<void>;
}

export const useUsers = (): UseUsersOutput => {
  const { data, error } = useSWR(apiUrl, fetcher);

  const addUser = async (newUser: User) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newUser })
    };
    await fetcher(`${apiUrl}`, requestOptions);
  };

  return { users: data || [], isFetching: !error && !data, isError: error, addUser };
};
