export interface InitialTodoState {
  type: 'todo';
  id: number;
  text: string;
}

export interface InitialSummaryState {
  type: 'summary';
  id: number;
  text: string;
}

export type InitialState = Array<InitialTodoState | InitialSummaryState>;

export const initialTodoState: InitialTodoState[] = [
  {
    type: 'todo',
    id: 0,
    text: 'First todo',
  },
  {
    type: 'todo',
    id: 1,
    text: 'Second todo',
  },
  {
    type: 'todo',
    id: 2,
    text: 'Third todo',
  },
  {
    type: 'todo',
    id: 3,
    text: 'Fourth todo',
  },
];

export const initialSummaryState: InitialSummaryState[] = [
  {
    type: 'summary',
    id: 0,
    text: 'First summary',
  },
  {
    type: 'summary',
    id: 1,
    text: 'Second summary',
  },
  {
    type: 'summary',
    id: 2,
    text: 'Third summary',
  },
  {
    type: 'summary',
    id: 3,
    text: 'Fourth summary',
  },
];
