import { axiosApi } from '@/api/axiosInstans';
import type { UserInfo } from '@/types/UserInfo';

export const fetchUsers = async (): Promise<UserInfo[]> => {
  const { data } = await axiosApi.get<UserInfo[]>('/users');
  return data;
};
