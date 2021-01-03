import React from 'react';
import Dashboard from './layout/dashboard';
import { SideProvider } from './state/userInfo';
import "./App.css";

function App() {
  return (
    <SideProvider>
      <Dashboard />
    </SideProvider>
  );
}

export default App;
