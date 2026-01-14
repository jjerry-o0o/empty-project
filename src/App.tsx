import '@/index.css';
import { Button } from '@/components/ui/button';
import { axiosApi } from '@/api/axiosInstans';

function App() {
  const { data } = await axiosApi.get(`/api/users`);
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full h-50 bg-amber-200">
      <p className="text-pink-500">Vite + React </p>
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}

export default App;
