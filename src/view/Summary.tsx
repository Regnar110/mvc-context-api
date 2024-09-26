import { useEffect } from 'react';

export const Summary = () => {
  console.log('Summary Body');
  useEffect(() => {
    console.log('Summary');
  }, []);
  return <h1>Summary View</h1>;
};
