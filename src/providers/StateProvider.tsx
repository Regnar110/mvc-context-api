import React, {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useMemo,
  useReducer,
} from 'react';
import { initialSummaryState, initialTodoState } from '../state/initialState';
import { summaryReducer, todoReducer } from '../state/reducer';
import { combineDispatch } from '../storeUtils/combineReducers';

export const StateContext = createContext<{
  combinedState: {
    todoState: any;
    summaryState: any;
  };
  combinedDispatch: Dispatch<unknown>;
}>({
  combinedState: {
    todoState: [],
    summaryState: [],
  },
  combinedDispatch: () => undefined,
});

export const StateAndDisptachProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [todoState, todoDispatch] = useReducer(todoReducer, initialTodoState);
  const [summaryState, summaryDispatch] = useReducer(
    summaryReducer,
    initialSummaryState
  );

  const combinedDispatch = useCallback(
    combineDispatch(todoDispatch, summaryDispatch),
    [todoDispatch, summaryDispatch]
  );

  const combinedState = useMemo(
    () => ({ todoState, summaryState }),
    [todoState, summaryState]
  );

  return (
    <StateContext.Provider value={{ combinedState, combinedDispatch }}>
      {children}
    </StateContext.Provider>
  );
};
