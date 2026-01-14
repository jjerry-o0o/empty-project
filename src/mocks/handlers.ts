import { http, HttpResponse } from 'msw';

const UserInfo = [
  { name: 'userA', age: 23 },
  { name: 'userB', age: 17 },
];

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json(UserInfo);
  }),
];
