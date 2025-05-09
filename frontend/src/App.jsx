import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/index/Index';
import Login from './pages/login/Login';
import Feed from './pages/feed/Feed';
import Perfil from './pages/perfil/Perfil';
import Comunidades from './pages/comunidades/Comunidades';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/comunidades" element={<Comunidades />} />
      </Routes>
    </Router>
  )
}

export default App
