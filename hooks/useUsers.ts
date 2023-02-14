import useSWR from 'swr';

import { fetcher } from '@/helpers/fetcher';
import { User, UserInput } from '@/models/User';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

interface UseUsersOutput {
  users: User[];
  isFetching: boolean;
  isError: boolean;
  addUser: (newUser: UserInput) => Promise<void>;
}

export const useUsers = (): UseUsersOutput => {
  const { data, error } = useSWR(apiUrl, fetcher);

  const addUser = async (newUser: UserInput) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: newUser.firstName,
        last_name: newUser.lastName,
        email: newUser.email,
        role: newUser.role
      })
    };
    await fetcher(`${apiUrl}`, requestOptions);
  };

  return { users: data || [], isFetching: !error && !data, isError: error, addUser };
};
