import { useContext, useEffect } from 'react';
import { StateContext } from '../providers/StateProvider';

export const Todo = () => {
  const { combinedState, combinedDispatch } = useContext(StateContext);
  console.log('TODO BODY');
  useEffect(() => {
    console.log('TODO');
  }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Todo View</h1>
      {combinedState.todoState.map(({ text }: { text: string }) => {
        return <span>{text}</span>;
      })}

      <button
        onClick={() =>
          combinedDispatch({
            type: 'ADD',
            payload: {
              type: 'todo',
              id: Math.random(),
              text: Math.random(),
            },
          })
        }
      >
        Add todo
      </button>
    </div>
  );
};
