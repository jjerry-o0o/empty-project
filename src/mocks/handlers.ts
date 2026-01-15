import { http, HttpResponse } from 'msw';

import UserData from '@/mocks/data/User.json';

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json(UserData);
  }),
];
