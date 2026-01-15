import '@/index.css';
import { Button } from '@/components/ui/button';
import { useUserInfo } from '@/hooks/useUserInfo';

function App() {
  const { data: userInfo, isLoading } = useUserInfo();

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full h-fit bg-amber-200 py-10">
      <p className="text-pink-500">Vite + React </p>
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      {!isLoading &&
        userInfo?.map(user => (
          <div key={user.id}>
            <p className="text-pink-500">
              이름 : {user.name} / 나이 : {user.age}
            </p>
          </div>
        ))}
    </div>
  );
}

export default App;
