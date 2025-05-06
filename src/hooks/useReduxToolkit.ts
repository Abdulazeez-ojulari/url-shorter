import { useAppDispatch, useAppSelector } from "../store/hooks";

const useReduxToolkit = () => {
  const dispatch = useAppDispatch();

  const state = useAppSelector((state) => {
    return state.app;
  });

  return { dispatch, state };
};

export default useReduxToolkit;
