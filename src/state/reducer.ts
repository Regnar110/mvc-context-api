import { produce } from 'immer';

export const todoReducer = produce((draft, action) => {
  switch (action.type) {
    case 'ADD': {
      console.log(action);
      draft.push(action.payload);
    }
  }
});

export const summaryReducer = produce((draft, action) => {
  return 'y';
});
