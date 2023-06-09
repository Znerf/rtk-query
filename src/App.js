import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import './App.css';
import Home from './pages/Home';
import { todoApi } from './features/todoAPI';

function App() {
  return (
    <ApiProvider api={todoApi}>
      <div className="App">
        <Home />
      </div>
    </ApiProvider>
  );
}

export default App;
