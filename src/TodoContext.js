import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
  {
    id: 1,
    text: 'プロジェクト作成',
    done: true
  },
  {
    id: 2,
    text: 'コンポネートスタイリング',
    done: true
  },
  {
    id: 3,
    text: 'Context作成',
    done: false
  },
  {
    id: 4,
    text: '機能実装',
    done: false
  }
];

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.conact(action.todo);
    case 'TOGGLE':
      return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoStateContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}></TodoNextIdContext.Provider>
        {children}
      </TodoStateContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
}
