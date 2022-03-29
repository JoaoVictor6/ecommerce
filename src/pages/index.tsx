import { useEffect } from 'react';
import { makeServer } from 'src/config/mirage';

const environment = process.env.NODE_ENV;
if(environment !== 'production') makeServer();

export default function Home() {
  useEffect(() => {
    (async ()  => {
      const response = (await fetch('/api/reminders')).json();
      const data = await response;
      console.log(data);
    })();

  });
  return (
    <>
      <h1 className='text-4xl'>Home</h1>
    </>
  );
}
