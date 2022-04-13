import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shopee from './Projects/Shopee/pages/DashBoard';
import Dashboard from './Projects/DashBoard/DashBoard';
import HackReactor from './Projects/Hackreactor/Hackreactor';
import LoginPage from './Projects/LoginPage/LoginPage';
import TodoList from './Projects/TodoList/TodoList';
import Twitter from './Projects/Twitter/Twitter';

import './index.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopee" element={<Shopee />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/HackReactor" element={<HackReactor />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/Twitter" element={<Twitter />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
