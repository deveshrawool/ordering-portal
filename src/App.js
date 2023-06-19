import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AllProducts from './screens/AllProducts';
import Navigation from './modules/navigation/navigation.component';
import HeaderSection from './modules/header-section/HeaderSection';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderSection />}>
        <Route index element={<AllProducts />} />
        <Route path="/all" element={<div>hello</div>} />
      </Route>
    </Routes>
  );
}

export default App;
