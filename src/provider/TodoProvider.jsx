import { useReducer } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return { ...state, todos: [...state.todos, action.payload] };
    }
  }
}

function TodoProvider() {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  const memoizedState = useMemo(() => state, [state]);
  return (
    <TodoStateContext.Provider value={memoizedState}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export default TodoProvider;
