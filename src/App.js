import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import TodoList from './components/TodoList';

function App() {
  return (
    <Provider store={store}>
       <TodoList />
    </Provider>
  )
}

export default App;
