import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button'; 

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    async function checkApi() {
      try {
        const res = await fetch('http://127.0.0.1:5000/api/health');
        const data = await res.json();
        setMessage(`API says: ${data.status}`);
      } catch (error) {
        setMessage('Could not reach the API');
        console.error(error);
      }
    }
    checkApi();
  }, []);

  return (
  <div className="min-h-screen flex items-center justify-center p-6">
    <div className="w-full max-w-sm rounded-2xl bg-cv-card p-6 border border-white/10">
      <h1 className="text-2xl font-bold">CineVault</h1>
      <p className="mt-2 text-cv-muted">{message}</p>
       <div className="mt-6 flex flex-wrap gap-3">
        <Button>Watch now</Button>
        <Button variant="secondary">Add to list</Button>
        <Button variant="outline">Trailer</Button>
        <Button variant="ghost">More info</Button>
    </div>
    </div>
    </div>
);
}

export default App;