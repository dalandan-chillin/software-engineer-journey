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

  return <h1>{message}</h1>;
}

export default App;