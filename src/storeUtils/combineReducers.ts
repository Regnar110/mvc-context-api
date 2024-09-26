export const combineDispatch =
  (...dispatches: any[]) =>
  (action: any) =>
    dispatches.forEach((dispatch) => dispatch(action));
