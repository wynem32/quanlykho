import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './layouts/main';
import Login from './pages/login';

function App() {
  return (
    <Layout className='App'>
      <Routes>
        <Route path='*' element={<Main />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;