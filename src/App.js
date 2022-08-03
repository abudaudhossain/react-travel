import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/ContactUs';
import PackageDetails from "./pages/PackageDetails"

function App() {
  return (
    <BrowserRouter>
      <Layout >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/package/:packageId" element={<PackageDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
