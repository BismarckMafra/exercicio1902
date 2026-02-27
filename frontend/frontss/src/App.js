
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';

import './App.css';


import Header from './components/header/Header';
import MainSection from './components/section/MainSection';
import Footer from './components/footer/Footer';
import Nav from './components/nav/MainNav';
import SectionUser from './pages/SectionUser';
import SectionCadastra from './pages/SectionCadastra';
import SectionAtualiza from './pages/SectionAtualiza';
import SectionDeleta from './pages/SectionDeleta';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/listar-usuarios" element={<SectionUser />} />
        <Route path="/listar-usuarios/:id" element={<SectionUser />} />
        <Route path="/cadastrar-usuario" element={<SectionCadastra />} />
        <Route path="/alterar-dados-cliente" element={<SectionAtualiza />} />
        <Route path="/deletar-usuario" element={<SectionDeleta />} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
