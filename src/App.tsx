import '@/index.css';
import { Button } from '@/components/ui/button';
import { axiosApi } from '@/api/axiosInstans';
import { useEffect, useState } from 'react';

interface UserInfo {
  name: string;
  age: number;
}
function App() {
  const [userInfo, setUserInfo] = useState<UserInfo[]>([]);

  useEffect(() => {
    axiosApi.get(`/users`).then(res => {
      console.log('res : ', res.data);
      setUserInfo(res.data);
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full h-fit bg-amber-200 py-10">
      <p className="text-pink-500">Vite + React </p>
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      {userInfo.map(user => (
        <div>
          <p className="text-pink-500">
            이름 : {user.name} / 나이 : {user.age}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
