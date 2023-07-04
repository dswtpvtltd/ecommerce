import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useReducer,
  useMemo,
} from "react";

interface UIProviderProps {
  children?: ReactNode;
}

export interface StateModifiers {
  openSidebar: () => void;
  closeSidebar: () => void;
}

export interface StateValues {
  isSidebarOpen: Boolean;
}

const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
};

const initialState: StateValues = {
  isSidebarOpen: false,
};

type State = StateValues & StateModifiers;

const CategoryContext = createContext<State>({
  ...stateModifiers,
  ...initialState,
});

type Action = { type: "OPEN_SIDEBAR" } | { type: "CLOSE_SIDEBAR" };

function uiReducer(state: StateValues, action: Action) {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: true,
      };
    case "CLOSE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: false,
      };
    default:
      return state;
  }
}

export const CategoryUIProvider: FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);
  const openSidebar = () => dispatch({ type: "OPEN_SIDEBAR" });
  const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" });
  const value = useMemo(() => {
    return {
      openSidebar,
      closeSidebar,
      ...state,
    };
  }, [state.isSidebarOpen]);

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryUI = () => {
  return useContext<State>(CategoryContext);
};
