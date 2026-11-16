import { useEffect, useState } from 'react';

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
      <button className="mt-6 rounded-lg bg-cv-primary px-4 py-2 font-medium transition hover:brightness-110">
        Watch now
      </button>
      <span className="ml-3 text-cv-accent">Secondary accent</span>
    </div>
  </div>
);
}

export default App;