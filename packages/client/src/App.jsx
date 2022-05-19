import { useEffect, useState } from 'react';
import Formulaire from './component/formulaire';

export const App = () => {
  const [response, setResponse] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.text())
      .then((res) => setResponse(res));
  }, []);

  return (
    <>
      <Formulaire />
      <p>Hello from the client!</p>
      {response && <p>{response}</p>}
    </>
  );
};
