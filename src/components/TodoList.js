import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const state = useTodoState;
  console.log(state);

  return (
    <TodoListBlock>
      <TodoItem text='プロジェクトの作成' done={true} />
      <TodoItem text='コンポネートのスタイリング' done={true} />
      <TodoItem text='Contextの作成' done={false} />
      <TodoItem text='機能実装' done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
